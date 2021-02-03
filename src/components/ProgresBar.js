import React from 'react';
import './ProgresBar.css';
import flame from '../data/images/flame.png'

class ProgresBar extends React.Component {
    state = {
     flame: flame,
     indicator: 5,
     width_progresBar: 800,
     width: 5,
     }

next = () => {
    this.setState(this.state.indicator < 800 ? {indicator: this.state.indicator + 200, width: this.state.width + 200} : {indicator: this.state.indicator + 0, width: this.state.width + 0} )
}
previous = () => {
    this.setState(this.state.indicator <=5 ? null :  {indicator: this.state.indicator - 200, width: this.state.width - 200})
}

render () {

return (
    <div className="NavComponent">
        <div className="progresBar" style={{width:this.state.width_progresBar}}>
            <img id="flame" Indicator src={this.state.flame} alt="flame indicator" style={{left: this.state.indicator}} />
            <div className="progresBarIndicator1" style={{width:this.state.width}}></div>
        </div>
        <div className="ButtonPad">
        <input className="Button_return" type="button" value="<" onClick={this.previous}/>
        <input className="Button_forward" type="button" value=">" onClick={this.next}/>
        </div>
    </div>
) 
}
}

export default ProgresBar