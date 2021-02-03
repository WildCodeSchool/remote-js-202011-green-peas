import React from "react";
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.value}</p>
        <p>
          Empreinte environnementale : {this.props.result}
        </p>
      </div>
    );
  }
}
 export default Card