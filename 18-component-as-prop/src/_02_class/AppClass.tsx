import "./../App.css";
import { Component } from "react";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <Private isLoggedIn={true} component={Profile} />
      </div>
    );
  }
}
