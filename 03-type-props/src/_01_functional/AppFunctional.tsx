import "./../App.css";
import { Greet, Greet2 } from "./components/Greet";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Hello React TypeScript function component</h2>
      <Greet name="Daniel" number={10} />
      <br />
      <Greet2 name="Julie" />
      <Greet2 number={11} />
      <br />
    </div>
  );
}
