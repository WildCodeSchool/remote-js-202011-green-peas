import React from "react";
import SolutionsCards from "./SolutionsCards";

import amap from "../data/images/amap.png";
import beef from "../data/images/beef.jpeg";
import ecocert from "../data/images/ecocert.jpg";
import miimosa from "../data/images/mimosa.jpg";
import palmoil from "../data/images/Palmoil.jpg";
import perma from "../data/images/perma.jpg";
import ruche from "../data/images/ruche.jpg";

//Tableau de solutions pour consommer mieux

const solutions = [
  {
    categorie: "Circuits-courts",
    titre: "les AMAP",
    description:
      "Une AMAP (Association pour le Maintien de l'Agriculture Paysanne) est un partenariat entre un groupe de consommateurs et une exploitation locale. L'objectif est de préserver l'existence d'une agriculture de proximité, durable, saine et juste",
    photo: `${amap}`,
    lien: "http://www.reseau-amap.org/",
  },

  {
    categorie: "Circuits-courts",
    titre: "la ruche qui dit-oui",
    description:
      "La Ruche qui dit oui est une plateforme collaborative qui permet de mettre en relation directe producteurs locaux et consommateurs dans le but de favoriser les circuits-courts ",
    photo: `${ruche}`,
    lien: "https://laruchequiditoui.fr/fr",
  },

  {
    categorie: "Choix personnels",
    titre: "Huile de Palme",
    description:
      "Préfére les produits sans huiles de palme pour limiter ton impact sur la biodiversité et la destruction du vivant",
    photo: `${palmoil}`,
    lien:
      "https://www.greenpeace.fr/deforestation-huile-de-palme-compte-a-rebours-final/",
  },

  {
    categorie: "Choix personnels",
    titre: "Viande",
    description:
      "Essaie de réduire ta consommation de viande. Pour rappel 1kg de viande bovine équivaut à 27kg de gaz à effet de serre et utilise jusqu'à 13 500L d'eau",
    photo: `${beef}`,
    lien: `https://www.lemonde.fr/les-decodeurs/article/2018/12/11/pourquoi-la-viande-est-elle-si-nocive-pour-la-planete_5395914_4355770.html`,
  },

  {
    categorie: "Choix personnels",
    titre: "Produits exotiques",
    description:
      "Pour les produits exotiques comme le café ou le chocolat, préfére des produits issus de filières équitables avec une réelle traçabilité",
    photo: `${ecocert}`,
    lien: "https://www.ecocert.com/fr/home",
  },

  {
    categorie: "Engagement",
    titre: "Jardin",
    description:
      "Si possible, jardine un bout de ton terrain selon les principes de la permaculture, une méthode qui vise à produire des fruits et légumes tout en recréant des écosystèmes respectueux de la biodiversité ",
    photo: `${perma}`,
    lien: "https://www.fermedubec.com/",
  },

  {
    categorie: "Engagement",
    titre: "Epargne écologique",
    description:
      "Grâce à des plateformes comme MiiMOSA, donne du pouvoir à ton argent en investissant dans des projets de maraîchage, viticulture, élevage etc... et finance l'agriculture & alimentation de demain",
    photo: `${miimosa}`,
    lien: "https://www.miimosa.com/fr?l=fr",
  },
];

const Solutions = () =>
  solutions.map((solution) => (
    <SolutionsCards
      categorie={solution.categorie}
      titre={solution.titre}
      description={solution.description}
      photo={solution.photo}
      lien={solution.lien}
    />
  ));

export default Solutions;
