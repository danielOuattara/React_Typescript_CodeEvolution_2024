import { Component } from "react";

export class LoggedInClass extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () =>
    this.setState((prevState) => ({ ...prevState, isLoggedIn: true }));

  handleLogout = () =>
    this.setState((prevState) => ({ ...prevState, isLoggedIn: false }));

  render() {
    return (
      <div>
        <h2> User is {this.state.isLoggedIn ? "logged in" : "logged out"}</h2>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

//------------------------------------------------------- OR

type TypeProps = {};

type TypeState = {
  isLoggedIn: boolean;
};

export class LoggedInClass2 extends Component<TypeProps, TypeState, {}> {
  constructor(props: TypeProps | Readonly<TypeProps>) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () =>
    this.setState((prevState) => ({ ...prevState, isLoggedIn: true }));

  handleLogout = () =>
    this.setState((prevState) => ({ ...prevState, isLoggedIn: false }));

  render() {
    return (
      <div>
        <h2> User is {this.state.isLoggedIn ? "logged in" : "logged out"}</h2>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
