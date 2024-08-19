import React, { useState, useEffect } from "react";
import "../../assets/css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Update isDesktop state on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left - 3,
      y: event.clientY - rect.top - 3,
    });
  };

  return (
    <div className="contact-container" onMouseMove={handleMouseMove}>
      {isDesktop && (
        <>
          <div
            className="horizontal-line"
            style={{ top: `${mousePosition.y}px` }}
          ></div>
          <div
            className="vertical-line"
            style={{ left: `${mousePosition.x}px` }}
          ></div>
        </>
      )}

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/company/untitled-boston/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <p>LINKEDIN</p>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/untitled.boston/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <p>INSTAGRAM</p>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
        </a>
        <a
          href="https://www.youtube.com/@untitledboston"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <p>YOUTUBE</p>
          <FontAwesomeIcon icon={faYoutube} size="2x" className="icon" />
        </a>
        <a href="mailto:contact@untitled.boston" className="contact-button">
          <p>EMAIL</p>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
