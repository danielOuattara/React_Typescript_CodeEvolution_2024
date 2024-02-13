import { Component } from "react";
import "./../App.css";
import { Toast } from "./components/templateLiterals/Toast";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Functional Component</h2>
        <Toast position="center" />
      </div>
    );
  }
}
