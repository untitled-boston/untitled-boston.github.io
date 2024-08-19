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
        <TickerContainer />
        <Sections />
      </div>
    </div>
  );
};

export default App;
