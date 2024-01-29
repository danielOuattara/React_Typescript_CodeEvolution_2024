import { Component } from "react";
import { TypePersonalitiesListProps } from "../../../../types";

export default class PersonalitiesListClass extends Component<TypePersonalitiesListProps> {
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
