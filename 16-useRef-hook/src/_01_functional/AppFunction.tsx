import "./../App.css";
import DomRef from "./components/DomRef";
import MutableRef from "./components/MutableRef";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <DomRef />
      <br />
      <br />
      <MutableRef />
    </div>
  );
}
