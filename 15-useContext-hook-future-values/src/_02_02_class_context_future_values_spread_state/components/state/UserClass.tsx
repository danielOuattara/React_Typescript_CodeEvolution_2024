import { Component } from "react";

// interface AuthUserInterface {
//   name: string;
//   email: string;
// }

//------------------------ OR

type AuthUserType = {
  name: string;
  email: string;
};

export class UserClass extends Component {
  state = {
    user: {} as AuthUserType,
  };

  handleLogin = () => {
    this.setState((prevState: {}) => ({
      ...prevState,
      user: {
        name: "Daniel",
        email: "danil@mail.com",
      },
    }));
  };
  handleLogout = () =>
    this.setState(() => ({
      user: {
        name: null,
        email: null,
      },
    }));

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello</p>
        <h2> User name: {this.state.user?.name}</h2>
        <h2> User email: {this.state.user?.email} </h2>

        {this.state.user?.name && <h2> User name: {this.state.user?.name}</h2>}

        {this.state.user?.email && (
          <h2> User email: {this.state.user?.email}</h2>
        )}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
