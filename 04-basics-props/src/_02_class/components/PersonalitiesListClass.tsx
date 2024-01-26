import { Component } from "react";

type PersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

export default class PersonalitiesListClass extends Component<PersonalitiesListProps> {
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          return (
            <h2 key={name.id}>
              {name.firstName} {name.lastName}
            </h2>
          );
        })}
      </div>
    );
  }
}
