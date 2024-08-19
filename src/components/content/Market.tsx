import React from "react";
import "../../assets/css/Market.css";

export const Market = () => {
  return (
    <div className="market-container">
      <div className="market-content">
        <div className="market-point">
          <p>
            With over <strong>250,000</strong> people, more than{" "}
            <strong>1 in 3</strong> Bostonians are between the ages of{" "}
            <strong>18 and 34</strong>.{" "}
            {window.innerWidth <= 768 ? null : (
              <>
                These young adults represent a<strong>lucrative</strong>,{" "}
                <strong>untapped</strong>
                market.
              </>
            )}
          </p>
        </div>
        <div className="market-cards">
          <div className="market-point">
            <p>
              <strong>86%</strong> attend art, fashion, or music events{" "}
              <strong>frequently</strong>.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>90%</strong> seek <strong>new</strong> experiences &
              venues.
            </p>
          </div>
        </div>
        <div className="market-cards">
          <div className="market-point">
            <p>
              <strong>71%</strong> are highly likely to <strong>share</strong>{" "}
              their event experiences online.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>82%</strong> demonstrate strong <strong>loyalty</strong>,
              consistently returning to the same organizers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
