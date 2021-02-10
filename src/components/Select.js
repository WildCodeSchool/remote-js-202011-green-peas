import React, { Component } from 'react';


const test = [
{ nom: "Pastis", ef: "0.12" },
{ nom: "Eau de vie", ef: "0.12" },
{ nom: "Gin", ef: "0.12" },
{ nom: "Liqueur", ef: "0.25" },
{ nom: "Rhum", ef: "0.12" }]

export default class Select extends Component {
  render() {
    return (
      <select>
        {test.map((prop) => (
          <option value={prop.ef}>{prop.nom}</option>
        ))}
      </select>
    );
  }
}
