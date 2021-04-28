import Footer from "../components/Footer";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="encart">
        <h1>A propos</h1>
        <p>
          Green Peas le site de sensibilisation de la pollution engendrée par la
          production et le transport des aliments.
        </p>

        <h2>Sources</h2>
        <h3>Données de l'impact environnemental : </h3>
        <ul>
          <li>
            <a href="https://api.gouv.fr/les-api/api_agribalyse">AGRYBALYSE</a>
          </li>
        </ul>

        <h3>️Citation de l'intro :</h3>
        <ul>
          <li>
            <a href="https://www.lemonde.fr/">Le Monde</a>
          </li>
          <li>
            <a href="https://www.planetoscope.com/">Planetoscope</a>
          </li>
          <li>
            <a href="https://www.greenpeace.fr/">Greenpeace</a>
          </li>
          <li>
            <a href="https://www.forest-trends.org/">Forest Trends</a>
          </li>
          <li>
            <a href="http://www.fao.org/">Fao</a>
          </li>
          <li>
            <a href="https://blogs.worldbank.org/">World Bank Blogs</a>
          </li>
          <li>
            <a href="https://www.socialter.fr/">Socialter</a>
          </li>
        </ul>

        <h3>Image fruits et légumes de saison : </h3>
        <ul>
          <li>
            <a href="https://www.biocoop.fr/">Biocoop</a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default About;
