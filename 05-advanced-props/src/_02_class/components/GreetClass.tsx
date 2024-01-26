import { Component } from "react";

/* 
type: for applications
interface: for libraries
 */

type GreetProps = {
  name: string;
  messageCount?: number; // the '?' --> optional props
  isLoggedIn: false;
};

export class GreetClass extends Component<GreetProps> {
  render() {
    return (
      <div>
        <h2>Welcome to React TypeScript, {this.props.name}</h2>
        <h2> {this.props.messageCount || 0} messages pending</h2>
        {this.props.isLoggedIn ? (
          <p>User is logged in</p>
        ) : (
          <p>User is disconnected</p>
        )}
      </div>
    );
  }
}
