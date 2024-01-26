import "./../App.css";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Daniel } from "./components/Daniel";
import { Greet } from "./components/Greet";

export default function App() {
  return (
    <div className="App">
      <h2>functional component</h2>
      <Status status="loading" />
      <Status status="success" />
      <Status status="error" />

      <br />

      <Heading>This is a pure text as children</Heading>

      <Heading>
        <p>This is a paragraph as children</p>
      </Heading>

      <br />

      <Daniel>
        <Heading> The next Generation of Web Developer</Heading>
      </Daniel>
      <br />

      <Greet name="John Doe" isLoggedIn={false} />
    </div>
  );
}
