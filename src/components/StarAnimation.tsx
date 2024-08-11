import React, { useState, useEffect } from "react";
import "../assets/css/StarAnimation.css";

const StarAnimation = () => {
  const starChars = [
    "\u2722",
    "\u2723",
    "\u2724",
    "\u2725",
    "\u2726",
    "\u2727",
    "\u2729",
    "\u272B",
    "\u272C",
    "\u272D",
    "\u272E",
    "\u272F",
    "\u2730",
    "\u2731",
    "\u2732",
    "\u2605",
    "\u2606",
  ];
  const estimateProcessingPower = () => {
    const start = performance.now();
    for (let i = 0; i < 1e7; i++) {} // Simulate processing
    const end = performance.now();
    return Math.floor(50 / (end - start)); // Inverse of time taken, scaled
  };

  const numStars = Math.max(20, Math.min(estimateProcessingPower(), 50)); // Adjust to a reasonable range
  const [stars, setStars] = useState(
    Array(numStars).fill({
      active: false,
      charIndex: 0,
      position: { top: "0px", left: "0px" },
      stayIntervals: Math.floor(Math.random() * 11), // Random number of intervals between 0-10
    })
  );

  useEffect(() => {
    const updateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          if (star.stayIntervals > 0) {
            // If the star should stay in place, decrease the stayIntervals
            return {
              ...star,
              stayIntervals: star.stayIntervals - 1,
            };
          } else {
            // Otherwise, move the star to a new position
            const newTop = Math.floor(Math.random() * 90) + "%";
            const newLeft = Math.floor(Math.random() * 90) + "%";

            if (star.active) {
              const newCharIndex =
                star.charIndex < starChars.length - 1 ? star.charIndex + 1 : 0;
              return {
                ...star,
                charIndex: newCharIndex,
                position: { top: newTop, left: newLeft },
                stayIntervals: Math.floor(Math.random() * 11), // Reset stay intervals
              };
            } else if (Math.random() > 0.95) {
              return {
                active: true,
                charIndex: 0,
                position: { top: newTop, left: newLeft },
                stayIntervals: Math.floor(Math.random() * 11), // Reset stay intervals
              };
            }
            return {
              ...star,
              position: { top: newTop, left: newLeft },
              stayIntervals: Math.floor(Math.random() * 11), // Reset stay intervals
            };
          }
        })
      );
    };

    const intervalId = setInterval(updateStars, 300); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${star.active ? "active" : "inactive"}`}
          style={{
            top: star.position.top,
            left: star.position.left,
          }}
        >
          {star.active ? starChars[star.charIndex] : ""}
        </div>
      ))}
    </div>
  );
};

export default StarAnimation;
