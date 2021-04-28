import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

class GameOver extends React.Component {
  render() {
    return (
      <>
        <div className="gameover">
          <section className="encart">
            <h1>Game Over</h1>
            <h2 className="titreJeux gameOver">
              Tu as mis trop de temps !
              <br />
              La planète n'attend pas !
            </h2>
            <Link to="/game1" className="bouton">
              Rejoue
            </Link>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}
export default GameOver;
