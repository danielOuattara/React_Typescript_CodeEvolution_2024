import { Login } from "./Login";
import { TypeProfileProps } from "./Profile";

type TypePrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<TypeProfileProps>; // <-- ComponentType for type of Component in React + <TypeOfComponent>
};

export default function Private({
  isLoggedIn,
  component: Component,
}: TypePrivateProps) {
  if (isLoggedIn) {
    return <Component name="Daniel" />;
  } else {
    return <Login />;
  }
}
