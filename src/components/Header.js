import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  // déclaration et export du composant
  // state propre au composant
  state = {
    isLoading: true // gestion du chargement
  };

  async componentDidMount() {
    //permet de vérifier rapidement que le composant est bien appelé
    //console.log("DidMount has been called from ", this.constructor.name);
    this.setState({
      isLoading: false // le chargement a été fait
    });
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
      //console.log("loading");
      // ce que l'on veut render avant le chargement
      return null;
    }

    // ce que l'on veut render avant le chargement
    return <div className="header-container">Hello</div>;
  }
}
