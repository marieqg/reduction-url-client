import React from "react";
import axios from "axios";
import List from "./List";
import Header from "./Header";
import HomePage from "./Homepage";
import "./Homepage.css";

export default class NotFound extends React.Component {
  // déclaration et export du composant
  // state propre au composant
  state = {
    isLoading: true // gestion du chargement
  };

  async componentDidMount() {
    this.setState({
      isLoading: false // le chargement a été fait
    });
  }

  render() {
    if (this.state.isLoading) {
      //console.log("loading");
      // ce que l'on veut render avant le chargement
      alert(`L'URL renseignée est invalide, essayez de nouveau :) `);

      return null;
    }

    // ce que l'on veut render avant le chargement
    return (
      <div className="app-container">
        <HomePage />
      </div>
    );
  }
}
