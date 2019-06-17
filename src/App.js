import React from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import List from "./components/List";

export default class App extends React.Component {
  // déclaration et export du composant
  // state propre au composant
  state = {
    isLoading: true, // gestion du chargement
    address: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://short-url-server-mq.herokuapp.com/"
    );

    this.setState({
      isLoading: false, // le chargement a été fait
      address: response.data
    });
  }

  // Gestion des événenemts :
  handleSubmit = () => {
    /* faire quelquechose*/
  };

  // Autres méthodes du composant :
  /* doSomething = () => {
  faire quelquechose d'autre
} */

  render() {
    if (this.state.isLoading) {
      //console.log("loading");
      // ce que l'on veut render avant le chargement
      return null;
    }

    // ce que l'on veut render avant le chargement
    return (
      <div className="app-container">
        <Header />
        <List address={this.state.address} />
      </div>
    );
  }
}
