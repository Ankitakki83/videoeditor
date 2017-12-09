import React, { Component } from "react";
import Header from "./view/header.js";
import FooterComponent from "./view/footerComponent.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
