import "./../App.css";
import { Toast } from "./components/templateLiterals/Toast";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <Toast position="center" />
    </div>
  );
}
