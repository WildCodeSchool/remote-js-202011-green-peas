import React from "react";
import "./BounceIntro.css";
import Bounce from "react-reveal/Bounce";
import imgBr from "../data/images/assiette-br.png";
import imgBl from "../data/images/assiette-bl.png";
import imgTr from "../data/images/assiette-tr.png";
import imgTl from "../data/images/assiette-tl.png";

class BounceIntro extends React.Component {
  animationIntro = () => {
    document.getElementById("container").className = "enter";
    document.getElementById("button-welcome").style.display = "none";
    document.getElementById("title-welcome").style.display = "none";
    setTimeout(this.end, 1000);
  };
  end = () => {
    document.getElementById("container").style.display = "none";
    document.querySelector(".homePage").style.opacity = "1";
  };

  render() {
    return (
      <div className="intro">
        <Bounce top>
          <h2 id="title-welcome">Green Peas</h2>
        </Bounce>
        <div id="container">
          <Bounce top left>
            <img alt="assiette-1" src={imgTl} className="pic-1" />
          </Bounce>
          <Bounce top right>
            <img alt="assiette-2" src={imgTr} className="pic-2" />
          </Bounce>
          <Bounce bottom left>
            <img alt="assiette-3" src={imgBl} className="pic-3" />
          </Bounce>
          <Bounce bottom right>
            <img alt="assiette-4" src={imgBr} className="pic-4" />
          </Bounce>
        </div>
        <Bounce left>
          <button id="button-welcome" onClick={this.animationIntro}>
            Welcome
          </button>
        </Bounce>
      </div>
    );
  }
}

export default BounceIntro;
