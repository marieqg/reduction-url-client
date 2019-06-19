import React from "react";
import axios from "axios";
import List from "./List";
import Header from "./Header";
import "./Homepage.css";

export default class Homepage extends React.Component {
  // déclaration et export du composant
  // state propre au composant
  state = {
    isLoading: true, // gestion du chargement
    address: [],
    page: "welcome"
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://short-url-server-mq.herokuapp.com/"
    );
    this.setState({
      isLoading: false, // le chargement a été fait
      address: response.data
    });
    if (this.state.address.length > 0) {
      this.setState({
        page: "result"
      });
    }
  }

  // Gestion des événenemts :
  displayData = async () => {
    const response = await axios.get(
      "http://short-url-server-mq.herokuapp.com/"
    );
    this.setState({
      isLoading: false, // le chargement a été fait
      address: response.data
    });
    if (this.state.address.length > 0) {
      this.setState({
        page: "result"
      });
    }
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
        {(this.state.page === "welcome" || this.state.page === "result") && (
          <Header
            displayData={this.displayData}
            notFound={this.props.notFound}
          />
        )}

        {<List address={this.state.address} />}
      </div>
    );
  }
}
