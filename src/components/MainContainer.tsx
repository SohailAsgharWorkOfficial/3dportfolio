import {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import TechStack from "./TechStack";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    let rafId: number | null = null;

    const resizeHandler = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(() => {
        setSplitText();
        const nextIsDesktopView = window.innerWidth > 1024;
        setIsDesktopView((prev) =>
          prev === nextIsDesktopView ? prev : nextIsDesktopView
        );
      });
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && <TechStack />}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
