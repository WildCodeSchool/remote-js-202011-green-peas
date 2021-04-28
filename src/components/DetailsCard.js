import details from "../data/json/detailjson.json";
import Explanation from "./Explanation";
import { Link } from "react-router-dom";
import React from "react";

class DetailCard extends React.Component {
  render() {
    const filter = details.filter(
      (food) => food.nom === this.props.match.params.value
    );
    return (
      <>
        <Link to="/aliments" className="bouton mb_1rem">
          Retour aux aliments{" "}
        </Link>
        <div className="encart border-blue">
          <h2>{filter[0].nom}</h2>
          <ul>
            {filter[0].ef < 1 ? (
              <li className="pea"> 🟢</li>
            ) : filter[0].ef < 4 ? (
              <li className="pea">🟡</li>
            ) : (
              <li className="pea">🔴</li>
            )}
            <li>
              Empreinte environnementale :
              <span className="dataDetail">{" " + filter[0].ef} </span>
            </li>
            <li>
              Changement climatique :
              <span className="dataDetail">
                {" " + filter[0].changementclim}
              </span>
            </li>
            <li>
              Appauvrissement de la couche d'ozone :
              <span className="dataDetail">{" " + filter[0].appauvozone}</span>
            </li>
            <li>
              Rayonnements ionisants :
              <span className="dataDetail">{" " + filter[0].rayonion}</span>
            </li>
            <li>
              Formation photochimique d'ozone :
              <span className="dataDetail">
                {" " + filter[0].formphotoozone}
              </span>
            </li>
            <li>
              Particules :
              <span className="dataDetail">{" " + filter[0].particule}</span>
            </li>
            <li>
              Acidification terrestre et eaux douces :
              <span className="dataDetail">{" " + filter[0].acidterreau}</span>
            </li>
            <li>
              Eutrophisation terrestre :
              <span className="dataDetail">{" " + filter[0].euterre}</span>
            </li>
            <li>
              Eutrophisation eaux douces :
              <span className="dataDetail">{" " + filter[0].eueaudouce}</span>
            </li>
            <li>
              Eutrophisation marine :
              <span className="dataDetail">{" " + filter[0].eumarine}</span>
            </li>
            <li>
              Utilisation du sol :
              <span className="dataDetail">{" " + filter[0].utilsol}</span>
            </li>
            <li>
              Écotoxicité pour écosystèmes aquatiques d'eau douce :
              <span className="dataDetail">{" " + filter[0].ecotoxeau}</span>
            </li>
            <li>
              Épuisement des ressources eau :
              <span className="dataDetail">{" " + filter[0].epuieau}</span>
            </li>
            <li>
              Épuisement des ressources énergétiques :
              <span className="dataDetail">{" " + filter[0].epuienerg}</span>
            </li>
            <li>
              Épuisement des ressources minérales :
              <span className="dataDetail">{" " + filter[0].epuimine}</span>
            </li>
          </ul>
        </div>
        <Explanation />
        <Link to="/aliments" className="bouton mb_1rem">
          Retour aux aliments{" "}
        </Link>
      </>
    );
  }
}
export default DetailCard;
