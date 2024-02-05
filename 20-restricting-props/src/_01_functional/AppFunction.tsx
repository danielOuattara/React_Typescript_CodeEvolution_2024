import "./../App.css";
import RandomNumber from "./components/restrictions/RandomNumber";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <RandomNumber value={10} isNegative />
    </div>
  );
}
