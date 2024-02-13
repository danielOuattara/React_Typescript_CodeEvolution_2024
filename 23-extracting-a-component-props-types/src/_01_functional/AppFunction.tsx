import "./../App.css";
import { Greet } from "./components/Greet";
import CustomPropsComponent from "./components/html/CustomPropsComponent";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <Greet name="Daniel" messageCount={10} isLoggedIn={true} />
      <CustomPropsComponent name="Daniel" messageCount={10} isLoggedIn={true} />
    </div>
  );
}
