import { Component } from "react";
import "./../App.css";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <p>
          Impossible to use native class component with useReducer hook. <br />
          <b>Waiting for Redux</b>
        </p>
      </div>
    );
  }
}
