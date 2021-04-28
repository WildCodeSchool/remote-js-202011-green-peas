import { Link } from "react-router-dom";
import React from "react";

import "./Identity.css";

import pois from "../data/images/gp-logo.svg";

class Identity extends React.Component {
  render() {
    return (
      <div className="identity">
        <Link to="/">
          <img src={pois} alt="logo green peas" className="logosite" />
        </Link>
      </div>
    );
  }
}

export default Identity;
