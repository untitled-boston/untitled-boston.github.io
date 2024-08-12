import React, { useRef } from "react";
import "../../assets/css/Market.css";

export const Market = () => {
  const marketCardsRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = marketCardsRef.current;
    if (!target) return;

    target.style.cursor = "grabbing"; // Change cursor style when dragging
    target.style.userSelect = "none"; // Prevent text selection during drag

    let startX = e.pageX - target.offsetLeft;
    let scrollLeft = target.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX - target.offsetLeft;
      const walk = (x - startX) * 2; // Multiplied for faster scrolling
      target.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      target.style.cursor = "grab"; // Revert cursor style after dragging
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="market-container">
      <div className="market-title">
        <h1>Boston Market Insights</h1>
      </div>
      <div className="market-content">
        <div className="market-point population-point">
          <p>
            With over <strong>250,000</strong> people, more than{" "}
            <strong>1 in 3</strong> Bostonians are between the ages of{" "}
            <strong>18 and 34</strong>. These young adults represent a{" "}
            <strong>lucrative</strong>, <strong>untapped</strong> {""} market.
            Our recent social media survey revealed:
          </p>
        </div>
        <div
          className="market-cards"
          ref={marketCardsRef}
          onMouseDown={handleMouseDown}
          style={{ cursor: "grab" }} /* Initial cursor style */
        >
          <div className="market-point">
            <p>
              <strong className="market-point-title">Event Attendance</strong>:
              <br />
              <strong>79%</strong> attend art, fashion, or music events{" "}
              <strong>frequently</strong>.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">
                Openness to New Experiences
              </strong>
              :<br /> <strong>73%</strong> seek <strong>new</strong> experiences
              & venues.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">
                Social Media Engagement
              </strong>
              : <br />
              <strong>72%</strong> are highly likely to <strong>share</strong>{" "}
              their event experiences online.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">Brand Loyalty</strong>:
              <br />
              <strong>71%</strong> demonstrate strong <strong>loyalty</strong>,
              consistently returning to the same organizers.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">Financial Status</strong>:
              <br />
              Over <strong>81%</strong> have disposable income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
