import React from "react";
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.value}</p>
        <p>
          Pois environnementale : {this.props.result < 1 ? <span>&#128994; &#128994; &#128994;</span> : this.props.result < 4 ? <span>&#128994; &#128994;</span> : <span>&#128994;</span>}
        </p>
      </div>
    );
  }
}
 export default Card