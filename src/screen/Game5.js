import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game5 extends React.Component {
  state = {
    activeLink: false,
  };
  changeClass = () => {
    this.setState({ activeLink: true });
  };
  render() {
    return (
      <div>
        <ProgresBar indicator={285} width={285} />
        <section className="encart menu">
          <Timer />
          <h2 className="titreJeux">
            <span>5</span> Choisis ta boisson
          </h2>
          <Select
            name="Boisson"
            handleScoreGlobal={this.props.handleScoreGlobal}
            addMenu={this.props.addMenu}
            changeClass={this.changeClass}
          />
          {this.state.activeLink ? (
            <Link to="/bilan" className="bouton">
              Valider ta boisson
            </Link>
          ) : (
            <div className="bouton off">Valider ta boisson</div>
          )}
        </section>
      </div>
    );
  }
}

export default Game5;
