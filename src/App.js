import About from "./screen/About";
import Best from "./components/Best";
import Bilan from "./components/Bilan";
import BilanDetail from "./screen/BilanDetail";
import DetailsCard from "./components/DetailsCard";
import Food from "./components/Food";
import Game from "./screen/Game";
import Game1 from "./screen/Game1";
import Game2 from "./screen/Game2";
import Game3 from "./screen/Game3";
import Game4 from "./screen/Game4";
import Game5 from "./screen/Game5";
import GameOver from "./screen/GameOver";
import Header from "./components/Header";
import Home from "./screen/Home";
import Intro from "./screen/Intro";
import Nav from "./components/Nav";
import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {
    loading: true,
    scoreglobal: 0,
    menu: [],
    moyenne: 26.93,
  };
  addMenu = (item) => {
    this.setState({ menu: [...this.state.menu, item] });
  };
  resetMenu = () => this.setState({ menu: [] });
  resetScore = () => this.setState({ scoreglobal: 0 });
  handleScoreGlobal = (number) =>
    this.setState({ scoreglobal: number + this.state.scoreglobal });

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }
  render() {
    return this.state.loading ? (
      <div>
        <Intro />
      </div>
    ) : (
      <div className="App">
        <div className="homePage">
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/mieux" component={Best} />
            <Route path="/aliments" component={Food} />
            <Route
              path="/game1"
              render={(props) => (
                <Game1
                  {...props}
                  handleScoreGlobal={this.handleScoreGlobal}
                  addMenu={this.addMenu}
                  resetScore={this.resetScore}
                  resetMenu={this.resetMenu}
                />
              )}
            />
            <Route
              path="/bilan"
              render={(props) => (
                <Bilan
                  {...props}
                  score={this.state.scoreglobal}
                  menu={this.state.menu}
                  scoreMoyenne={this.state.moyenne}
                />
              )}
            />
            <Route
              path="/game2"
              render={(props) => (
                <Game2
                  {...props}
                  handleScoreGlobal={this.handleScoreGlobal}
                  addMenu={this.addMenu}
                />
              )}
            />
            <Route
              path="/game3"
              render={(props) => (
                <Game3
                  {...props}
                  handleScoreGlobal={this.handleScoreGlobal}
                  addMenu={this.addMenu}
                />
              )}
            />
            <Route
              path="/game4"
              render={(props) => (
                <Game4
                  {...props}
                  handleScoreGlobal={this.handleScoreGlobal}
                  addMenu={this.addMenu}
                />
              )}
            />
            <Route
              path="/game5"
              render={(props) => (
                <Game5
                  {...props}
                  handleScoreGlobal={this.handleScoreGlobal}
                  addMenu={this.addMenu}
                />
              )}
            />
            <Route path="/gameover" component={GameOver} />
            <Route
              path="/bilanDetail"
              render={(props) => (
                <BilanDetail
                  {...props}
                  score={this.state.scoreglobal}
                  menu={this.state.menu}
                  scoreMoyenne={this.state.moyenne}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/:value" component={DetailsCard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
