import React, { useState, useEffect } from "react";
import "../assets/css/StarAnimation.css";

const starChars: string[] = [
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

interface Position {
  top: string;
  left: string;
}

interface Star {
  charIndex: number;
  position: Position;
  stayIntervals: number;
  loopStart: number;
  loopEnd: number;
}

const estimateProcessingPower = (): number => {
  const start = performance.now();
  for (let i = 0; i < 1e7; i++) {} // Simulate processing
  const end = performance.now();

  const power = Math.floor(50 / (end - start)); // Inverse of time taken, scaled

  return power;
};

const StarAnimation: React.FC = () => {
  const [numStars, setNumStars] = useState<number>(0);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const power = estimateProcessingPower();
    const adjustedStars = Math.max(
      10,
      Math.min(Math.floor((power / 50) * 100), 50)
    );

    console.log("Calculated number of stars: " + adjustedStars);
    setNumStars(adjustedStars);
  }, []);

  useEffect(() => {
    if (numStars > 0) {
      setStars(
        Array(numStars)
          .fill(null)
          .map<Star>(() => ({
            charIndex: 0,
            position: { top: "0px", left: "0px" },
            stayIntervals: Math.floor(Math.random() * 11), // Random number of intervals between 0-10
            loopStart: Math.floor(Math.random() * starChars.length), // Random start index for looping
            loopEnd: Math.floor(Math.random() * starChars.length), // Random end index for looping
          }))
      );
    }
  }, [numStars]);

  useEffect(() => {
    const updateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          if (star.stayIntervals > 0) {
            // If the star should stay in place, decrease the stayIntervals and cycle through a subset of the starChars
            const loopRange =
              star.loopEnd > star.loopStart
                ? star.loopEnd - star.loopStart
                : starChars.length - star.loopStart + star.loopEnd;

            const newCharIndex =
              ((star.charIndex + 1) % loopRange) + star.loopStart;

            return {
              ...star,
              stayIntervals: star.stayIntervals - 1,
              charIndex: newCharIndex,
            };
          } else {
            // Otherwise, move the star to a new position
            const newTop = Math.floor(Math.random() * 95) + "%";
            const newLeft = Math.floor(Math.random() * 100) + "%";

            const newCharIndex =
              star.charIndex < starChars.length - 1 ? star.charIndex + 1 : 0;

            return {
              ...star,
              charIndex: newCharIndex,
              position: { top: newTop, left: newLeft },
              stayIntervals: Math.floor(Math.random() * 11), // Reset stay intervals
              loopStart: Math.floor(Math.random() * starChars.length), // Reset loop start
              loopEnd: Math.floor(Math.random() * starChars.length), // Reset loop end
            };
          }
        })
      );
    };

    if (numStars > 0) {
      const intervalId = setInterval(updateStars, 300); // Adjust the interval as needed
      return () => clearInterval(intervalId);
    }
  }, [numStars, stars]);

  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.position.top,
            left: star.position.left,
          }}
        >
          {starChars[star.charIndex]}
        </div>
      ))}
    </div>
  );
};

export default StarAnimation;
