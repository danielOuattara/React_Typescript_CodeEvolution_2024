import "./../App.css";
import { List } from "./components/generics/List";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <List
        items={["Daniel", "Julie", "Gaïa", "Amaya"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />

      <List
        items={[
          { id: 1, fName: "Daniel", lName: "Ouattara" },
          { id: 2, fName: "John", lName: "Doe" },
          { id: 3, fName: "Janna", lName: "Doe" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}
