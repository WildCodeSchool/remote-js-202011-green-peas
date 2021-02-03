import React from "react"; 
import FactCards from "./FactsCards";
import gas from "../data/images/gas.svg"
import biodiversity from "../data/images/biodiversity.svg"
import deforestation from "../data/images/deforestation.svg"
import oil from "../data/images/oil.svg"
import pesticide from "../data/images/pesticide.svg"
import water from "../data/images/water.svg"
import soil from "../data/images/soil_degradation.svg"


//Tableau de faits sur l'impact de l'agriculture sur l'environnement

const facts = [
    {
        catégorie: "Emissions",
        texte: "Savais-tu que l’agriculture est responsable de près d’un quart des émissions mondiales de gaz à effet de serres ?",
        source: "https://www.greenpeace.fr/agriculture-dereglements-climatiques/",
        icon: `${gas}`
    },

    {
        catégorie: "Déforestation",
        texte: "Savais-tu que 80 % de la déforestation est causé par l’agriculture ?",
        source: "https://www.lemonde.fr/planete/article/2015/09/07/80-de-la-deforestation-est-due-a-l-agriculture_4747867_3244.html)", 
        icon: `${deforestation}`
    },

    {
        catégorie: "Déforestation",
        texte: "Savais-tu que 49% de la déforestation dans les pays tropicaux s’expliquent par la conversion illégale de terres en exploitations agricoles à vocation commerciale",
        source: "https://www.forest-trends.org/publications/consumer-goods-and-deforestation/",
        icon: `${deforestation}`
    },

    {
        catégorie: "Déforestation",
        texte: "Savais-tu que 70% de la déforestation en Amérique du Sud est causée par l'agriculture commerciale ?",
        source: "http://www.fao.org/docrep/ARTICLE/WFC/XII/MS12A-F.htm",
        icon: `${deforestation}`
    },

    {
        catégorie: "Eau",
        texte: "Savais-tu que 70 % de l’eau douce sur terre est utilisée pour l’agriculture ?", 
        source: "https://blogs.worldbank.org/fr/opendata/graphique-70-de-l-eau-douce-est-utilisee-pour-l-agriculture#:~:text=Dans%20la%20plupart%20des%20r%C3%A9gions,pr%C3%A9l%C3%A8vements%20de%20ressources%20en%20eau.",
        icon: `${water}`
    },

    { 
        catégorie: "Sols",
        texte: "Savais-tu que chaque seconde 9500m² de terres cultivables disparaissent dans le monde ?",
        source: "https://www.planetoscope.com/sols/1175-disparition-de-surfaces-agricoles-dans-le-monde.html",
        icon: `${soil}`
    },

    {
        catégorie: "Biodiversité",
        texte: "Savais-tu que en France 70 % des insectes ont disparu en l’espace de 30 ans ?", 
        source: "Vers la résilience alimentaire, les grenier de l’abondance",
        icon: `${biodiversity}`
    },

    {
        catégorie: "Energies fossiles", 
        texte: "Savais-tu qu’il faut 7 à 10 calories fossiles pour générer une seule calorie alimentaire ?",
        source: "https://www.socialter.fr/article/maxime-de-rostolan-l-agriculture-industrielle-coute-bien-plus-cher-a-la-societe-que-le-bio-3#:~:text=Dans%20les%20ann%C3%A9es%2040%2C%20avec,g%C3%A9n%C3%A9rer%20une%20seule%20calorie%20alimentaire", 
        icon: `${oil}`
    },

    {
        catégorie: "Pesticide",
        texte: "Savais-tu que chaque année plus de 66,600 tonnes de pesticides sont utilisés en France ? Soit 2 kilos chaque secondes ?",
        source: "https://www.planetoscope.com/sols/47-consommation-de-pesticides-phytosanitaires-en-france.html#:~:text=Plus%20de%2066.600%20tonnes%20pesticides,)%20chaque%20seconde%20(compteur", 
        icon: `${pesticide}`
    },
]

// peut être mettre un bouton pour afficher toutes les citation
// const FactsList = () => { 
//         return (
//             <div>
//                 {facts.map((fact, index) => (<FactCards texte={fact.texte} icon={fact.icon} key={index} />))}
//             </div> )
// }


const FactsList = () => { 
    const rand = getRandom(0,facts.length - 1);
    return (
        <div>
            <FactCards texte={facts[rand].texte} icon={facts[rand].icon} />
        </div> )
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

export default FactsList