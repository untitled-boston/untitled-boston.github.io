import { useEffect, useRef, useState } from "react";
import "../../assets/css/Overview.css";

const slides = [
  {
    title: "",
    content: (
      <div className="overview-text">
        Boston has a problem with fun.{" "}
        <span style={{ fontWeight: "bolder" }}>We are the solution</span>
        .
        <br />
        <br />
        We work with artists both local and from afar. <br />
        <br /> We creating experiences beyond genre and labels.
        <br />
        <br />
        We are{" "}
        <span style={{ fontWeight: "bolder", textDecoration: "underline" }}>
          Untitled
        </span>
        .
      </div>
    ),
  },
  {
    title: "Gamerave @ Bear Cages",
    content: <img src="/assets/images/gamerave.jpg" alt="Gamerave Image" />,
  },
  {
    title: "Gamerave @ Bear Cages",
    content: (
      <img src="/assets/images/gamerave_deck.jpg" alt="Gamerave Deck Image" />
    ),
  },
  {
    title: "Gamerave @ Bear Cages",
    content: (
      <iframe
        width="100%"
        height="100%"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/st6nley/phieirdo&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    ),
  },
  {
    title: "Asalto @ God's Country",
    content: <img src="/assets/images/asalto.jpg" alt="Asalto Image" />,
  },
  {
    title: "Asalto @ God's Country",
    content: (
      <video className="slide-video" controls width="100%" height="100%" loop>
        <source src="/assets/video/asalto.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    title: "Rio Night w/ Baker Street Radio",
    content: <img src="/assets/images/rio.jpg" alt="Asalto Image" />,
  },
  {
    title: "Rio Night w/ Baker Street Radio",
    content: (
      <video className="slide-video" controls width="100%" height="100%" loop>
        <source src="/assets/video/rio_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    title: "Rio Night w/ Baker Street Radio",
    content: (
      <iframe
        width="100%"
        height="100%"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jeffy-fucking-jeffries/jeff-jeffries-baker-street-rio-de-janeiro-22424&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    ),
  },
  {
    title: "Summer Speakeasy w/ Baker Street Radio",
    content: <img src="/assets/images/speakeasy.jpg" alt="Jazz Image" />,
  },
  {
    title: "Summer Speakeasy w/ Baker Street Radio",
    content: <img src="/assets/images/jazz.jpg" alt="Jazz Image" />,
  },
  {
    title: "Private Party @ Little Compton Estate",
    content: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4OdZ_8zj7_E?si=vebumgAoKlGmQElq"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Party @ Underhill",
    content: <img src="/assets/images/underhill.jpg" alt="Jazz Image" />,
  },
  {
    title: "Party @ Underhill",
    content: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/PjECp2nK3ik"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Music Video for Jimrat",
    content: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/-bFV0OHawTI?si=rWCMO6d7g1S2vn2K"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
];

export const Overview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const startAutoSlide = () => {
    resetProgressBar();
    stopAutoSlide(); // Ensure no previous interval is running
    slideInterval.current = window.setInterval(() => {
      handleNext();
    }, 400000000000); // Slide every 4 seconds
  };

  const stopAutoSlide = () => {
    if (slideInterval.current !== null) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const resetProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animation = "none";
      void progressBarRef.current.offsetWidth; // Trigger a reflow to restart the animation
      progressBarRef.current.style.animation = "progressBar 4s linear infinite";
    }
  };

  const pauseProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animationPlayState = "paused";
    }
  };

  const resumeProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animationPlayState = "running";
    }
  };

  const handlePrev = () => {
    pauseCurrentSlideVideo();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide(); // Reset interval when manually changing slides
  };

  const handleNext = () => {
    pauseCurrentSlideVideo();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoSlide(); // Reset interval when manually changing slides
  };

  const pauseCurrentSlideVideo = () => {
    const currentSlideElement =
      document.querySelectorAll(".slide")[currentSlide];
    const video = currentSlideElement.querySelector("video");
    if (video) {
      video.pause();
    }
  };

  const handleMouseEnter = () => {
    stopAutoSlide(); // Pause the interval when hovering over the slide
    pauseProgressBar(); // Pause the progress bar animation
  };

  const handleMouseLeave = () => {
    startAutoSlide(); // Resume the interval when leaving the slide
    resumeProgressBar(); // Resume the progress bar animation
  };

  const goToSlide = (index: number) => {
    pauseCurrentSlideVideo();
    setCurrentSlide(index);
    startAutoSlide(); // Reset interval when manually changing slides
  };

  return (
    <div className="overview-container">
      <div className="left-side">
        <div className="overview-title">
          <h1>We Make Nights You Remember</h1>
        </div>
        <div className="slider-container">
          <h3 className="slide-title">{slides[currentSlide].title}</h3>
          <div
            className="slider"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="slides"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="slide"
                  style={{ minWidth: "100%", overflow: "hidden" }}
                >
                  {slide.content}
                </div>
              ))}
            </div>
          </div>
          <button className="slider-button prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="slider-button next" onClick={handleNext}>
            &#10095;
          </button>
          <div
            ref={progressBarRef}
            className="progress-bar"
            style={{ animation: "progressBar 4s linear infinite" }}
          ></div>{" "}
          <div className="dots-container">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
