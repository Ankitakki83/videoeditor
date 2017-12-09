import React, { Component } from "react";
import Header from "./view/header.js";
import BodyComponent from "./view/bodyComponent.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
