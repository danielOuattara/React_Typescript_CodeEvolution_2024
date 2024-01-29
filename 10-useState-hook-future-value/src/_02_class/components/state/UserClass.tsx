import { Component } from "react";

interface IAuthUser {
  user: {
    name: string;
    email: string;
  };
}

interface IProps {}

//--

type TypeAuthUser = {
  user: {
    name: string;
    email: string;
  };
};

type TypeProps = {};

//-------------------------------------------------------------------

export class UserClass extends Component {
  state = {
    user: {
      name: null,
      email: null,
    },
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

//-----------------------------------------------------------

export class UserClass2 extends Component<TypeProps, TypeAuthUser | null, {}> {
  constructor(props: TypeProps | Readonly<TypeProps>) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
      },
    };
  }

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
        <h2> User name: {this.state?.user.name}</h2>
        <h2> User email: {this.state?.user.email} </h2>

        {this.state?.user.name && <h2> User name: {this.state.user.name}</h2>}

        {this.state?.user.email && (
          <h2> User email: {this.state.user.email}</h2>
        )}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

//----------------------------------------- OR

export class UserClass3 extends Component<IProps, IAuthUser | null> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
      },
    };
  }
  handleLogin = () => {
    this.setState((prevState: TypeAuthUser) => ({
      ...prevState,
      name: "Daniel",
      email: "danil@mail.com",
    }));
  };
  handleLogout = () =>
    this.setState(() => ({
      name: null,
      email: null,
    }));

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello</p>
        <h2> User name: {this.state?.user.name}</h2>
        <h2> User email: {this.state?.user.email} </h2>

        {this.state?.user.name && <h2> User name: {this.state.user.name}</h2>}

        {this.state?.user.email && (
          <h2> User email: {this.state.user.email}</h2>
        )}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
