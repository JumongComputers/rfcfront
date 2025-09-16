import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

type SlideType = "passover" | "builders" | "welcome";

interface Slide {
  type: SlideType;
  content: React.ReactNode;
}

const AUTO_PLAY_DELAY = 4000;

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Slides data
  const slides: Slide[] = [
    {
      type: "passover",
      content: (
        <div className="slide-content passover-slide">
          <div className="church-logo">
            <span className="logo-text">ROCK FOUNDATION CHURCH ABEOKUTA</span>
          </div>
          <div className="main-content">
            <div className="service-badge">
              <span className="int-service">INT</span>
              <span className="service-type">SERVICE</span>
            </div>
            <div className="event-title">
              <h1>
                CHRIST<br />OUR
              </h1>
              <h2 className="passover-text">PASSOVER</h2>
            </div>
            <div className="event-details">
              <p className="event-schedule">ALL SUNDAYS IN JANUARY</p>
              <p className="event-tagline">...experiencing God's power in 2023</p>
              <div className="live-info">
                <span className="live-badge">LIVE</span>
                <span className="streaming-info">📺 🔘 MixIr Tunde Amosun</span>
              </div>
            </div>
            <div className="time-info">
              <span className="time-label">Time</span>
              <span className="time-value">
                9<br />AM
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "builders",
      content: (
        <div className="slide-content builders-slide">
          <div className="church-logo">
            <span className="logo-text">ROCK FOUNDATION CHURCH</span>
            <span className="service-subtitle">Youths And Singles Service</span>
          </div>
          <div className="main-content">
            <div className="invitation-text">You are Specially Invited to</div>
            <div className="event-title">
              <h1 className="builders-title">BUILDERS AND<br />CONQUERORS</h1>
              <h2 className="sunday-text">SUNDAY<br />SERVICE</h2>
            </div>
            <div className="event-details">
              <p className="venue">Tekobo Junction Idi Aba Abeokuta</p>
              <p className="date-time">SUNDAY 25TH JUNE 2023<br />11:00AM</p>
              <div className="service-features">
                <span>Interactive Message</span> | <span>Q&A</span> | <span>Refreshments</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "welcome",
      content: (
        <div className="slide-content welcome-slide">
          <div className="welcome-image">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f8ff'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%23666'%3EHappy Church Members%3C/text%3E%3C/svg%3E"
              alt="Happy church members"
            />
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">WELCOME</h1>
            <p className="welcome-subtitle">TO ROCK FOUNDATION CHURCH</p>
            <div className="tagline">
              <span className="script-text">
                building Matured Followers Of Christ
              </span>
            </div>
            <div className="location">
              <span>
                Tekobo Junction<br />Abeokuta, Ogun
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const totalSlides = slides.length;

  // Navigation
  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // AutoPlay
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(goToNextSlide, AUTO_PLAY_DELAY);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, []);

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
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
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
        <button className="carousel-nav prev" onClick={goToPrevSlide}>
          ‹
        </button>
        <button className="carousel-nav next" onClick={goToNextSlide}>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
