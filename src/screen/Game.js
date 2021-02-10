import GameAccess from "../components/GameAccess";
import ProgresBar from "../components/ProgresBar";
import React from "react";

class Game extends React.Component {
  render() {
    return (
      <>
        <h1>Jeux : Etape 1</h1>
        <ProgresBar />
        <GameAccess />
      </>
    );
  }
}
export default Game;
