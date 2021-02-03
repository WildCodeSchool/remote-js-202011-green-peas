import "./Header.css";
import React from "react";
import Identity from "./Identity";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  swipeMenu() {
    const mainMenu = document.querySelector("#menu");
    const burgerMenu = document.querySelector("#menu-burger");
    document.addEventListener("click", function (event) {
      if (mainMenu.className === "") {
        return;
      } else if (event.target.closest("#menu") || event.target.closest("#menu-burger")) return;
      mainMenu.classList.add("invisible");
      burgerMenu.removeAttribute("class", "clicked");
    });
    let clickedEvent = "click";
    burgerMenu.addEventListener(
      clickedEvent,
      function (event) {
        if (!this.getAttribute("class")) {
          this.setAttribute("class", "clicked");
        } else {
          this.removeAttribute("class");
        }
        if (mainMenu.getAttribute("class") !== "visible") {
          mainMenu.setAttribute("class", "visible");
        } else {
          mainMenu.setAttribute("class", "invisible");
        }
      },
      false
    );
  };
  render() {
    return (
      <header id="header" onLoad={this.swipeMenu}>
        <Identity />
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;
