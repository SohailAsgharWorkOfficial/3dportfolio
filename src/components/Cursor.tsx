import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const root = document.documentElement;

    const hasFinePointer = window.matchMedia("(any-pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    root.classList.add("custom-cursor-enabled");
    cursor.classList.add("cursor-active");

    let hoverLocked = false;
    let rafId = 0;
    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cursorPos = { ...mousePos };
    let nativeCursorVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const onCursorEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      if (target.dataset.cursor === "icons") {
        hoverLocked = true;
        cursor.classList.add("cursor-icons");
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        cursor.style.transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`;
      }

      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
        nativeCursorVisible = true;
        root.classList.add("cursor-native-visible");
      }
    };

    const onCursorLeave = () => {
      hoverLocked = false;
      cursor.classList.remove("cursor-disable", "cursor-icons");
      if (nativeCursorVisible) {
        nativeCursorVisible = false;
        root.classList.remove("cursor-native-visible");
      }
    };

    const cursorTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor]")
    );
    cursorTargets.forEach((target) => {
      target.addEventListener("mouseenter", onCursorEnter);
      target.addEventListener("mouseleave", onCursorLeave);
    });

    const animateCursor = () => {
      if (!hoverLocked) {
        const ease = 0.16;
        cursorPos.x += (mousePos.x - cursorPos.x) * ease;
        cursorPos.y += (mousePos.y - cursorPos.y) * ease;
        cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`;
      }
      rafId = window.requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    animateCursor();

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      cursorTargets.forEach((target) => {
        target.removeEventListener("mouseenter", onCursorEnter);
        target.removeEventListener("mouseleave", onCursorLeave);
      });
      root.classList.remove("custom-cursor-enabled", "cursor-native-visible");
      cursor.classList.remove("cursor-active", "cursor-disable", "cursor-icons");
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
