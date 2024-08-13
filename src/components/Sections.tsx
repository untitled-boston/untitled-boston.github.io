import React, { ReactNode, useEffect, useState } from "react";
import "../assets/css/Sections.css";
import CharacterSelect from "./CharacterSelect";
import { DelayedRender } from "./DelayedRender";
import { ThumbnailModel } from "./ThumbnailModel";
import Market from "./content/Market";
import { Contact } from "./content/Contact";
import Operations from "./content/Operations";
import { Overview } from "./content/Overview";

type Sections =
  | "none"
  | "top-left"
  | "middle-left"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";

const Sections: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Sections>("none");
  const sectionIds = [
    "section-top-left",
    "section-middle-left",
    "section-bottom-left",
    "section-bottom-middle",
    "section-bottom-right",
    "section-preview",
  ];
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const popInSpeed = 400;

  // Utility function to shuffle an array
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    // Initialize the queue with shuffled section IDs
    const shuffledIds = shuffleArray([...sectionIds]);
    shuffledIds.forEach((id, i) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, id]);
      }, i * popInSpeed);
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 2400);
  }, []);

  const handleTopLeft = () => {
    if (currentSection != "none" || isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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
      setIsAnimating(false);
    }, 500);

    setTimeout(() => {
      backButton?.classList.add("enabled");
    }, 1000);
  };

  const handleMiddleLeft = () => {
    if (currentSection != "none" || isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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
      setIsAnimating(false);
    }, 500);

    setTimeout(() => {
      backButton?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomLeft = () => {
    if (currentSection != "none" || isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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
      setIsAnimating(false);
    }, 500);

    setTimeout(() => {
      backButton?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomMiddle = () => {
    if (currentSection != "none" || isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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
      setIsAnimating(false);
    }, 500);

    setTimeout(() => {
      backButton?.classList.add("enabled");
    }, 1000);
  };

  const handleBottomRight = () => {
    if (currentSection != "none" || isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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

    setCurrentSection("bottom-right");

    setTimeout(() => {
      bottomRight?.classList.add("expand");
      sectionsTop?.classList.add("shrink-vertical");
      sectionsVertical?.classList.add("shrink-vertical");
      sectionsBottom?.classList.add("expand");
      setIsAnimating(false);
    }, 500);

    setTimeout(() => {
      backButton?.classList.add("enabled");
    }, 1000);
  };

  const handleReverseTopLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    topLeft?.classList.remove("expand");
    sectionsTop?.classList.remove("expand");
    sectionsBottom?.classList.remove("shrink-vertical");

    setCurrentSection("none");
    backButton?.classList.remove("enabled");

    setTimeout(() => {
      sectionsVertical?.classList.remove("expand");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical", "shrink-horizontal");
      bottomLeft?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-vertical");
      bottomRight?.classList.remove("shrink-vertical");
      sectionsVertical?.classList.remove("shrink-start");
      setIsAnimating(false);
    }, 500);
  };

  const handleReverseMiddleLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

    const topLeft = document.getElementById("section-top-left");
    const middleLeft = document.getElementById("section-middle-left");
    const preview = document.getElementById("section-preview");
    const bottomLeft = document.getElementById("section-bottom-left");
    const bottomMiddle = document.getElementById("section-bottom-middle");
    const bottomRight = document.getElementById("section-bottom-right");

    // Remove the appropriate classes in reverse order

    middleLeft?.classList.remove("expand");
    sectionsTop?.classList.remove("expand");
    sectionsBottom?.classList.remove("shrink-vertical");

    setCurrentSection("none");
    backButton?.classList.remove("enabled");

    setTimeout(() => {
      sectionsVertical?.classList.remove("expand");
      topLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical", "shrink-horizontal");
      bottomLeft?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-vertical");
      bottomRight?.classList.remove("shrink-vertical");
      sectionsVertical?.classList.remove("shrink-end");
      setIsAnimating(false);
    }, 500);
  };

  const handleReverseBottomLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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

    setCurrentSection("none");
    backButton?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomMiddle?.classList.remove("shrink-horizontal");
      bottomRight?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-start");
      sectionsBottom?.classList.remove("expand");
      sectionsVertical?.classList.remove("shrink-start");
      setIsAnimating(false);
    }, 500);
  };

  const handleReverseBottomMiddle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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

    setCurrentSection("none");
    backButton?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomLeft?.classList.remove("shrink-horizontal");
      bottomRight?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-center");
      sectionsBottom?.classList.remove("expand");
      sectionsVertical?.classList.remove("shrink-start");
      setIsAnimating(false);
    }, 500);
  };

  const handleReverseBottomRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Select the other divs by ID
    const sectionsTop = document.getElementById("sections-top");
    const sectionsVertical = document.getElementById("sections-vertical");
    const sectionsBottom = document.getElementById("sections-bottom");

    const backButton = document.getElementById("back-button-container");

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

    setCurrentSection("none");
    backButton?.classList.remove("enabled");

    setTimeout(() => {
      topLeft?.classList.remove("shrink-vertical");
      middleLeft?.classList.remove("shrink-vertical");
      preview?.classList.remove("shrink-vertical");
      bottomLeft?.classList.remove("shrink-horizontal");
      bottomMiddle?.classList.remove("shrink-horizontal");
      sectionsBottom?.classList.remove("shrink-end");
      sectionsBottom?.classList.remove("expand");
      sectionsVertical?.classList.remove("shrink-start");
      setIsAnimating(false);
    }, 500);
  };

  const handleBack = () => {
    if (isAnimating) return;
    setIsAnimating(true);

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

  const renderContent = (id: string, modelURL: string, content: ReactNode) => {
    switch (currentSection) {
      case "none":
        return (
          <div className="section-thumbnail">
            <ThumbnailModel assetUrl={modelURL} enableHover={true} />
          </div>
        );
      case id:
        return <DelayedRender delay={1250}>{content}</DelayedRender>;
      default:
        return null;
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
            className={`section expandable ${
              visibleSections.includes("section-top-left") ? "visible" : ""
            }`}
            id="section-top-left"
            onClick={handleTopLeft}
          >
            <div className="section-background"></div>
            <p className="section-title">WHAT WE DO</p>

            {
              renderContent(
                "top-left",
                "/assets/models/tank.glb",
                <Overview />
              ) as ReactNode
            }
          </div>
          <div
            className={`section expandable ${
              visibleSections.includes("section-middle-left") ? "visible" : ""
            }`}
            id="section-middle-left"
            onClick={handleMiddleLeft}
          >
            <div className="section-background"></div>
            <p className="section-title">WHO WE ARE</p>

            {
              renderContent(
                "middle-left",
                "/assets/models/hydra.glb",
                <CharacterSelect />
              ) as ReactNode
            }
          </div>
        </div>
        <div
          className={`section preview ${
            visibleSections.includes("section-preview") ? "visible" : ""
          }`}
          id="section-preview"
        >
          <div className="preview-container">
            <video controls width="100%" height="100%" autoPlay loop muted>
              <source src="/assets/video/vibe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="sections-bottom" id="sections-bottom">
        <div
          className={`section expandable ${
            visibleSections.includes("section-bottom-left") ? "visible" : ""
          }`}
          id="section-bottom-left"
          onClick={handleBottomLeft}
        >
          <div className="section-background"></div>
          <p className="section-title">HOW WE OPERATE</p>

          {
            renderContent(
              "bottom-left",
              "/assets/models/falcon.glb",
              <Operations />
            ) as ReactNode
          }
        </div>
        <div
          className={`section expandable ${
            visibleSections.includes("section-bottom-middle") ? "visible" : ""
          }`}
          id="section-bottom-middle"
          onClick={handleBottomMiddle}
        >
          <div className="section-background"></div>
          <p className="section-title">OUR MARKET</p>

          {
            renderContent(
              "bottom-middle",
              "/assets/models/batwing.glb",
              <Market />
            ) as ReactNode
          }
        </div>
        <div
          className={`section expandable ${
            visibleSections.includes("section-bottom-right") ? "visible" : ""
          }`}
          id="section-bottom-right"
          onClick={handleBottomRight}
        >
          <div className="section-background"></div>
          <p className="section-title">TALK TO US</p>

          {
            renderContent(
              "bottom-right",
              "/assets/models/warthog.glb",
              <Contact />
            ) as ReactNode
          }
        </div>
      </div>
    </div>
  );
};

export default Sections;
