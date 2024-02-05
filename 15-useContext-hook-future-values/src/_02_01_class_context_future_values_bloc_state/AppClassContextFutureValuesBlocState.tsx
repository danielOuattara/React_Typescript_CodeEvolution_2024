import { Component } from "react";
import "./../App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";
import { User } from "./context/User";
import { UserContextProvider } from "./context/UserContext";
export default class AppClassContextFutureBlocState extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Class Component userContext: future value & bloc state in values{" "}
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
