import "./../App.css";
import LoggedIn from "./components/state/LoggedIn";
import { LoggedIn2 } from "./components/state/LoggedIn";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <LoggedIn />
      <LoggedIn2 />
    </div>
  );
}

export default App;
