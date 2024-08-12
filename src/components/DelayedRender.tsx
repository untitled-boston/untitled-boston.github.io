import React, { ReactNode, useState, useEffect } from "react";
import "../assets/css/DelayedRender.css"; // Import the CSS file for the fade-in styles

export const DelayedRender: React.FC<{
  delay: number;
  children: ReactNode;
}> = ({ delay, children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRender(true);
      setFadeIn(true); // Start the fade-in effect
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`fade-in ${fadeIn ? "in" : ""}`}>
      {shouldRender ? children : null}
    </div>
  );
};
