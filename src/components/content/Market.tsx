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
            <strong>18 and 34</strong>. These young adults represent a{" "}
            <strong>lucrative</strong>, <strong>untapped</strong> market. Our
            recent social media survey revealed:
          </p>
        </div>
        <div className="market-cards">
          <div className="market-point">
            <p>
              <strong>Event Attendance</strong>: <strong>79%</strong> attend
              art, fashion, or music events <strong>frequently</strong>.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>Openness to New Experiences</strong>: <strong>73%</strong>{" "}
              seek <strong>new</strong> experiences & venues.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>Social Media Engagement</strong>: <strong>72%</strong> are
              highly likely to <strong>share</strong> their event experiences
              online.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>Brand Loyalty</strong>: <strong>71%</strong> demonstrate
              strong <strong>loyalty</strong>, consistently returning to the
              same organizers.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong>Financial Status</strong>: Over <strong>81%</strong> have
              disposable income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
