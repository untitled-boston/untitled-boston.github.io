import React from "react";
import "../assets/css/TickerContainer.css";
import { HorizontalTicker } from "react-infinite-ticker";
import Ticker from "react-ticker";

interface TickerProps {
  text: string; // The text to be displayed in the ticker
}

const TickerContainer: React.FC<TickerProps> = ({ text }) => {
  return (
    <div className="ticker-container">
      {window.innerWidth <= 768 ? (
        <HorizontalTicker duration={10000}>
          <div className="ticker-content">
            <p>{text}</p>
          </div>
        </HorizontalTicker>
      ) : (
        <Ticker speed={10}>
          {() => (
            <div className="ticker-content">
              <p>{text}</p>
            </div>
          )}
        </Ticker>
      )}
    </div>
  );
};

export default TickerContainer;
