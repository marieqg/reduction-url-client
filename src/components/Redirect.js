import React from "react";
import axios from "axios";

export default class Redirect extends React.Component {
  // déclaration et export du composant
  //utiliser le constructeur s'il y a des choses à faire avant l'appel de componenDidMount
  // state propre au composant
  state = {
    isLoading: true, // gestion du chargement
    redirection: ""
  };

  async componentDidMount() {
    //permet de vérifier rapidement que le composant est bien appelé
    console.log("DidMount has been called from ", this.constructor.name);

    const keyUrl = "roBMb";

    try {
      const response = await axios.get(
        `http://short-url-server-mq.herokuapp.com/:${keyUrl}`
      );
      console.log("response.data", response.data);
      if (response) {
        this.setState({
          redirection: `http://short-url-server-mq.herokuapp.com/:${keyUrl}`
        });
      }
    } catch (error) {
      this.setState({ error: error });
    }
    console.log("hello", this.state.redirection);
  }

  // Gestion des événenemts :
  /* handleEvent = () => {
  faire quelquechose
} */

  // Autres méthodes du composant :
  /* doSomething = () => {
  faire quelquechose d'autre
} */

  render() {
    if (this.state.isLoading) {
      console.log("state", this.state.redirection);
      // ce que l'on veut render avant le chargement
      return null;
    }
    // ce que l'on veut render avant le chargement
    return (
      <div>
        {this.state.redirection
          ? (window.location = this.state.redirection)
          : (window.location =
              "http://short-url-marie-quittelier.herokuapp.com/")}
      </div>
    );
  }
}
