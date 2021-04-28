import AliceCarousel from "react-alice-carousel";
import React from "react";

import "./Carousel.scss";
import "react-alice-carousel/lib/alice-carousel.css";

import janvier from "../data/images/F&L_de_saisons/janvier.jpg";
import février from "../data/images/F&L_de_saisons/février.jpg";
import mars from "../data/images/F&L_de_saisons/mars.jpg";
import avril from "../data/images/F&L_de_saisons/avril.jpg";
import mai from "../data/images/F&L_de_saisons/mai.jpg";
import juin from "../data/images/F&L_de_saisons/juin.jpg";
import juillet from "../data/images/F&L_de_saisons/juillet.jpg";
import aout from "../data/images/F&L_de_saisons/aout.jpg";
import septembre from "../data/images/F&L_de_saisons/septembre.jpg";
import octobre from "../data/images/F&L_de_saisons/octobre.jpg";
import novembre from "../data/images/F&L_de_saisons/novembre.jpg";
import décembre from "../data/images/F&L_de_saisons/décembre.jpg";

export default function Carousel() {
  const test = () => {
    let d = new Date();
    return d.getMonth();
  };

  return (
    <div className="carousel">
      <h1>Consommer de saison</h1>
      <AliceCarousel activeIndex={test()}>
        <img src={janvier} className="sliderimg" alt="janvier" />
        <img src={février} className="sliderimg" alt="février" />
        <img src={mars} className="sliderimg" alt="mars" />
        <img src={avril} className="sliderimg" alt="avril" />
        <img src={mai} className="sliderimg" alt="mai" />
        <img src={juin} className="sliderimg" alt="juin" />
        <img src={juillet} className="sliderimg" alt="juillet" />
        <img src={aout} className="sliderimg" alt="août" />
        <img src={septembre} className="sliderimg" alt="septembre" />
        <img src={octobre} className="sliderimg" alt="octobre" />
        <img src={novembre} className="sliderimg" alt="novembre" />
        <img src={décembre} className="sliderimg" alt="décembre" />
      </AliceCarousel>
    </div>
  );
}
