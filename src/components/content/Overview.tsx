import React, { useState } from "react";
import "../../assets/css/Overview.css";

export const Overview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Jazz Vibes",
      content: (
        <div className="slide">
          <img src="/assets/images/jazz.jpg" alt="Jazz Image" />
        </div>
      ),
    },
    {
      title: "Live Performance",
      content: (
        <div className="slide">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/sTfz5AxwBds"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      title: "SoundCloud Track",
      content: (
        <div className="slide">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      ),
    },
    // Add more slides as needed
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overview-container">
      <div className="left-side">
        <div className="overview-title">
          <h1>Underground Event Consultancy</h1>
        </div>
        <div className="slider-container">
          <h3 className="slide-title">{slides[currentSlide].title}</h3>
          <div className="slider">{slides[currentSlide].content}</div>
          <button className="slider-button prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="slider-button next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="overview-content">
        <p>
          Discover how you can connect with the Underground scene of Boston
          through immersive experiences in art, fashion, and music that resonate
          deeply with Boston's young adult market.
        </p>
      </div>
    </div>
  );
};
