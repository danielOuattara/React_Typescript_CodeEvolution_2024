import { Component } from "react";
import { Login } from "./Login";
import { TypeProfileProps } from "./Profile";

type TypePrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<TypeProfileProps>; // <-- ComponentType for type of Component in React + <TypeOfComponent>
};

export default class Private extends Component<TypePrivateProps> {
  render() {
    // below destructuring is interesting but not necessary
    const { component: Component } = this.props;
    if (this.props.isLoggedIn) {
      // return <this.props.component name="Daniel" />; // OK
      return <Component name="Daniel" />;
    } else {
      return <Login />;
    }
  }
}
