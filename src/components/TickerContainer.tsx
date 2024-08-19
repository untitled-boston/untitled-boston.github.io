import React from "react";
import "../assets/css/TickerContainer.css";
import Ticker from "react-ticker";

const TickerContainer: React.FC = () => {
  return (
    <div className="ticker-container">
      {window.innerWidth <= 768 ? (
        <div className="ticker-still">
          <p>-=--+==*=+| UNTITLED |+=*==+--=- </p>
        </div>
      ) : (
        <Ticker speed={10}>
          {() => (
            <div className="ticker-content">
              <p>
                UNTITLED | Wonderland 9/7 | Stamina 9/13 | @UNTITLED.BOSTON |
                Select Markets 9/14 | Select Markets 4/12 |
              </p>
            </div>
          )}
        </Ticker>
      )}
    </div>
  );
};

export default TickerContainer;
