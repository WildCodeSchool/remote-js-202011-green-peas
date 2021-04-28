import React from "react";

import "./bouton.css";

const Bouton = ({ screen, texte }) => {
  return (
    <a href={screen} className="bouton">
      {texte}
    </a>
  );
};

export default Bouton;
