import React, { ReactNode, useRef } from "react";
import { Overview } from "./components/content/Overview";
import { Operations } from "./components/content/Operations";
import { Team } from "./components/content/Team";
import { History } from "./components/content/History";
import { Market } from "./components/content/Market";
import { Oppurtunity } from "./components/content/Oppurtunity";
import { Contact } from "./components/content/Contact";
import StarAnimation from "./components/StarAnimation";
import TickerContainer from "./components/TickerContainer";
import Sections from "./components/Sections";

const App: React.FC = () => {
  // Create a ref to be passed to the Scroller and StarAnimation components
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app-container">
      <div className="background" />
      <StarAnimation />
      <div className="content-container">
        <TickerContainer text="UNTITLED | Wonderland 9/7 | Stamina 9/13 | @UNTITLED.BOSTON | Select Markets 9/14 | Select Markets 4/12 |&nbsp;" />
        <Sections />
      </div>
    </div>
  );
};

export default App;
