import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../assets/css/AnimatedComponent.css";

interface AnimatedComponentProps {
  children: React.ReactNode;
  animation:
    | "slide-left"
    | "slide-right"
    | "slide-top"
    | "slide-bottom"
    | "fade-in";
  id?: string; // Optional id to be passed from the Scroller
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animation,
  id,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="animated-container" id={id}>
      <div ref={ref} className={`trigger-element`}></div>
      <div
        className={`animated-component ${animation} ${inView ? "animate" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedComponent;
