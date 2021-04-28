import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

import "../screen/Home.scss";

import earth from "../data/images/earth-2.svg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="encart">
          <h1 ref={this._element}>Sauve la planète</h1>
          <figure className="figure">
            <img src={earth} alt="earth" />
            <figcaption></figcaption>
          </figure>
          <p>Découvre l'empreinte écologique de ton alimentation !</p>

          <Link to="/game" className="bouton">
            Sauve la planète
          </Link>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
