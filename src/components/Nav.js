import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav id="menu">
        <ul className="nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/game">Jeux</Link>
          </li>
          <li>
            <Link to="/aliments">Aliments</Link>
          </li>
          <li>
            <Link to="/mieux">Consommer mieux</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
