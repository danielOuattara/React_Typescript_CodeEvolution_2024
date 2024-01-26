import React, { Component } from "react";

type PersonProps = {
  person: {
    firstName: string;
    lastName: string;
  };
  hobbies: string[];
};

export default class PersonClass extends Component<PersonProps> {
  render() {
    const [one, two, three] = this.props.hobbies;
    return (
      <div>
        <h2>
          {this.props.person.firstName} {this.props.person.lastName}
        </h2>
        <br />
        <ul>
          {this.props.hobbies.map((hobby) => (
            <li key={hobby}> {hobby} </li>
          ))}
        </ul>

        <ol type="I">
          <li>{one}</li>
          <li>{two}</li>
          <li>{three}</li>
        </ol>
      </div>
    );
  }
}
