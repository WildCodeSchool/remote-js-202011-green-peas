import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game4 extends React.Component {
  state = {
    activeLink: false,
  };
  changeClass = () => {
    this.setState({ activeLink: true });
  };
  render() {
    return (
      <div>
        <ProgresBar indicator={215} width={215} />
        <section className="encart menu">
          <Timer />
          <h2 className="titreJeux">
            <span>4</span> Choisis ton dessert
          </h2>
          <Select
            name="Dessert"
            handleScoreGlobal={this.props.handleScoreGlobal}
            addMenu={this.props.addMenu}
            changeClass={this.changeClass}
          />
          {this.state.activeLink ? (
            <Link to="/game5" className="bouton">
              Valider ton dessert
            </Link>
          ) : (
            <div className="bouton off">Valider ton dessert</div>
          )}
        </section>
      </div>
    );
  }
}

export default Game4;
