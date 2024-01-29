import React, { Component } from "react";
import { ContainerClass } from "./components/ContainerClass";
import "./../App.css";

const outer_style = {
  border: "2px solid grey",
  padding: "2rem",
  margin: "2rem",
  color: "blue",
  fontSize: "2em",
  borderLeft: "10px solid red",
};

export default class AppClass extends Component {
  state = {
    state_style: {
      border: "2px solid grey",
      padding: "2rem",
      margin: "2rem",
      color: "blue",
      fontSize: "2em",
      borderLeft: "10px solid red",
    },
  };

  render() {
    const render_style = {
      border: "2px solid grey",
      padding: "2rem",
      margin: "2rem",
      color: "blue",
      fontSize: "2em",
      borderLeft: "10px solid red",
    };
    return (
      <div className="App">
        <h2>Class Component</h2>
        <ContainerClass
          styles={{
            border: "5px solid green",
            padding: "2rem",
            margin: "2rem",
          }}
        />
        <ContainerClass styles={this.state.state_style} />
        <ContainerClass styles={render_style} />
        <ContainerClass styles={outer_style} />
      </div>
    );
  }
}
