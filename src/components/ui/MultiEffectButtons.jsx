import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * 1. MAGNETIC GLOW BUTTON
 * Physically attracts toward the cursor with dual-layer parallax + cursor-tracking radial spotlight.
 */
export function MagneticGlowButton({
  children,
  href,
  onClick,
  icon: Icon,
  className = '',
  external = false,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springConfig = { stiffness: 220, damping: 16, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const textX = useTransform(springX, (v) => v * 0.35);
  const textY = useTransform(springY, (v) => v * 0.35);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.28);
    y.set((e.clientY - centerY) * 0.35);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/40 dark:bg-indigo-500 ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-400 to-amber-300 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
      <motion.span
        style={{ x: textX, y: textY }}
        className="relative z-10 inline-flex items-center gap-2"
      >
        {children}
        {Icon && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        )}
      </motion.span>
    </Tag>
  );
}

/**
 * 2. LIQUID CURTAIN FILL BUTTON
 * Organic rising circular liquid wave from bottom-center that inverts colors + diagonal icon swap.
 */
export function LiquidCurtainButton({
  children,
  href,
  onClick,
  icon: Icon,
  className = '',
  external = false,
  ...props
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-slate-300/90 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-colors duration-500 hover:border-slate-900 hover:text-white dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-amber-400/80 dark:hover:text-slate-950 ${className}`}
      {...props}
    >
      {/* Rising liquid sphere */}
      <span className="pointer-events-none absolute left-1/2 top-full h-44 w-64 -translate-x-1/2 -translate-y-2 scale-0 rounded-full bg-slate-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-150 dark:bg-amber-400" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {Icon && (
          <span className="relative inline-flex h-4 w-4 overflow-hidden">
            <Icon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-5 group-hover:translate-x-5" />
            <Icon className="absolute h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        )}
      </span>
    </Tag>
  );
}

/**
 * 3. BORDER BEAM & METALLIC SHIMMER BUTTON
 * Spinning conic gradient laser border + diagonal metallic sheen sweep across the button surface.
 */
export function BorderBeamButton({
  children,
  href,
  onClick,
  icon: Icon,
  className = '',
  external = false,
  ...props
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-95 ${className}`}
      {...props}
    >
      {/* Spinning conic border beam */}
      <span className="border-beam-spin pointer-events-none absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_260deg,#6366f1_310deg,#f59e0b_360deg)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative inline-flex h-full w-full items-center gap-2 rounded-full bg-white px-5 py-2.5 text-slate-900 transition-colors dark:bg-[#0d1326] dark:text-slate-100">
        {/* Shimmer light sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {Icon && (
            <Icon className="h-4 w-4 text-indigo-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 dark:text-amber-400" />
          )}
        </span>
      </span>
    </Tag>
  );
}

/**
 * 4. 3D PERSPECTIVE CUBE FLIP BUTTON
 * Rotates the front label in 3D space (rotateX) on hover to reveal an alternate action label underneath.
 */
export function Flip3DButton({
  frontLabel,
  backLabel,
  href,
  onClick,
  icon: Icon,
  className = '',
  external = false,
  ...props
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/15 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200 ${className}`}
      style={{ perspective: '600px' }}
      {...props}
    >
      <div className="relative overflow-hidden py-0.5">
        <div className="flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full group-hover:opacity-0">
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span>{frontLabel}</span>
        </div>
        <div className="absolute inset-0 flex translate-y-full items-center gap-2 text-indigo-600 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 group-hover:opacity-100 dark:text-amber-300">
          {Icon && <Icon className="h-4 w-4 shrink-0 animate-pulse" />}
          <span>{backLabel || frontLabel}</span>
        </div>
      </div>
    </Tag>
  );
}

/**
 * 5. CYBER BRACKET / TERMINAL ACTION BUTTON
 * Monospace interactive pill where brackets [ ] expand outward and a status dot pulses.
 */
export function CyberBracketButton({
  children,
  href,
  onClick,
  icon: Icon,
  active = false,
  className = '',
  external = false,
  ...props
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 font-mono text-xs font-medium transition-all duration-300 ${
        active
          ? 'border-indigo-500 bg-indigo-500/15 text-indigo-700 shadow-sm shadow-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-500/20 dark:text-indigo-200'
          : 'border-slate-200/90 bg-slate-100/70 text-slate-700 hover:border-indigo-400/60 hover:bg-white hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/90 dark:hover:text-indigo-300'
      } ${className}`}
      {...props}
    >
      <span className="text-indigo-500 opacity-50 transition-transform duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-amber-400">
        [
      </span>
      {Icon && (
        <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{children}</span>
      <span className="text-indigo-500 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-amber-400">
        ]
      </span>
    </Tag>
  );
}

/**
 * 6. SONAR / AUDIO WAVE PULSE BUTTON
 * Emits concentric soundwave rings when hovered or active — tailored for Speech/Audio AI interactions.
 */
export function SonarPulseButton({
  children,
  onClick,
  active = false,
  icon: Icon,
  className = '',
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const triggerRipple = (e) => {
    const id = Date.now();
    setRipples((prev) => [...prev, id]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r !== id));
    }, 700);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      onClick={triggerRipple}
      className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
        active
          ? 'border-amber-500/80 bg-amber-500/15 text-amber-700 shadow-md shadow-amber-500/20 dark:border-amber-400 dark:bg-amber-400/20 dark:text-amber-200'
          : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-700 hover:border-indigo-500 hover:bg-indigo-500/20 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-200'
      } ${className}`}
      {...props}
    >
      {/* Concentric sonar rings */}
      {ripples.map((id) => (
        <span
          key={id}
          className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-indigo-400/60 dark:border-amber-400/60"
        />
      ))}
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            active ? 'bg-amber-400' : 'bg-indigo-400 group-hover:bg-amber-400'
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            active ? 'bg-amber-500' : 'bg-indigo-500'
          }`}
        />
      </span>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      <span>{children}</span>
    </button>
  );
}
