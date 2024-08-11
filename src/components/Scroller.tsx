import React, { useState, useRef, useEffect } from "react";
import "../assets/css/Scroller.css";
import TickerContainer from "./TickerContainer";

interface ScrollerProps {
  children: React.ReactNode[];
  sectionNames: string[]; // Accept section names as a prop
}

const Scroller: React.FC<ScrollerProps> = ({ children, sectionNames }) => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 769);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const toggleButtonContainer = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    const scroller = scrollerRef.current;

    if (section && scroller) {
      // Get the top position of the section relative to the scroller-content div
      const sectionTop = section.offsetTop;

      // Calculate the position to scroll to so that the section is centered in the scroller-content div
      const offsetPosition = sectionTop - 50;

      // Smoothly scroll to the calculated position within the scroller-content div
      scroller.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }

    if (!(window.innerWidth >= 769)) {
      setIsExpanded(false);
    }
  };

  // Effect to reset scroll position to the top on component mount
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="scroller" ref={scrollerRef}>
      <TickerContainer text="UNTITLED | Wonderland 9/7 | Stamina 9/13 | @UNTITLED.BOSTON | Select Markets 9/14 | Select Markets 4/12 |&nbsp;" />
      <div
        className={`button-container ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <button className="toggle-button" onClick={toggleButtonContainer}>
          <img src="/assets/images/base.png" alt="" className="toggle-img" />
        </button>

        {isExpanded && (
          <div className="section-buttons">
            {children.map((child, index) => (
              <button key={index} onClick={() => handleScrollToSection(index)}>
                <p> {sectionNames[index]}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="scroller-content">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            id: `section-${index}`,
          })
        )}
      </div>
    </div>
  );
};

export default Scroller;
