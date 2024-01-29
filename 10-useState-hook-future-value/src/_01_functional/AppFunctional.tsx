import "./../App.css";
import { LoggedIn, LoggedIn2 } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <LoggedIn />
      <LoggedIn2 />
      <br />
      <User />
    </div>
  );
}

export default App;
