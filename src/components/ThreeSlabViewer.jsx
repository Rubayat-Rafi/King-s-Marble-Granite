import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function ThreeSlabViewer({ activeStone, fallbackImage }) {
  const mountRef = useRef(null);
  const [finish, setFinish] = useState('polished'); // 'polished' | 'honed' | 'leathered'
  const [isDragging, setIsDragging] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 3. Generate High-Res Procedural Stone Vein Texture on HTML5 Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Base tone from active stone
    ctx.fillStyle = activeStone.bg;
    ctx.fillRect(0, 0, 1024, 1024);

    // Natural marble veins
    ctx.strokeStyle = activeStone.accent;
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.55;

    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      let startX = Math.random() * 200;
      let startY = Math.random() * 1024;
      ctx.moveTo(startX, startY);

      for (let j = 0; j < 5; j++) {
        const cpX = startX + 150 + Math.random() * 100;
        const cpY = startY + (Math.random() - 0.5) * 350;
        const endX = startX + 250 + Math.random() * 100;
        const endY = startY + (Math.random() - 0.5) * 200;
        ctx.quadraticCurveTo(cpX, cpY, endX, endY);
        startX = endX;
        startY = endY;
      }
      ctx.stroke();
    }

    // Secondary fine fracture lines
    ctx.strokeStyle = activeStone.isDark ? '#FFFFFF' : '#888888';
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.35;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      let x = Math.random() * 1024;
      let y = Math.random() * 1024;
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 400, y + (Math.random() - 0.5) * 400);
      ctx.stroke();
    }

    const stoneTexture = new THREE.CanvasTexture(canvas);
    stoneTexture.wrapS = THREE.RepeatWrapping;
    stoneTexture.wrapT = THREE.RepeatWrapping;

    // 4. Geometry & Physical Material
    const slabGeometry = new THREE.BoxGeometry(2.4, 3.2, 0.12);

    const slabMaterial = new THREE.MeshPhysicalMaterial({
      map: stoneTexture,
      roughness: 0.1,
      metalness: 0.05,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    materialRef.current = slabMaterial;

    const slabMesh = new THREE.Mesh(slabGeometry, slabMaterial);
    slabMesh.rotation.x = 0.1;
    slabMesh.rotation.y = -0.25;
    scene.add(slabMesh);
    meshRef.current = slabMesh;

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    const rimLight = new THREE.PointLight(activeStone.accent, 2.5, 10);
    rimLight.position.set(-3, -2, 2);
    scene.add(rimLight);

    // 6. Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.1;
    let targetRotationY = -0.25;
    let dragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e) => {
      dragging = true;
      setIsDragging(true);
      prevX = e.clientX || (e.touches && e.touches[0].clientX);
      prevY = e.clientY || (e.touches && e.touches[0].clientY);
    };

    const onMouseMove = (e) => {
      if (!dragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX);
      const currentY = e.clientY || (e.touches && e.touches[0].clientY);
      const deltaX = currentX - prevX;
      const deltaY = currentY - prevY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      prevX = currentX;
      prevY = currentY;
    };

    const onMouseUp = () => {
      dragging = false;
      setIsDragging(false);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    dom.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    dom.addEventListener('touchstart', onMouseDown, { passive: true });
    dom.addEventListener('touchmove', onMouseMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // 7. Animation Loop with smooth inertia damping
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!dragging) {
        // Slow auto-float rotation
        targetRotationY += 0.0015;
      }

      slabMesh.rotation.y += (targetRotationY - slabMesh.rotation.y) * 0.08;
      slabMesh.rotation.x += (targetRotationX - slabMesh.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
      if (dom) {
        dom.removeEventListener('mousedown', onMouseDown);
        dom.removeEventListener('mousemove', onMouseMove);
        dom.removeEventListener('touchstart', onMouseDown);
        dom.removeEventListener('touchmove', onMouseMove);
      }
      if (container && dom && container.contains(dom)) {
        container.removeChild(dom);
      }
      slabGeometry.dispose();
      slabMaterial.dispose();
      stoneTexture.dispose();
      renderer.dispose();
    };
  }, [activeStone]);

  // Handle finish toggles: Polished, Honed, Leathered
  const updateFinish = (selectedFinish) => {
    setFinish(selectedFinish);
    if (!materialRef.current) return;

    if (selectedFinish === 'polished') {
      materialRef.current.roughness = 0.08;
      materialRef.current.clearcoat = 0.95;
      materialRef.current.clearcoatRoughness = 0.08;
      materialRef.current.reflectivity = 0.95;
    } else if (selectedFinish === 'honed') {
      materialRef.current.roughness = 0.55;
      materialRef.current.clearcoat = 0.05;
      materialRef.current.clearcoatRoughness = 0.5;
      materialRef.current.reflectivity = 0.3;
    } else if (selectedFinish === 'leathered') {
      materialRef.current.roughness = 0.88;
      materialRef.current.clearcoat = 0.0;
      materialRef.current.reflectivity = 0.15;
    }
  };

  if (!webglSupported) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black/60 flex items-center justify-center">
        <img
          src={fallbackImage}
          alt={activeStone.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
        title="Click and drag to rotate stone slab in 3D space"
      />

      {/* 3D Interactive Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
        <span className="text-xs uppercase tracking-[0.2em] bg-black/70 backdrop-blur-md px-3 py-1 text-white border border-white/10">
          ✦ Interactive 3D Slab
        </span>
        <span className="text-xs text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 hidden sm:inline-block">
          Drag to rotate 360°
        </span>
      </div>

      {/* Surface Finish Toggles (Polished, Honed, Leathered) */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-center gap-3 z-20">
        <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1 border border-white/15">
          <span className="text-[11px] uppercase tracking-wider text-white/60 px-2">
            Finish:
          </span>
          <button
            type="button"
            onClick={() => updateFinish('polished')}
            className={`text-xs uppercase tracking-wider px-3 py-1 transition-all ${
              finish === 'polished'
                ? 'bg-white text-black font-semibold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Polished
          </button>
          <button
            type="button"
            onClick={() => updateFinish('honed')}
            className={`text-xs uppercase tracking-wider px-3 py-1 transition-all ${
              finish === 'honed'
                ? 'bg-white text-black font-semibold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Honed
          </button>
          <button
            type="button"
            onClick={() => updateFinish('leathered')}
            className={`text-xs uppercase tracking-wider px-3 py-1 transition-all ${
              finish === 'leathered'
                ? 'bg-white text-black font-semibold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Leathered
          </button>
        </div>

        <span className="text-xs text-[var(--accent)] bg-black/75 px-3 py-1 border border-white/10 hidden md:inline-block">
          Real-time reflections &amp; depth
        </span>
      </div>
    </div>
  );
}

