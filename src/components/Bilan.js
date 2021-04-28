import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

import "../screen/Bilan.scss";

import earth from "../data/images/earth-2.svg";
import earthfoutu from "../data/images/dead_earth.svg";

class Bilan extends React.Component {
  render() {
    const ScoreMenu = this.props.score.toFixed(2);
    const ScoreMoyenne = this.props.scoreMoyenne;
    return (
      <div>
        <section className="encartBilan">
          <h1>Bilan</h1>
          <p>Voici ton score !</p>
          <p className={ScoreMenu > ScoreMoyenne ? "Score" : "Score Good"}>
            {ScoreMenu} kg CO2
          </p>
          <figure className="figure">
            <img
              src={ScoreMenu > ScoreMoyenne ? earthfoutu : earth}
              alt="earth"
            />
          </figure>

          <p>
            {ScoreMenu > ScoreMoyenne
              ? "Désolé avec un score pareil on ne va pas aller loin"
              : "Bravo ton score est exemplaire"}
          </p>

          <Link to="/bilanDetail" className="bouton mb_1rem">
            Voir le détail de votre bilan
          </Link>
          <Link to="/game" className="bouton">
            Rejouer
          </Link>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Bilan;
