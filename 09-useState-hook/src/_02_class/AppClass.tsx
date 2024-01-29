import { Component } from "react";
import { LoggedInClass } from "./components/state/LoggedInClass";
import "./../App.css";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <LoggedInClass />
      </div>
    );
  }
}
