import { Component } from "react";
import "./../App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";
import { User } from "./context/User";
import { UserContextProvider } from "./context/UserContext";

export default class AppClassContextAssertionsValuesSpreadState extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Class Component userContext: assertion value & spread state in values
        </h2>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
    );
  }
}
