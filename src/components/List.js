import React from "react";
import "./List.css";
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
      //console.log("loading");
      // ce que l'on veut render avant le chargement
      return null;
    }
    const tabOfaddress = this.props.address;
    console.log(tabOfaddress);
    // ce que l'on veut render aprés le chargement
    return (
      <div className="list-container">
        <div className="list-container-header">
          <div className="list-container-header-part1">
            <span className="list-container-header-title1">Original URL</span>
            <span className="list-container-header-title2">Short URL</span>
          </div>

          <span className="list-container-header-title-visit">Visits</span>
        </div>

        {tabOfaddress.map(oneAddress => {
          return (
            <div className="list-container-list" key={oneAddress._id}>
              <div className="list-container-list-part1">
                <a
                  href={oneAddress.longUrl}
                  className="list-container-list-items1"
                >
                  {oneAddress.longUrl}
                </a>

                <a
                  className="list-container-list-items2"
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
              </div>
              <span className="list-container-list-items-visit">
                {oneAddress.counter}
              </span>
            </div>
          );
        })}
        {/* PARTIE D'ERREUR S'IL Y EN A UNE  */}
        {this.state.error && (
          <div>
            <h2>Error</h2>
            {this.state.error.response.data.error}
          </div>
        )}
      </div>
    );
  }
}
