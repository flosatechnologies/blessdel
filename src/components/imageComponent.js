import React, { Component } from "react";
import Background from "../assets/images/D5.jpg";

export default class imageComponent extends Component {
  render() {
    return (
      <div>
        <img
          sizes="(min-width: 36em) 33.3vw, 100vw"
          src={Background}
          alt="background"
          width="100%"
          id="bg-Image"
        />
      </div>
    );
  }
}
