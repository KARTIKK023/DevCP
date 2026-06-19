import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useOverviewAnimation = (containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".tool-card", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 75%",
        },
      });

      gsap.from(".overview-arrow", {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 65%",
        },
      });

      gsap.from(".devsphere-card", {
        opacity: 0,
        scale: 0.85,
        y: 30,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 60%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};