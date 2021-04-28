import Footer from "../components/Footer";
import React from "react";
// Import images
import lamp from "../data/images/lamp.png";
import suvcar from "../data/images/suvcar.png";
// Import css
import "./BilanDetail.scss";
import "./Bilan.scss";

class BilanDetail extends React.Component {
  state = {
    maxWidth: 0,
  };

  _element = React.createRef();

  componentDidMount() {
    const eltWidth = this._element.current.getBoundingClientRect().width;
    console.log(eltWidth);
    this.setState({
      maxWidth: eltWidth,
    });
  }

  render() {
    const ScoreMenu = this.props.score.toFixed(2);
    const ScoreMoyenne = this.props.scoreMoyenne;
    const maxWidthBar = this.state.maxWidth;
    return (
      <div className="">
        <section className="encart">
          <h1>Bilan de ton menu</h1>
          {/* Score total affiché sur la barre de score */}

          <p
            className="ScoreDetail"
            style={{
              marginLeft: this.props.score.toFixed(2) * (maxWidthBar / 80),
            }}
          >
            {((this.props.score * 10) / 80).toFixed(2)}
          </p>
          {/* barre de score */}
          <div
            className="scoreVulgEchelle"
            id="Echelle"
            ref={this._element}
          ></div>
          {/* container pour mettre en page valeurs minimales et maximales sur barre de score */}
          <div className="EchelleValeurs">
            <p className="valeursEch">0</p>
            <p className="valeursEch">10</p>
          </div>
          {/* texte explication données min et max */}
          <p className="explications">
            * Echelle d'impact selon les choix effectués pour le menu
          </p>

          <p>
            {ScoreMenu > ScoreMoyenne
              ? "Désolé avec un score pareil on ne va pas aller loin"
              : "Bravo grâce à toi il neige encore un peu en hiver"}
          </p>

          <h3>
            L'aliment{" "}
            {
              this.props.menu.sort(function (a, b) {
                return b.carbone - a.carbone;
              })[0].name
            }
            <span className="koCo2">({this.props.menu[0].carbone} kg CO2)</span>{" "}
            est le plus néfaste pour l'environnement.
          </h3>
        </section>

        <section className="encartBilan">
          <h2>Tes choix</h2>
          <ul>
            {this.props.menu.map((food) => (
              <li key={food.name}>
                {food.name + " " + food.carbone + " kg CO2"}
              </li>
            ))}
          </ul>
          <h3>
            Tout ça a l'air très appétissant mais tes{" "}
            {this.props.score.toFixed(2)}kg de Co2 générés sont équivalents à :
          </h3>

          <div className="textVulg">
            <section className="info">
              <img className="imgiconLamp" image src={lamp} alt="lamp.png" />
              <p>
                <span className="nbjours">
                  {this.props.score.toFixed(0) * 2}
                </span>{" "}
                jours d'éclairage d'1 ampoule
              </p>
            </section>
            <h3>OU</h3>
            <section className="info">
              <div className="animSuv">
                <img className="imgiconSuv" src={suvcar} alt="suv-car" />
                <div className="contRoad">
                  <div className="road">
                    ------<span className="borne">|</span>----------
                    <span className="chicken">🐓</span>-------------------
                    <span className="borne">|</span>--------------
                    <span className="borne">|</span>------------
                    <span className="chicken">🐓</span>--------------
                    <span className="borne">|</span>--------------------
                    <span className="chicken">🐓</span>-------------------
                    <span className="borne">|</span>---------
                    <span className="chicken">🐓</span>------------
                    <span className="borne">|</span>---------------------
                    <span className="borne">|</span>------------
                    <span className="chicken">🐓</span>
                    ----------------------------
                    <span className="chicken">🐓</span>
                    ------------------------------------
                    <span className="chicken">🐓</span>
                    -------------------------------------
                    <span className="chicken">🐓</span>----------------------
                    <span className="chicken">🐓</span>---------------------
                    <span className="borne">|</span>--
                  </div>
                  <div className="road2">
                    _______<span className="chicken">🌼</span>_______________
                    <span className="chicken">🌼🌻</span>___________
                    <span className="chicken">🌼</span>_______
                    <span className="chicken">🌻</span>_____________
                    <span className="chicken">🌻</span>_______________
                    <span className="chicken">🌼🌻</span>_______
                    <span className="chicken">🌻</span>_____________
                    <span className="chicken">🌻</span>__
                  </div>
                </div>
              </div>
              <p>
                <span className="nbjours">
                  {(this.props.score * 9).toFixed(0)}
                </span>{" "}
                km en SUV{" "}
              </p>
            </section>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default BilanDetail;
