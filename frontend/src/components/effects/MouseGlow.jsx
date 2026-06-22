import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      glow.style.transform = `translate3d(50vw,20vh,0)`;
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("pointermove", move);

    let frame;

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0"
      aria-hidden="true"
    >
      <div
       className="
        h-[550px]
        w-[550px]
       -translate-x-1/2
       -translate-y-1/2
       rounded-full
       bg-gradient-to-r
       from-white/10 
       via-white/10 
       to-white/5
       blur-[140px]
       "
      />   
    </div>
  );
}