import { Component } from "react";
import CustomPropsComponentClass from "./components/html/CustomPropsComponentClass";
import { GreetClass } from "./components/GreetClass";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <GreetClass name="Daniel" messageCount={10} isLoggedIn={true} />
        <br />
        <CustomPropsComponentClass
          name="Daniel"
          messageCount={10}
          isLoggedIn={true}
        />
      </div>
    );
  }
}
