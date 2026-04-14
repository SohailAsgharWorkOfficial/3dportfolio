import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { areFontsReady, waitForFonts } from "./fontReady";

interface AnimElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
let splitTextPending = false;

function clearSplitAnimation(element: AnimElement) {
  element.anim?.kill();
  element.split?.revert();
  element.anim = undefined;
  element.split = undefined;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras = document.querySelectorAll<AnimElement>(".para");
  const titles = document.querySelectorAll<AnimElement>(".title");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (window.innerWidth < 900 || prefersReducedMotion) {
    paras.forEach(clearSplitAnimation);
    titles.forEach(clearSplitAnimation);
    return;
  }

  if (!areFontsReady()) {
    if (!splitTextPending) {
      splitTextPending = true;
      void waitForFonts().then(() => {
        splitTextPending = false;
        setSplitText();
      });
    }
    return;
  }

  const triggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const toggleAction = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");
    clearSplitAnimation(para);

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: toggleAction,
          start: triggerStart,
        },
        duration: 0.9,
        ease: "power3.out",
        y: 0,
        stagger: 0.018,
      }
    );
  });

  titles.forEach((title) => {
    clearSplitAnimation(title);

    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: toggleAction,
          start: triggerStart,
        },
        duration: 0.7,
        ease: "power2.out",
        y: 0,
        rotate: 0,
        stagger: 0.02,
      }
    );
  });
}
