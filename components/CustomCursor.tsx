"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const isPointer = useRef(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Update dot position immediately with CSS transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      if (isClickable !== isPointer.current) {
        isPointer.current = isClickable;
        if (circleRef.current) {
          circleRef.current.classList.toggle("hover", isClickable);
        }
      }
    };

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth interpolation for circle
        circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
        circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px) translate(-50%, -50%)`;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle" />
    </>
  );
}
