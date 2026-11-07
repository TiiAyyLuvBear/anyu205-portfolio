import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Interactive Bento / Project Card with:
 * - Cursor-tracking radial spotlight glow on surface & border
 * - Smooth 3D perspective tilt on hover (optional via `tilt` prop)
 */
export function SpotlightCard({
  children,
  className = '',
  tilt = true,
  spotlightColor = 'rgba(99, 102, 241, 0.16)',
  onClick,
  as: Component = 'div',
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20 };
  const rotateX = useSpring(useTransform(normY, [-0.5, 0.5], [4.5, -4.5]), springConfig);
  const rotateY = useSpring(useTransform(normX, [-0.5, 0.5], [-4.5, 4.5]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    normX.set(x / rect.width - 0.5);
    normY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    normX.set(0);
    normY.set(0);
  };

  const MotionTag = motion[Component] || motion.div;

  return (
    <MotionTag
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={
        tilt
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1100,
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300 hover:border-indigo-400/60 dark:border-slate-800/90 dark:bg-[#11172b]/90 dark:hover:border-indigo-400/50 ${className}`}
    >
      {/* Dynamic cursor spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </MotionTag>
  );
}
