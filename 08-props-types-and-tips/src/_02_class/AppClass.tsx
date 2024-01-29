import { Component } from "react";
import "./../App.css";
import { ContainerClass } from "./components/ContainerClass";
import { PersonClass } from "./components/PersonClass";
import { InputClass } from "./components/InputClass";
import PersonalitiesListClass from "./components/PersonalitiesListClass";
import PersonalitiesList2Class from "./components/PersonalitiesList2Class";

export default class AppClass extends Component {
  render() {
    const person = {
      // obj to be passed as prop.
      firstName: "Daniel",
      lastName: "Ouattara",
    };

    const hobbies = ["swimming", "flying", "painting", "riding"];

    const personalitiesList = [
      { id: 1, firstName: "Nelson", lastName: "Mandela" },
      { id: 2, firstName: "Thomas", lastName: "Sankara" },
      { id: 3, firstName: "Fidel", lastName: "Castro" },
    ];

    const styles = {
      border: "2px solid grey",
      padding: "2rem",
      margin: "2rem",
    };
    return (
      <div className="App">
        <h2>Class component</h2>
        <PersonClass person={person} hobbies={hobbies} />
        <br />
        <PersonalitiesListClass names={personalitiesList} />
        <br />
        <PersonalitiesList2Class names={personalitiesList} />
        <br />
        <InputClass value="" handleChange={(event) => console.log(event)} />
        <ContainerClass
          styles={{ border: "2px solid grey", padding: "2rem", margin: "2rem" }}
        />
        <ContainerClass styles={styles} />
      </div>
    );
  }
}
