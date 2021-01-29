import React from 'react'
import Bouton from '../components/Bouton'
import '../screen/typo.css';
import '../screen/screen.css';
import earth from '../data/images/earth-2.svg'
import FactsList from "../components/FactsList"

const Home = () => {
    return(
        <div id="Page">
                <section className='intro'>
                    <h1>Sauve la planète</h1>
                    <figure class="figure">
                        <img src={earth} class="figure-img img-fluid rounded" alt="" />
                        <figcaption class="figure-caption text-xs-right"></figcaption>
                    </figure>
                    <FactsList />
                    <Bouton screen="jkrejkre.html" texte="Sauve la planète" />
                </section>
        </div>
    )
}


export default Home