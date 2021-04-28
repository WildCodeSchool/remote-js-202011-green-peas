import React from "react";

import "./SolutionsCards.scss";

class SolutionsCards extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="solution">
        <h1>{props.titre}</h1>
        <h3>{props.categorie}</h3>
        <img src={props.photo} alt={props.titre} />
        <p>{props.description}</p>
        <a href={props.lien}>Clique ici pour en savoir plus</a>
      </div>
    );
  }
}

export default SolutionsCards;
