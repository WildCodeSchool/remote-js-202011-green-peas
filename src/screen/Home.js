import React from 'react'
import { Link } from "react-router-dom";
import '../components/bouton.css'
import '../screen/typo.css';
import '../screen/screen.css';
import earth from '../data/images/earth-2.svg'
import Select from '../components/Select';


const Home = () => {
    return(
        <div id="Page">
                <section className='intro'>
                <Select />
                    <h1>Sauve la planète</h1>
                    <figure className="figure">
                        <img src={earth} alt="earth" />
                        <figcaption></figcaption>
                    </figure>
                    <p>
                        Sauve la planète et découvre ton pois &#128994; environnemental
                    </p>
                    
                    
                    <Link to="/game" className="bouton">Sauve la planète</Link>
                </section>
        </div>
    )
}

export default Home