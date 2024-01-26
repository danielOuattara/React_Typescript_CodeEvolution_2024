import { Component } from "react";
import { StatusClass } from "./components/StatusClass";
import { HeadingClass } from "./components/HeadingClass";
import { DanielClass } from "./components/DanielClass";
import { GreetClass } from "./components/GreetClass";
import "./../App.css";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>class component</h2>
        <StatusClass status="loading" />
        <StatusClass status="success" />
        <StatusClass status="error" />

        <br />

        <HeadingClass>This is a pure text as children</HeadingClass>

        <HeadingClass>
          <p>This is a paragraph as children</p>
        </HeadingClass>

        <br />

        <DanielClass>
          <HeadingClass> The next Generation of Web Developer</HeadingClass>
        </DanielClass>
        <br />

        <GreetClass name="John Doe" isLoggedIn={false} />
      </div>
    );
  }
}
