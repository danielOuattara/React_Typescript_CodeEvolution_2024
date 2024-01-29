import "./../App.css";
import { Box, Box2 } from "./components/Boxes";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <ThemeContextProvider>
        <Box />
        <br />
        <Box2 />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
