import React from "react";
import { Redirect } from "react-router-dom";

let intervalId = null;

class Timer extends React.Component {
  state = {
    counter: null,
  };
  timer = () => {
    this.setState({ counter: 20 });
    intervalId = setInterval(this.bip, 1000);
  };
  bip = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter === 0) {
      clearInterval(intervalId);
    }
  };
  componentDidMount() {
    this.timer();
  }
  render() {
    return (
      <div>
        <div id="bip" className="compteur">
          {this.state.counter === 0 ? "TERMINE !" : this.state.counter + " s."}
        </div>
        {this.state.counter === 0 ? <Redirect to="/gameover" /> : null}
      </div>
    );
  }
}

export default Timer;
