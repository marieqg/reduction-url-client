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
  // permet de charger les données connues en base de données
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

  // de gérer le click sur un url de la liste
  handleClick = async url => {
    if (this.state.error !== null) {
      this.setState({ error: null });
    }
    try {
      await axios.post("http://short-url-server-mq.herokuapp.com/update", {
        id: url
      });
      axios.get("http://short-url-server-mq.herokuapp.com/").then(response => {
        this.setState({
          address: response.data
        });
      });
    } catch (error) {
      this.setState({ error: error });
      alert(this.state.error.response.data.error);
    }
  };

  render() {
    if (this.state.isLoading) {
      // ce que l'on veut render avant le chargement
      return null;
    }

    // ce que l'on veut render avant le chargement
    return (
      <div className="app-container">
        {(this.state.page === "welcome" || this.state.page === "result") && (
          <Header displayData={this.displayData} />
        )}

        {<List address={this.state.address} handleClick={this.handleClick} />}
      </div>
    );
  }
}
