import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
  handleClick = async urlId => {
    if (this.state.error !== null) {
      this.setState({ error: null });
    }
    try {
      await axios.post("http://short-url-server-mq.herokuapp.com/update", {
        id: urlId
      });
    } catch (error) {
      this.setState({ error: error });
      alert(this.state.error.response.data.error);
    }
  };

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

              <a
                href={oneAddress.longUrl}
                onClickCapture={() => {
                  this.handleClick(oneAddress._id);
                }}
                onContextMenu={() => {
                  this.handleClick(oneAddress._id);
                }}
              >
                {oneAddress.shortUrl}
              </a>

              <span>{oneAddress.counter}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
