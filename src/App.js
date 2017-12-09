import React, { Component } from "react";
import Header from "./view/header.js";
import BodyComponent from "./view/bodyComponent.js";
import FooterComponent from "./view/footerComponent.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
