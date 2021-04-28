import { Link } from "react-router-dom";
import React from "react";

import "./Card.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="titreCard">{this.props.value}</p>
        <p>
          <span>Score environnemental :</span> {this.props.result}
        </p>
        {this.props.result < 1 ? (
          <p className="pea">🟢</p>
        ) : this.props.result < 4 ? (
          <p className="pea">🟡</p>
        ) : (
          <p className="pea">🔴</p>
        )}
        <Link to={`/${this.props.value}`} className="bouton">
          Voir les détails
        </Link>
      </div>
    );
  }
}
export default Card;
