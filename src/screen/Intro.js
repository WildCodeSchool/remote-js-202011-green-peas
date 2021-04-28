import FactsList from "../components/FactsList";
import React from "react";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="bgIntro">
      <div>
        <h1>Green Peas</h1>
        <FactsList />
      </div>
    </div>
  );
};

export default Intro;
