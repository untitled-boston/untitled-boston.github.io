import React, { useState } from "react";
import "../assets/css/Scroller.css";
import TickerContainer from "./TickerContainer";

interface ScrollerProps {
  children: React.ReactNode[];
  sectionNames: string[]; // Accept section names as a prop
}

const Scroller: React.FC<ScrollerProps> = ({ children, sectionNames }) => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 769);

  const toggleButtonContainer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="scroller">
      <TickerContainer text="Wonderland 9/7 | Stamina 9/12 | Select Markets 4/12 |&nbsp;" />
      <div
        className={`button-container ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <button className="toggle-button" onClick={toggleButtonContainer}>
          <img
            src="/assets/images/base.png"
            alt="Scroll to Top"
            className="scroll-to-top-img"
          />
        </button>

        {isExpanded && (
          <div className="section-buttons">
            {children.map((child, index) => (
              <button
                key={index}
                onClick={() => {
                  document
                    .getElementById(`section-${index}`)
                    ?.scrollIntoView({ behavior: "smooth" });

                  if (!(window.innerWidth >= 769)) {
                    setIsExpanded(false);
                  }
                }}
              >
                {sectionNames[index]} {/* Display section name */}
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
