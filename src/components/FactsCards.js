import React from "react";

import "./Facts.css";

class FactCards extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="citation">
        <img className="fact-logo" src={props.icon} alt="ecology" />
        <p className="fact">{props.texte}</p>
      </div>
    );
  }
}

export default FactCards;
