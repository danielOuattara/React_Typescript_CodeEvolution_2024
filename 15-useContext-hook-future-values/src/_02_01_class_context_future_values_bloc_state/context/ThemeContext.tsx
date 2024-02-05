import React, { Component, createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export class ThemeContextProvider extends Component<ThemeContextProviderProps> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
