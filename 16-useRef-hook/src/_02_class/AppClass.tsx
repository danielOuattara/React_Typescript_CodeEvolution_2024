import { Component } from "react";
import "./../App.css";
import DomRef from "./components/DomRef";
// import MutableRef from "./components/MutableRef";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <DomRef />
        <br />
        <br />
        {/* <MutableRef /> */}
      </div>
    );
  }
}
