import React from "react";

import "./ProgresBar.css";

import flame from "../data/images/flame.png";

class ProgresBar extends React.Component {
  state = {
    width_progresBar: 280,
  };

  render() {
    return (
      <div className="NavComponent">
        <div
          className="progresBar"
          style={{ width: this.state.width_progresBar }}
        >
          <img
            id="flame"
            src={flame}
            alt="flame indicator"
            style={{ left: this.props.indicator }}
          />
          <div
            className="progresBarIndicator1"
            style={{ width: this.props.width }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ProgresBar;
