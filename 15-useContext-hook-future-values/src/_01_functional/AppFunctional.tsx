import "./../App.css";
import { Box, Box2 } from "./components/Boxes";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserV1 } from "./context/User_V1";
import { UserContextProviderV1 } from "./context/UserContextV1";

import { UserV2 } from "./context/User_V2";
import { UserContextProviderV2 } from "./context/UserContextV2";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      {/* <ThemeContextProvider>
        <Box />
        <br />
        <Box2 />
      </ThemeContextProvider> */}
      <UserContextProviderV1>
        <UserV1 />
        <br />
      </UserContextProviderV1>

      <UserContextProviderV2>
        <UserV2 />
        <br />
      </UserContextProviderV2>
    </div>
  );
}

export default App;
