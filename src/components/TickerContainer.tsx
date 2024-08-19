import React from "react";
import "../assets/css/TickerContainer.css";
import Ticker from "react-ticker";

interface TickerProps {
  text: string; // The text to be displayed in the ticker
}

const TickerContainer: React.FC<TickerProps> = ({ text }) => {
  const isMobile = window.innerWidth <= 768;

  // Adjust speed based on text length to prevent overlap
  const baseSpeed = isMobile ? 5 : 10;
  const speed = Math.max(baseSpeed, Math.min(50, text.length / 2)); // Ensure speed is reasonable

  return (
    <div className="ticker-container">
      <Ticker speed={speed}>
        {() => (
          <div className="ticker-content">
            <p>{text}</p>
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default TickerContainer;
