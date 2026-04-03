import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Potentials Dev+",
    category: "Web Development & Digital Experience Agency",
    tools: "Custom web development, UI/UX design, SEO optimization",
    image: "/images/potentialsdev.png",
    link: "https://potentialsdev.com",
  },
  {
    title: "Rungdo",
    category: "Online Paint E-commerce Platform",
    tools: "Product catalog & e-store functionality, Paint calculator feature, optimized UI",
    image: "/images/rungdo.png",
    link: "https://www.rungdo.com",
  },
  {
    title: "Glamur Paints",
    category: "Paint Products & Services Platform",
    tools: "E-commerce, Product Catalog, Responsive UI, API Integration",
    image: "/images/glamurpaints.png",
    link: "https://glamurpaints.com",
  },
  {
    title: "Literary Publisher",
    category: "Online Book Publishing Platform",
    tools: "  Responsive UI (React.js), Lead generation forms, Performance optimization",
    image: "/images/literarypublisher.png",
    link: "https://www.literarypublisher.com",
  },
  {
    title: "United Ummah",
    category: "Islamic Community & Digital Platform",
    tools: " React Framer Motion, Tailwind CSS, Responsive Design",
    image: "/images/unitedummah.png",
    link: "https://www.unitedummah.online",
  },
  {
    title: "Replica Copy Industries",
    category: "Printing & Document Services Platform",
    tools: "WordPress, Elementor, Custom CSS",
    image: "/images/replicacopyindustries.png",
    link: "https://www.replicacopyindustries.com",
  },
  {
    title: "4K Stream UK",
    category: "IPTV & Streaming Services Platform",
    tools: "Subscription system, Payment integration, Optimized UI",
    image: "/images/4kstreamuk.png",
    link: "https://www.4kstreamuk.com",
  },
  {
    title: "Orrdr.com",
    category: "Ecommerce Platform and Mobile App",
    tools: "Ecommerce, Mobile Experience, Order Management",
    image: "/images/orrdr.png",
    link: "https://orrdr.com",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
