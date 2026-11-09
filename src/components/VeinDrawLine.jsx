import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VeinDrawLine() {
  const pathRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set up stroke-dash for progressive draw
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        const drawLength = pathLength * (1 - self.progress);
        gsap.set(path, { strokeDashoffset: drawLength });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden opacity-40 hidden lg:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 5000"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 120 0 
             Q 300 800, 180 1500 
             T 1320 2400 
             Q 1150 3200, 240 3900 
             T 720 5000"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="transition-colors duration-700"
        />
      </svg>
    </div>
  );
}

