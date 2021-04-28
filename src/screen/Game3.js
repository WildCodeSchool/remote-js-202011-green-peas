import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game3 extends React.Component {
  state = {
    activeLink: false,
  };
  changeClass = () => {
    this.setState({ activeLink: true });
  };
  render() {
    return (
      <div>
        <ProgresBar indicator={145} width={145} />
        <section className="encart menu">
          <Timer />
          <h2 className="titreJeux">
            <span>3</span>Choisis ton accompagnement
          </h2>
          <Select
            name="Accompagnement"
            handleScoreGlobal={this.props.handleScoreGlobal}
            addMenu={this.props.addMenu}
            changeClass={this.changeClass}
          />
          {this.state.activeLink ? (
            <Link to="/game4" className="bouton">
              Valider ton accompagnement
            </Link>
          ) : (
            <div className="bouton off">Valider ton accompagnement</div>
          )}
        </section>
      </div>
    );
  }
}

export default Game3;
