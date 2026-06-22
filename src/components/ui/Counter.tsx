"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let raf = 0;
    const animate = (t: number) => {
      if (startTime === null) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const isFloat = !Number.isInteger(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isFloat ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}
