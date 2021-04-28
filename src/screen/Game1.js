import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import Select from "../components/Select";
import Timer from "../components/Timer";

import "./Game.scss";

class Game1 extends React.Component {
  state = {
    activeLink: false,
  };
  changeClass = () => {
    this.setState({ activeLink: true });
  };
  componentDidMount() {
    this.props.resetScore();
    this.props.resetMenu();
  }
  render() {
    return (
      <div>
        <ProgresBar indicator={5} width={5} />
        <section className="encart menu">
          <Timer />
          <h2 className="titreJeux">
            <span>1</span>Choisis ton entrée
          </h2>
          <Select
            name="Entrée"
            handleScoreGlobal={this.props.handleScoreGlobal}
            addMenu={this.props.addMenu}
            changeClass={this.changeClass}
          />
          {this.state.activeLink ? (
            <Link to="/game2" className="bouton">
              Valider ton entrée
            </Link>
          ) : (
            <div className="bouton off">Valider ton entrée</div>
          )}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Game1;
