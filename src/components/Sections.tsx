import React, { useState } from "react";
import "../assets/css/Sections.css";

const Sections: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleTopLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Add the appropriate classes

    middleLeft?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-horizontal");
    bottomLeft?.classList.add("shrink-vertical");
    bottomMiddle?.classList.add("shrink-vertical");
    bottomRight?.classList.add("shrink-vertical");
    sectionsVertical?.classList.add("shrink-start");

    setTimeout(() => {
      topLeft?.classList.add("expand");
      sectionsTop?.classList.add("expand");
      sectionsVertical?.classList.add("expand");
      sectionsBottom?.classList.add("shrink-vertical");
    }, 500);
  };

  const handleMiddleLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Add the appropriate classes
    topLeft?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-horizontal");
    bottomLeft?.classList.add("shrink-vertical");
    bottomMiddle?.classList.add("shrink-vertical");
    bottomRight?.classList.add("shrink-vertical");
    sectionsVertical?.classList.add("shrink-end");

    setTimeout(() => {
      middleLeft?.classList.add("expand");
      sectionsTop?.classList.add("expand");
      sectionsVertical?.classList.add("expand");
      sectionsBottom?.classList.add("shrink-vertical");
    }, 500);
  };

  const handleBottomLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Add the appropriate classes
    topLeft?.classList.add("shrink-vertical");
    middleLeft?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-vertical");
    bottomMiddle?.classList.add("shrink-horizontal");
    bottomRight?.classList.add("shrink-horizontal");
    sectionsBottom?.classList.add("shrink-start");
    sectionsVertical?.classList.add("shrink-start");

    setTimeout(() => {
      bottomLeft?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);
  };

  const handleBottomMiddle = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Add the appropriate classes
    topLeft?.classList.add("shrink-vertical");
    middleLeft?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-vertical");
    bottomLeft?.classList.add("shrink-horizontal");
    bottomRight?.classList.add("shrink-horizontal");
    sectionsBottom?.classList.add("shrink-center");
    sectionsVertical?.classList.add("shrink-start");

    setTimeout(() => {
      bottomMiddle?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);
  };

  const handleBottomRight = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Add the appropriate classes
    topLeft?.classList.add("shrink-vertical");
    middleLeft?.classList.add("shrink-vertical");
    preview?.classList.add("shrink-vertical");
    bottomLeft?.classList.add("shrink-horizontal");
    bottomMiddle?.classList.add("shrink-horizontal");
    sectionsBottom?.classList.add("shrink-end");
    sectionsVertical?.classList.add("shrink-start");

    setTimeout(() => {
      bottomRight?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);
  };

  return (
    <div className="sections-container">
      <div className="sections-top" id="sections-top">
        <div className="sections-vertical" id="sections-vertical">
          <div
            className="section expandable"
            id="section-top-left"
            onClick={handleTopLeft}
          ></div>
          <div
            className="section expandable"
            id="section-middle-left"
            onClick={handleMiddleLeft}
          ></div>
        </div>
        <div className="section preview" id="section-preview"></div>
      </div>
      <div className="sections-bottom" id="sections-bottom">
        <div
          className="section expandable"
          id="section-bottom-left"
          onClick={handleBottomLeft}
        ></div>
        <div
          className="section expandable"
          id="section-bottom-middle"
          onClick={handleBottomMiddle}
        ></div>
        <div
          className="section expandable"
          id="section-bottom-right"
          onClick={handleBottomRight}
        ></div>
      </div>
    </div>
  );
};

export default Sections;
