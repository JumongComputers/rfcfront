import React, { useCallback, useEffect, useRef, useState } from "react";
import "./carousel.css";

// Import images to let Vite handle bundling
// import passoverImage from "./images/aa.png";
// import buildersImage from "./images/bb.png";
// import welcomeImage from "./images/cc.png";

type SlideType = "passover" | "builders" | "welcome";

interface Slide {
  type: SlideType;
  content: React.ReactNode;
}

const AUTO_PLAY_DELAY = 4000;

// Slides data can be defined outside the component
const slides: Slide[] = [
  {
    type: "passover",
    content: (
      <div className="slide-content passover-slide">
        <img src= "./images/aa.png" alt="passover"  className="pass-img"/>
      </div>
    ),
  },
  {
    type: "builders",
    content: (
      <div className="slide-content builders-slide">
        <img src= "./images/bb.png" alt="builders" />
      </div>
    ),
  },
  {
    type: "welcome",
    content: (
      <div className="slide-content welcome-slide">
        <img src= "./images/cc.png" alt="welcome to rfc" />
      </div>
    ),
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;
  const slideWidthPercentage = 100 / totalSlides;

  // Navigation
  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToNextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % totalSlides), [totalSlides]);
  const goToPrevSlide = useCallback(() => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1)), [totalSlides]);

  // AutoPlay
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(goToNextSlide, AUTO_PLAY_DELAY);
  }, [goToNextSlide, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        stopAutoPlay();
        goToPrevSlide();
        startAutoPlay();
      } else if (e.key === "ArrowRight") {
        stopAutoPlay();
        goToNextSlide();
        startAutoPlay();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, startAutoPlay, stopAutoPlay]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * slideWidthPercentage}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.type}
              className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
            >
              {slide.content}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button className="carousel-nav prev" onClick={goToPrevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button className="carousel-nav next" onClick={goToNextSlide} aria-label="Next slide">
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
