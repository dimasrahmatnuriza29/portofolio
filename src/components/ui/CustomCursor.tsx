"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")
      );
      setHovering((prev) => (prev !== interactive ? interactive : prev));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      >
        <motion.div
          animate={{
            width: hovering ? 44 : 12,
            height: hovering ? 44 : 12,
            backgroundColor: hovering
              ? "rgba(34,211,238,0.15)"
              : "rgba(34,211,238,0.9)",
            borderColor: hovering ? "rgba(34,211,238,0.7)" : "transparent",
            scale: clicking ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 mix-blend-screen"
          style={{ boxShadow: "0 0 16px rgba(34,211,238,0.5)" }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block"
        style={{ x, y }}
        aria-hidden="true"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-accent" />
      </motion.div>
    </>
  );
}
