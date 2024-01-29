import "./../App.css";
import { Container } from "./components/Container";

const style_container = {
  border: "2px solid grey",
  padding: "2rem",
  margin: "2rem",
  color: "blue",
  fontSize: "2em",
  borderLeft: "10px solid red",
};

function AppFunctional() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <Container
        styles={{ border: "5px solid green", padding: "2rem", margin: "2rem" }}
      />
      <Container styles={style_container} />
    </div>
  );
}

export default AppFunctional;
