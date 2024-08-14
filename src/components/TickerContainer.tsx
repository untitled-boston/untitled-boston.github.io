import React from "react";
import "../assets/css/TickerContainer.css";
import Ticker from "react-ticker";

interface TickerProps {
  text: string; // The text to be displayed in the ticker
}

const TickerContainer: React.FC<TickerProps> = ({ text }) => {
  const isMobile = window.innerWidth <= 768;
  const speed = isMobile ? 5 : 10; // Slower speed on mobile

  return (
    <div className="ticker-container">
      <Ticker speed={speed}>{() => <p>{text}</p>}</Ticker>
    </div>
  );
};

export default TickerContainer;
