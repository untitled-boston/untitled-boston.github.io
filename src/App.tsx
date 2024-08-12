import React from "react";
import StarAnimation from "./components/StarAnimation";
import TickerContainer from "./components/TickerContainer";
import Sections from "./components/Sections";
import CustomCursor from "./components/CustomCursor";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CustomCursor />
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
