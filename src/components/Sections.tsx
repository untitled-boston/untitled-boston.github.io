import React, { useState } from "react";
import "../assets/css/Sections.css";

type Sections =
  | "none"
  | "top-left"
  | "middle-left"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";

const Sections: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Sections>("none");

  const handleTopLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

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

    setCurrentSection("top-left");

    setTimeout(() => {
      topLeft?.classList.add("expand");
      sectionsTop?.classList.add("expand");
      sectionsVertical?.classList.add("expand");
      sectionsBottom?.classList.add("shrink-vertical");
    }, 500);

    setTimeout(() => {
      backButtom?.classList.add("enabled");
    }, 1000);
  };

  const handleMiddleLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

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

    setCurrentSection("middle-left");

    setTimeout(() => {
      middleLeft?.classList.add("expand");
      sectionsTop?.classList.add("expand");
      sectionsVertical?.classList.add("expand");
      sectionsBottom?.classList.add("shrink-vertical");
    }, 500);

    setTimeout(() => {
      backButtom?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

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

    setCurrentSection("bottom-left");

    setTimeout(() => {
      bottomLeft?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);

    setTimeout(() => {
      backButtom?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomMiddle = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

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

    setCurrentSection("bottom-middle");

    setTimeout(() => {
      bottomMiddle?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);

    setTimeout(() => {
      backButtom?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomRight = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

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
    sectionsBottom?.classList.add("shrink-right");
    sectionsVertical?.classList.add("shrink-start");

    setCurrentSection("bottom-right");

    setTimeout(() => {
      bottomRight?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
    }, 500);

    setTimeout(() => {
      backButtom?.classList.add("enabled");
    }, 1000);
  };

  const handleReverseTopLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    topLeft?.classList.remove("expand");
    sectionsTop?.classList.remove("expand");
    sectionsVertical?.classList.remove("expand");
    sectionsBottom?.classList.remove("shrink-vertical");

    setCurrentSection("none");
    backButtom?.classList.remove("enabled");

    setTimeout(() => {
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical", "shrink-horizontal");
      bottomLeft?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-vertical");
      bottomRight?.classList.remove("shrink-vertical");
      sectionsVertical?.classList.remove("shrink-start");
    }, 500);
  };

  const handleReverseMiddleLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    middleLeft?.classList.remove("expand");
    sectionsTop?.classList.remove("expand");
    sectionsVertical?.classList.remove("expand");
    sectionsBottom?.classList.remove("shrink-vertical");

    setCurrentSection("none");
    backButtom?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical", "shrink-horizontal");
      bottomLeft?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-vertical");
      bottomRight?.classList.remove("shrink-vertical");
      sectionsVertical?.classList.remove("shrink-end");
    }, 500);
  };

  const handleReverseBottomLeft = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    bottomLeft?.classList.remove("expand");
    sectionsTop?.classList.remove("shrink-vertical");
    sectionsVertical?.classList.remove("shrink-vertical");
    sectionsBottom?.classList.remove("expand");

    setCurrentSection("none");
    backButtom?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-horizontal");
      bottomRight?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-start");
      sectionsVertical?.classList.remove("shrink-start");
    }, 500);
  };

  const handleReverseBottomMiddle = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    bottomMiddle?.classList.remove("expand");
    sectionsTop?.classList.remove("shrink-vertical");
    sectionsVertical?.classList.remove("shrink-vertical");
    sectionsBottom?.classList.remove("expand");

    setCurrentSection("none");
    backButtom?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomLeft?.classList.remove("shrink-horizontal");
      bottomRight?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-center");
      sectionsVertical?.classList.remove("shrink-start");
    }, 500);
  };

  const handleReverseBottomRight = () => {
    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButtom = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    bottomRight?.classList.remove("expand");
    sectionsTop?.classList.remove("shrink-vertical");
    sectionsVertical?.classList.remove("shrink-vertical");
    sectionsBottom?.classList.remove("expand");

    setCurrentSection("none");
    backButtom?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomLeft?.classList.remove("shrink-horizontal");
      bottomMiddle?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-right");
      sectionsVertical?.classList.remove("shrink-start");
    }, 500);
  };

  const handleBack = () => {
    switch (currentSection) {
      case "top-left":
        handleReverseTopLeft();
        break;
      case "middle-left":
        handleReverseMiddleLeft();
        break;
      case "bottom-left":
        handleReverseBottomLeft();
        break;
      case "bottom-middle":
        handleReverseBottomMiddle();
        break;
      case "bottom-right":
        handleReverseBottomRight();
        break;
    }
  };

  return (
    <div className="sections-container">
      <div
        className="back-button-container"
        id="back-button-container"
        onClick={handleBack}
      >
        <button className="back-button">
          <img src="/assets/images/base.png" alt="" className="back-img" />
        </button>
      </div>
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
