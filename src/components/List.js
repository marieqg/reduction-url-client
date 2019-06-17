import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

export default class List extends React.Component {
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
    const tabOfaddress = this.props.address;
    console.log(tabOfaddress);
    // ce que l'on veut render aprés le chargement
    return (
      <div className="list-container">
        {tabOfaddress.map(oneAddress => {
          return (
            <div key={oneAddress._id}>
              <span>{oneAddress.longUrl}</span>

              <a href={oneAddress.longUrl}>{oneAddress.shortUrl}</a>

              <span>{oneAddress.counter}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
