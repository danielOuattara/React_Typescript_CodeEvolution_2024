import "./../App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { HobbiesList } from "./components/HobbiesList";
import { PersonalitiesList } from "./components/PersonalitiesList";

export default function App() {
  // obj to be passed as prop.
  const person = {
    firstName: "Daniel",
    lastName: "Ouattara",
  };

  const hobbies = ["swimming", "flying", "painting", "riding"];

  const personalitiesList = [
    { id: 1, firstName: "Nelson", lastName: "Mandela" },
    { id: 2, firstName: "Thomas", lastName: "Sankara" },
    { id: 3, firstName: "Fidel", lastName: "Castro" },
  ];

  return (
    <div className="App">
      <h2>functional component</h2>

      <Greet name="Daniel" messageCount={10} /* isLoggedIn={false} */ />
      <br />
      <Person person={person} hobbies={hobbies} />
      <br />
      <HobbiesList hobbies={hobbies} />
      <br />
      <PersonalitiesList personalities={personalitiesList} />
    </div>
  );
}
