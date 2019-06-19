import React from "react";
import "./Header.css";
import axios from "axios";

export default class Header extends React.Component {
  // déclaration et export du composant
  // state propre au composant
  state = {
    error: null,
    isLoading: true, // gestion du chargement
    url: ""
  };

  async componentDidMount() {
    //permet de vérifier rapidement que le composant est bien appelé
    //console.log("DidMount has been called from ", this.constructor.name);
    this.setState({
      isLoading: false // le chargement a été fait
    });
  }

  // Gestion des événenemts :
  handleSubmit = async event => {
    // annule le comportement par defaut du navigateur
    // sans quoi le navigateur recharge la page
    event.preventDefault();
    // Si il y a une erreur d'un submit précédent => reset error
    if (this.state.error !== null) {
      this.setState({ error: null });
    }
    try {
      await axios.post("http://short-url-server-mq.herokuapp.com/create", {
        url: this.state.url
      });
      this.props.displayData(); // permet de faire apparaitre la liste avec un changement de state dans la homepage
      alert(`Vous avez bien réduit l'URL  ${this.state.url}`);
      this.setState({
        url: ""
      });
    } catch (error) {
      alert("L'URL a déjà été utilisée ");
    }
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ url: value });
  };

  render() {
    if (this.state.isLoading) {
      // ce que l'on veut render avant le chargement
      return null;
    }

    // ce que l'on veut render avant le chargement
    return (
      <div className="header-main-container">
        <div className="header-second-container">
          <h1 className="header-second-container-title">Simplify your links</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="header-second-container-form">
              <input
                className="header-second-container-input"
                placeholder="Your orginal URL here"
                type="url"
                value={this.state.url}
                required={true}
                onChange={this.handleChange}
              />
              <button className="header-second-container-button" type="submit">
                SHORTEN URL
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
