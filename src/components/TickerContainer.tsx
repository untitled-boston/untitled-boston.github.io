import React from "react";
import "../assets/css/TickerContainer.css";
import Ticker from "react-ticker";

interface TickerProps {
  text: string; // The text to be displayed in the ticker
}

const TickerContainer: React.FC<TickerProps> = ({ text }) => {
  return (
    <div className="ticker-container">
      <Ticker>{() => <p>{text}</p>}</Ticker>
    </div>
  );
};

export default TickerContainer;
