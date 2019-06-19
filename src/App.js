import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/Homepage";
import Redirect from "./components/Redirect";

export default class App extends React.Component {
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

  render() {
    if (this.state.isLoading) {
      //console.log("loading");
      // ce que l'on veut render avant le chargement
      return null;
    }

    // ce que l'on veut render avant le chargement
    return (
      <div className="app-container">
        {/* <HomePage /> */}
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/hello" component={Redirect} />
        </Router>
      </div>
    );
  }
}
