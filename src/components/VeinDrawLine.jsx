import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function VeinDrawLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden opacity-40 hidden lg:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 5000"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 120 0 
             Q 300 800, 180 1500 
             T 1320 2400 
             Q 1150 3200, 240 3900 
             T 720 5000"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="transition-colors duration-700"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
