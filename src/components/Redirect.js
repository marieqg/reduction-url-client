import React from "react";
import axios from "axios";

export default class Redirect extends React.Component {
  // déclaration et export du composant
  //utiliser le constructeur s'il y a des choses à faire avant l'appel de componenDidMount
  // state propre au composant
  state = {
    isLoading: true, // gestion du chargement
    redirection: false,
    keyUrl: ""
  };

  async componentDidMount() {
    const { fromUrlKey } = this.props.match.params;

    await axios
      .get("https://short-url-server-mq.herokuapp.com/roBMb")
      .then(response => {
        console.log("response", response.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      redirection: true,
      isLoading: false
    });
    console.log(this.props.match);
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
    const urlToRedirect = `http://short-url-server-mq.herokuapp.com/roBMb
    `;
    console.log(urlToRedirect);
    if (this.state.isLoading) {
      // ce que l'on veut render avant le chargement
      return null;
    }
    // ce que l'on veut render avant le chargement
    return (
      <div>
        {this.state.redirection
          ? (window.location = urlToRedirect)
          : (window.location =
              "http://short-url-marie-quittelier.herokuapp.com/")}
      </div>
    );
  }
}
