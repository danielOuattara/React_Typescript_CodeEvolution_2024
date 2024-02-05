//--------------------------------------------------------------------------------------
// /* VERSION 2 : to avoid check context by if statements, Use 2 types assertions */

import { Component, createContext } from "react";

export type AuthUserProps = {
  name: string;
  email: string;
};

export type UserContextType = {
  state: AuthUserProps;
  handleLogin: () => void;
  handleLogout: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType); // <-- VERSION 1

export class UserContextProvider extends Component<
  UserContextProviderProps,
  AuthUserProps
> {
  state = {
    name: "",
    email: "",
  };

  handleLogin = () => {
    this.setState((prevState: AuthUserProps) => ({
      ...prevState,
      name: "Daniel",
      email: "daniel@mail.com",
    }));
  };

  handleLogout = () =>
    this.setState(() => ({
      name: "",
      email: "",
    }));
  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
