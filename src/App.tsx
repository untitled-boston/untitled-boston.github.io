import React, { ReactNode } from "react";
import Scroller from "./components/Scroller";
import AnimatedComponent from "./components/AnimatedComponent";
import { Overview } from "./components/content/Overview";
import { Operations } from "./components/content/Operations";
import { Team } from "./components/content/Team";
import { History } from "./components/content/History";
import { Market } from "./components/content/Market";
import { Oppurtunity } from "./components/content/Oppurtunity";
import { Contact } from "./components/content/Contact";
import StarAnimation from "./components/StarAnimation";

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
    component: <Overview />,
    animation: "slide-top",
  },
  {
    name: "Market",
    component: <Market />,
    animation: "slide-left",
  },
  {
    name: "Operations",
    component: <Operations />,
    animation: "fade-in",
  },
  {
    name: "Team",
    component: <Team />,
    animation: "slide-right",
  },
  {
    name: "History",
    component: <History />,
    animation: "slide-bottom",
  },
  {
    name: "Oppurtunity",
    component: <Oppurtunity />,
    animation: "fade-in",
  },
  {
    name: "Contact",
    component: <Contact />,
    animation: "slide-bottom",
  },
];

const sectionNames = sections.map((section) => section.name);

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="background" />
      <StarAnimation />
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
