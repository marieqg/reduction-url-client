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
    const { keyUrlParams } = this.props.match.params;
    await axios
      .get(`https://short-url-server-mq.herokuapp.com/${keyUrlParams}`)
      .then(response => {
        console.log("response", response.data);
      })
      .catch(error => {
        alert("l'URL demandée n'est pas valide, merci de recommencer");
      });
    this.setState({
      redirection: true,
      isLoading: false,
      keyUrl: keyUrlParams
    });
  }

  render() {
    if (this.state.isLoading) {
      // ce que l'on veut render avant le chargement
      return null;
    }
    // ce que l'on veut render avant le chargement
    return (
      <div>
        {this.state.keyUrl && this.state.keyUrl
          ? (window.location = `https://short-url-server-mq.herokuapp.com/${
              this.state.keyUrl
            }`)
          : (window.location =
              "http://short-url-marie-quittelier.herokuapp.com/")}
      </div>
    );
  }
}
