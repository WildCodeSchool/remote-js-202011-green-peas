import React from 'react';
import Timer from './Timer';
import './GameAccess.css';
import timer_earth from '../data/images/timer_earth.png';


class GameAccess extends React.Component {
    render (){
        return (
            <div className="BodyGame">
                <div className="introRules">
                    <div className="Rules"> 
                         <div id="titleRules"> REGLES DU JEU </div>
                         <p id="rulesTextIntro"> Tu as une faim de 🐺 ? Alors commence le jeu pour créer ton menu Entrée + Plat + Dessert + Boisson  😋 </p>
                    </div>
                    <div id="imageDiv"><img src={timer_earth} alt="timer-earth" id="imageEarth"/></div>
                </div>       
                <div className="Bar"></div>
                <div className="AstuceParag">                   
                    <div className="Astuce">💚 Astuces </div>
                    <p id="rulesText">#1 Prends tes décisions rapidement car la 🌍 est déjà en danger ⚠️
                    <br /> #2 Pense que chacun de tes choix à un impact 🔥 sur la planète 
                    <br /> #3 N'oublie pas, les 🍅 ne poussent pas l'hiver ⛄ </p>
                </div>
                <div className="ButtonStart"><Timer /></div> 
            </div>
        )
    }
}


export default GameAccess; 