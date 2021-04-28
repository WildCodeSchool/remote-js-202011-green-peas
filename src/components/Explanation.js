import React from "react";

export default class Explanation extends React.Component {
  render() {
    return (
      <section className="encart">
        <h2>Explications des termes</h2>
        <div id="encart">
          <h2 className="titreJeux">
            Empreinte environnementale :
            <br />
            Score de synthèse de tous les autres scores (mPt/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Changement climatique :
            <br />
            Émission de gaz à effet de serre (kg CO2 eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Appauvrissement de la couche d'ozone :
            <br />
            Amincissement de la couche d'ozone (E-06 kg CVC11 eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Rayonnements ionisants :
            <br />
            Rayonnement électromagnétique ou corpusculaire capable de produire
            directement ou indirectement des ions lors de son passage à travers
            la matière (kBq U-235 eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Formation photochimique d'ozone :
            <br />
            Pollution atmosphérique riche en ozone, appelée aussi « smog », se
            rencontre dans la basse couche de l’atmosphère, ou troposphère (E-03
            kg NMVOC eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Particules :
            <br />
            Émissions de particules dues aux activités (E-06 disease inc./kg de
            produit)
          </h2>
          <h2 className="titreJeux">
            Particules :
            <br />
            Émissions de particules dues aux activités (E-06 disease inc./kg de
            produit)
          </h2>
          <h2 className="titreJeux">
            Acidification terrestre et eaux douces :
            <br />
            Potentiel d’acidification sur les écosystèmes terrestre et d’eau
            douce (mol H+ eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Eutrophisation :
            <br />
            Déséquilibre du milieu provoqué par l'augmentation de la
            concentration des nutriments (terrestre : mol N eq/kg de produit
            <br />
            eaux douces : E-03 kg P eq/kg de produit
            <br />
            marine : E-03 kg N eq/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Utilisation du sol :
            <br />
            Modifications de Matière Organique des Sols (Pt/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Écotoxicité pour écosystèmes aquatiques d'eau douce :
            <br />
            Émission de substances toxiques pour les milieux aquatiques d'eau
            douce (CTUe/kg de produit)
          </h2>
          <h2 className="titreJeux">
            Épuisement des ressources :
            <br />
            Indicateur dep ression sur les ressources naturelles en fonction de
            sa rareté.(eau : m3 depriv./kg de produit
            <br />
            énergétiques : MJ/kg de produit
            <br />
            minérales : E-06 kg Sb eq/kg de produit)
          </h2>
        </div>
      </section>
    );
  }
}
