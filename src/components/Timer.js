import React from 'react'
import './timer.css'

let intervalId = null

class Timer extends React.Component {

    state = {
        counter: 30 
    }
    
            timer = () =>{
                this.setState({counter: 30})
                document.getElementById('button').disabled = true
                setInterval(this.bip, 1000)
            }
            bip = () => {
                this.setState({counter:this.state.counter - 1})
                if(this.state.counter === 0){ 
                    this.finish()
                }
            }	
            finish = () => {
                document.getElementById('button').disabled = false
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