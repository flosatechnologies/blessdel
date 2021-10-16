import React, { Component } from "react";

import D5 from "../assets/images/D5.jpg";

class imageComponent extends Component {
  render() {
    return (
      <div id="projects" className="container img">
        <img src={D5} alt="i" />
        <h3>Cp</h3>
      </div>
    );
  }
}

export default imageComponent;
