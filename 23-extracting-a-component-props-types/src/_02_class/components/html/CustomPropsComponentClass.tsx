import React, { Component } from "react";
import { GreetClass } from "../GreetClass";

export default class CustomPropsComponentClass extends Component<
  React.ComponentProps<typeof GreetClass>
> {
  render() {
    return (
      <div>
        <h3>Welcome to React TypeScript, {this.props.name}</h3>
        <h3> {this.props.messageCount} messages pending</h3>
        {this.props.isLoggedIn ? (
          <p>User is logged in</p>
        ) : (
          <p>User is disconnected</p>
        )}
      </div>
    );
  }
}
