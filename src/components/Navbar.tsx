import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const shouldUseSmoother = isDesktop && !prefersReducedMotion;

    if (shouldUseSmoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        speed: 1.2,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });
      smoother.scrollTop(0);
      smoother.paused(true);
    }

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".header ul a")
    );
    const onLinkClick = (e: MouseEvent) => {
      if (!smoother || window.innerWidth <= 1024) return;
      e.preventDefault();
      const elem = e.currentTarget as HTMLAnchorElement;
      const section = elem.getAttribute("data-href");
      if (section) {
        smoother.scrollTo(section, true, "top top");
      }
    };
    links.forEach((link) => link.addEventListener("click", onLinkClick));

    let resizeRaf: number | null = null;
    const onResize = () => {
      if (resizeRaf !== null) {
        window.cancelAnimationFrame(resizeRaf);
      }
      resizeRaf = window.requestAnimationFrame(() => {
        smoother?.refresh();
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (resizeRaf !== null) {
        window.cancelAnimationFrame(resizeRaf);
      }
      window.removeEventListener("resize", onResize);
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
      smoother?.kill();
      smoother = null;
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SA
        </a>
        <a
          href="https://www.linkedin.com/in/sohail-asghar-4068a0247/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/sohail-asghar
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
