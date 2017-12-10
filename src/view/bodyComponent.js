import React from "react";
import "./css/bodyComponent.css";

export default class BodyComponent extends React.Component {
  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyComponent-left">left body is here

        <ul className="BodyCompoent-leftList"> 
          <li> first item</li>
          <li> second item</li>
          <li> third item</li>
          <li> fourth item</li>


          </ul>

        
        
        
        
        </div>
        <div className="BodyComponent-right">right body is here
        <ol>

        <li>fourth item </li>
        <li>  fourth item</li>
        <li> fourth item </li>
        <li> fourth item</li>
        <li> fourth item </li>

        </ol>
        
        </div>
      </div>
    );
  }
}


