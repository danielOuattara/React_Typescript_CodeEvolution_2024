//* VERSION 1 : future values for context & bloc states */
//
import { Component, createContext } from "react";

export type TypeAuthUserProps = {
  name: string | null;
  email: string | null;
};

export type TypeUserContextType = {
  state: TypeAuthUserProps;
  handleLogin: () => void;
  handleLogout: () => void;
};

type TypeUserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<TypeUserContextType | null>(null); // <-- VERSION 1

export class UserContextProvider extends Component<TypeUserContextProviderProps> {
  state = {
    name: null,
    email: null,
  };

  handleLogin = () => {
    this.setState((prevState: TypeAuthUserProps) => ({
      ...prevState,
      name: "Daniel",
      email: "daniel@mail.com",
    }));
  };

  handleLogout = () =>
    this.setState(() => ({
      name: null,
      email: null,
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
