import axios from "axios";
import React from "react";
import Card from "./Card";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "Aucune recherche",
      loading: false,
      search: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getFood = this.getFood.bind(this);
  }

  getFood() {
    this.setState({ loading: true }, () => {
      axios
        .get(
          `https://koumoul.com/s/data-fair/api/v1/datasets/agribalyse-synthese/values_agg?field=Nom_du_Produit_en_Fran%C3%A7ais&format=json&agg_size=100&q=${this.state.search}&q_mode=simple&sort=Nom_du_Produit_en_Fran%C3%A7ais&size=100&select=%2A&sampling=neighbors`
        )
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            loading: false,
            food: data.aggs.filter(food=>food.value.toLowerCase().includes(this.state.search.toLowerCase())|| food.results[0]["Sous-groupe_d'aliment"].toLowerCase().includes(this.state.search.toLowerCase())),
          });
        });
    });
  }
  
  handleSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="footer">
        <div className="search">
          <input
            type="search"
            placeholder="Rechercher un aliment"
            id="search"
            onChange={this.handleSearch}
          />
          <button onClick={this.getFood}>Recherchez</button>
          {this.state.food === "Aucune recherche" ? (
            <div>Aucune recherche lancée</div>
          ) : loading ? (
            <div>loading...</div>
          ) : this.state.food.length === 0 ? (
            <div>
              Désolé, votre aliment n'est pas présent dans notre base de données
            </div>
          ) : (
            <>
              <p>
                Vous {this.state.search.length === 0 ? "ne " : null}recherchez{" "}
                {this.state.search.length === 0 ? "rien" : this.state.search}.
              </p>
              <p>
                Il y a {this.state.food.length}{" "}
                {this.state.food.length <= 1 ? "résultat" : "résultats"}.
              </p>
              {this.state.food.length === 100 ? (
                <p>Trop de résultats, précisez votre recherche.</p>
              ) : null}
              <div className="result">
                {this.state.food.map((prop) => (
                  <Card
                    key={prop.value}
                    value={prop.value}
                    result={
                      prop.results[0]["Score_unique_EF_(mPt/kg_de_produit)"].toFixed(2)
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Footer;
