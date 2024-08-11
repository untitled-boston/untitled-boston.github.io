import React, { useState } from "react";
import "../../assets/css/Operations.css";

interface HoverableProps {
  onHoverChange: (hovering: boolean) => void;
  children: React.ReactNode;
}

const Hoverable: React.FC<HoverableProps> = ({ onHoverChange, children }) => {
  return (
    <div
      onMouseEnter={() => onHoverChange(true && window.innerWidth >= 769)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {children}
    </div>
  );
};

export const Operations = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="operations-container">
      {!(window.innerWidth >= 769) && (
        <div className="operations-mobile-background"></div>
      )}

      <div
        className="operations-title-container"
        style={{
          borderColor: isHovered ? "#32cd32" : "#fff",
        }}
      >
        <div className="operations-title">
          <h1>How We Operate</h1>
        </div>
        <div
          className="operations-title-banner"
          style={{
            backgroundColor: isHovered ? "#32cd32" : "#fff",
          }}
        ></div>
      </div>
      <div
        className="operations-content"
        style={{
          borderColor: isHovered ? "#32cd32" : "#fff",
        }}
      >
        <Hoverable onHoverChange={setIsHovered}>
          <div className="operations-point overview-point">
            <p>
              Untitled operates with a <strong>dual-mode model</strong> designed
              for scalability.
            </p>
          </div>
        </Hoverable>
        <Hoverable onHoverChange={setIsHovered}>
          <div className="operations-split">
            <div className="operations-half" id="we-come-to-you">
              <p>
                <strong className="operations-point-title">
                  We Come to You
                </strong>
                :<br />
                Partnering with business & venues to{" "}
                <strong>increase foot traffic</strong> and{" "}
                <strong>brand visibility</strong>.
              </p>
            </div>
            <div className="operations-half" id="you-come-to-us">
              <p>
                <strong className="operations-point-title">
                  You Come to Us
                </strong>
                :<br />
                Providing a <strong>creative space</strong> to strengthen the{" "}
                <strong> arts</strong>, <strong> fashion</strong>, and{" "}
                <strong> music</strong> community of Boston.
              </p>
            </div>
          </div>
        </Hoverable>
        <Hoverable onHoverChange={setIsHovered}>
          <div className="operations-cards">
            <div className="operations-point">
              <p>
                <strong className="operations-point-title">
                  Strategic Partnerships
                </strong>
                :<br />
                Collaborating with local art, fashion, and music startups to{" "}
                <strong>expand reach</strong> and drive <strong>success</strong>
                .
              </p>
            </div>
            <div
              className="operations-point-banner"
              style={{
                backgroundColor: isHovered ? "#32cd32" : "#fff",
              }}
            ></div>
            <div className="operations-point">
              <p>
                <strong className="operations-point-title">Vision</strong>:
                <br />
                Aspiring to create a <strong>
                  cultural movement
                </strong> that <strong>surpasses</strong> establishments like
                Boiler Room, Insomniac, or Mischief.
              </p>
            </div>
          </div>
        </Hoverable>
      </div>
    </div>
  );
};

export default Operations;
