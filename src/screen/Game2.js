import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import Select from "../components/Select";
import Timer from "../components/Timer";

import "./Game.scss";

class Game2 extends React.Component {
  state = {
    activeLink: false,
  };
  changeClass = () => {
    this.setState({ activeLink: true });
  };
  render() {
    return (
      <div>
        <ProgresBar indicator={75} width={75} />
        <section className="encart menu">
          <Timer />
          <h2 className="titreJeux">
            <span>2</span>Choisis ton plat
          </h2>
          <Select
            name="Plat"
            handleScoreGlobal={this.props.handleScoreGlobal}
            addMenu={this.props.addMenu}
            changeClass={this.changeClass}
          />
          {this.state.activeLink ? (
            <Link to="/game3" className="bouton">
              Valider ton plat
            </Link>
          ) : (
            <div className="bouton off">Valider ton plat</div>
          )}
        </section>
      </div>
    );
  }
}

export default Game2;
