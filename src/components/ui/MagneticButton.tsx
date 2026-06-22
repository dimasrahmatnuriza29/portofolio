"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  strength?: number;
  glow?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  strength = 0.35,
  glow = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.3 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={`${className} ${glow ? "relative" : ""}`}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
