"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiRain() {
  useEffect(() => {
    const duration = 3 * 1000; // 3 saniye
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null; 
}
