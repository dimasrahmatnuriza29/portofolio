"use client";

import { useRef, useState, type MouseEvent } from "react";

/**
 * Lightweight 3D tilt hook — tracks pointer position relative to the element
 * and returns rotation values + glare position.
 */
export function useTilt(max = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;
    setStyle({
      rotateX,
      rotateY,
      glareX: px * 100,
      glareY: py * 100,
      glareOpacity: 0.25,
    });
  };

  const onLeave = () =>
    setStyle({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, glareOpacity: 0 });

  return { ref, style, onMove, onLeave };
}
