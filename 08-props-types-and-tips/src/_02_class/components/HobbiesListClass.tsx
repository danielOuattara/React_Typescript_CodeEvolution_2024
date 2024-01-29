import { Component } from "react";
import { TypeHobbiesListProps } from "../../../../types";
import { IHobbiesList } from "../../../../interfaces";
//-------------------------------------------------------

export class HobbiesListClass extends Component<TypeHobbiesListProps> {
  render() {
    return (
      <ul>
        <h2>Hobbies list</h2>
        {this.props.hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    );
  }
}

//-------------------------------------------------------

export class HobbiesListClass2 extends Component<IHobbiesList> {
  render() {
    return (
      <ul>
        <h2>Hobbies list</h2>
        {this.props.hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    );
  }
}
