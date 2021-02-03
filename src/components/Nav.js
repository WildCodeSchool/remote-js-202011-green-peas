import React from "react";
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav id="menu">
        <ul>
          <li>
            <a href="index.html">Accueil</a>
          </li>
          <li>
            <a href="index.html">Jeux</a>
          </li>
          <li>
            <a href="index.html">Aliments</a>
          </li>
          <li>
            <a href="index.html">Consommer mieux</a>
          </li>
          <li>
            <a href="index.html">A propos</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
