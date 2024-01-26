import { Component } from "react";
import { GreetClass } from "./components/GreetClass";
import PersonClass from "./components/PersonClass";
import { HobbiesListClass } from "./components/HobbiesListClass";
import PersonalitiesListClass from "./components/PersonalitiesListClass";
import "./../App.css";

export default class AppClass extends Component {
  state = {
    person: {
      // obj to be passed as prop.
      firstName: "Daniel",
      lastName: "Ouattara",
    },
    hobbies: ["swimming", "flying", "painting", "riding"],
    personalitiesList: [
      { id: 1, firstName: "Nelson", lastName: "Mandela" },
      { id: 2, firstName: "Thomas", lastName: "Sankara" },
      { id: 3, firstName: "Fidel", lastName: "Castro" },
    ],
  };

  render() {
    return (
      <div className="App">
        <h2>class component</h2>

        <GreetClass name="Julie" messageCount={10} isLoggedIn={true} />
        <br />
        <PersonClass person={this.state.person} hobbies={this.state.hobbies} />
        <HobbiesListClass hobbies={this.state.hobbies} />
        <br />
        <PersonalitiesListClass names={this.state.personalitiesList} />
      </div>
    );
  }
}
