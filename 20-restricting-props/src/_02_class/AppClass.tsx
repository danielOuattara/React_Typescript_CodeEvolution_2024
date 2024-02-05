import { Component } from "react";
import "./../App.css";
import RandomNumber from "./components/restrictions/RandomNumber";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <RandomNumber value={10} isPositive />
      </div>
    );
  }
}
