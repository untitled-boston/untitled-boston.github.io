import React, { ReactNode } from "react";
import Scroller from "./components/Scroller";
import AnimatedComponent from "./components/AnimatedComponent";

// Array of sections with components and their corresponding animations

type Section = {
  name: string; // Add a name property for the section label
  component: ReactNode;
  animation:
    | "slide-left"
    | "slide-right"
    | "slide-top"
    | "slide-bottom"
    | "fade-in";
};

const sections: Section[] = [
  {
    name: "Overview",
    component: <h1>Section 1: Slide in from Left</h1>,
    animation: "slide-left",
  },
  {
    name: "Market",
    component: <h1>Section 2: Slide in from Right</h1>,
    animation: "slide-right",
  },
  {
    name: "Operations",
    component: <h1>Section 3: Slide in from Top</h1>,
    animation: "slide-top",
  },
  {
    name: "Team",
    component: <h1>Section 4: Slide in from Bottom</h1>,
    animation: "slide-bottom",
  },
  {
    name: "History",
    component: <h1>Section 4: Slide in from Bottom</h1>,
    animation: "slide-bottom",
  },
  {
    name: "Oppurtunity",
    component: <h1>Section 5: Fade In</h1>,
    animation: "fade-in",
  },
  {
    name: "Contact",
    component: <h1>Section 5: Fade In</h1>,
    animation: "fade-in",
  },
];

const sectionNames = sections.map((section) => section.name);

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="background" />
      <Scroller sectionNames={sectionNames}>
        {sections.map((section, index) => (
          <AnimatedComponent key={index} animation={section.animation}>
            {section.component}
          </AnimatedComponent>
        ))}
      </Scroller>
    </div>
  );
};

export default App;
