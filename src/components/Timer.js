import React from 'react'
import './timer.css'

let intervalId = null

class Timer extends React.Component {

    state = {
        counter: 30
    }
timer = () =>{
    this.setState({counter: 30})	

intervalId = setInterval(this.bip, 1000)
}
bip = () => {
    this.setState({counter: - 1 + this.state.counter})
    if(this.state.counter === 0){ 
        this.finish()
    }
  }	
finish = () => {
      clearInterval(intervalId)
  }
    render(){
    return(
        <div>
            <button className="button" onClick={this.timer} id="button">Start Game</button>
            <div id="bip" className="compteur">{this.state.counter === 0 ? "TERMINE !" : this.state.counter + " secondes restantes."}</div>
        </div>
        )
    }
}

export default Timer