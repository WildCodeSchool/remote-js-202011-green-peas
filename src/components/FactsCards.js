import React from "react"; 
import './Facts.css'

class FactCards extends React.Component {
    render() {
        const {props} = this
        return( 
            <div className="bubble thought">
                <img src={props.icon} />
                <p>{props.texte}</p>
            </div>
        )
    }
  }

  export default FactCards