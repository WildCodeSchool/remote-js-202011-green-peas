import Best from "./components/Best";
import Food from "./components/Food";
import Footer from './components/Footer';
import Game from "./screen/Game";
import Header from './components/Header';
import Home from './screen/Home'
import Nav from './components/Nav';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Intro from './screen/Intro';

import './App.css';

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({loading: false})
    }, 5000);
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
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
