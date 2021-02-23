import React from 'react'
import Footer from '../components/Footer'
import defaultImgDish from "../data/images/dish.svg";

import lamp from '../data/images/lamp.png'
import suvcar from '../data/images/suvcar.png'

import './BilanDetail.scss'

class BilanDetail extends React.Component {
    state = {
        imgDefault: defaultImgDish,
      };
    render(){
        return(
            <div className="">
                <section className="encart">
                    <h1>Détail du bilan de votre menu</h1>
                    <p className="Score" style={{marginLeft:this.props.score.toFixed(2)*(320/80)}}>{this.props.score.toFixed(2)} kg CO2 </p>
                    <div className="scoreVulgEchelle">
                    <div className="scoreVulg" style={{width:this.props.score.toFixed(2)*(320/80)}}></div>
                    </div>
                    <div className="EchelleValeurs">
                    <p className="valeursEch"> 7.95*</p>
                    <p className="valeursEch"> 87.96*</p>
                    </div>
                    <p className="explications">* valeurs minimales et maximales possibles selon les choix effectués pour le menu exprimées en kg de CO2 émis </p>
                </section>
                

{/* Section choix du plat avec empreinte néfaste */}

                <section className="encart">
                <h3>
                    Le plat X (maj props à mettre ici) avec ce score ****ef*** est celui qui a l'impact le plus néfaste 
                    sur l'environnement  
                </h3>
                {this.props.menu.map(food=><p>{food.name + " " + food.carbone}</p>)}
                <div className="platNefaste">
                <img
                        className="dish"
                        src={this.state.imgDefault}
                        alt={this.state.imgDefaultAlt}
                        />
                      <div>
                          <h4>
                            Empreinte carbone : 2t. CO2
                          </h4>
                          <p>
                              Ton menu est très appétissant mais son impact 👎 sur la planete est équivalent à : 
                          </p>
                          <p>
                          <span className='nbjours'>{(this.props.score.toFixed(0))*2}</span>  jours d'éclairage avec 1 ampoule<img className='imgicon' image src={lamp} alt='lamp.png'/>   
                        </p>
                        <strong>OU</strong>
                        <p><span className='nbjours'>{(this.props.score*9).toFixed(0)}</span>  km en SUV <img className='imgicon' src={suvcar} alt='suv-car'/></p>
                          </div>  
                </div>
                {/*
                    entrée moy 3.61 min 046 max 15.91
                    plat moy 17.21 min 6.13 max 50.07
                    accomp moy 1.27 min 0.68 max 2.24
                    dessert moy 4.13 min 0.28 max 18.58
                    boisson moy 0.71 min 0.4 max 1.16
                    
                    total moy 26.93 min 7.95 max 87.96
                */}
                </section>


{/* Sections des alternatives */}

<section className="encart">
                <h3>
                    Nos conseils avec des alternatives  
                </h3>
                <div className="platNefaste">
                <img
                        className="dish"
                        src={this.state.imgDefault}
                        alt={this.state.imgDefaultAlt}
                        />
                      <div>
                          <h4>
                            Empreinte carbone : 2t. CO2
                          </h4>
                          <p>
                              Props texte infos 
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c
                          </p>
                          </div>  
                </div>

                </section>



                
                <Footer />
            </div>
        )
    }
}

export default BilanDetail
