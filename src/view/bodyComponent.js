import React from "react";
import "./css/bodyComponent.css";

export default class BodyComponent extends React.Component {
  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyComponent-left">left body is here</div>
        <div className="BodyComponent-right">right body is here</div>
      </div>
    );
  }
}
