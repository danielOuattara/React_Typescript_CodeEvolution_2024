import { Component } from "react";
//-------------------------------------------------------

type HobbiesListProps = {
  hobbies: string[];
};

export class HobbiesListClass extends Component<HobbiesListProps> {
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

interface HobbiesListInterFace {
  hobbies: string[];
}

export class HobbiesListClass2 extends Component<HobbiesListInterFace> {
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
