import "./../App.css";
import { Component } from "react";
import { GreetClass, GreetClass2 } from "./components/GreetClass";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>React TypeScript Class component</h2>
        <GreetClass name="John Doe" number={7} />
        <GreetClass name="Jana Doe" />
        <br />
        <GreetClass2 name="Jana Doe" />
        <GreetClass2 number={13} />
      </div>
    );
  }
}
