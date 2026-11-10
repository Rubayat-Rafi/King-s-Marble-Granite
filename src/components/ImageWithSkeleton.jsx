import React, { useState, useEffect } from 'react';

/**
 * ImageWithSkeleton:
 * High-performance, luxury stone image loader with a dark shimmering skeleton.
 * Ensures an image NEVER flashes stale content or blank boxes while loading.
 */
export default function ImageWithSkeleton({
  src,
  alt = 'King\'s Marble & Granite Installation',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loadingText = 'Loading High-Res Stone · 0.4mm Detail',
  draggable = false,
  onClick,
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    if (!src) return;

    // Check if image is already cached in browser memory
    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#0D0D10] ${className}`}
    >
      {/* Luxury Obsidian Shimmer Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D0D10] border border-white/5 z-10 select-none">
          {/* Animated Shimmer Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />

          <div className="relative z-10 flex flex-col items-center gap-2.5 text-center px-4">
            <div className="w-6 h-6 rounded-full border border-[var(--accent)]/30 border-t-[var(--accent)] animate-spin" />
            {loadingText && (
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 font-mono">
                {loadingText}
              </span>
            )}
          </div>
        </div>
      )}

      {/* The Image Element */}
      <img
        src={src}
        alt={alt}
        draggable={draggable}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${imgClassName} transition-opacity duration-500 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

