import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";

import "./GameAccess.scss";

const GameAccess = () => {
  return (
    <>
      <section id="encartJeux">
        <h1>Règles du jeux</h1>
        <p>
          Tu as une faim de 🐺 ? Alors commence le jeu pour créer ton menu
          Entrée + Plat + Dessert + Boisson 😋
        </p>

        <h3 className="padBot-025rem">💚 Astuces</h3>

        <ul>
          <li>
            #1 Prends tes décisions rapidement car la 🌍 est déjà en danger
          </li>
          <li>
            ️#2 Pense que chacun de tes choix à un impact 🔥 sur la planète
          </li>
          <li>#3 N'oublie pas, les 🍅 ne poussent pas l'hiver ⛄</li>
        </ul>

        <Link className="bouton" to="/game1">
          Start{" "}
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default GameAccess;
