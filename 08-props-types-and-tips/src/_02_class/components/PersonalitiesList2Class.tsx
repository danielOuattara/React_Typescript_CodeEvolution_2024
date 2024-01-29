import { Component } from "react";
import { TypePersonalitiesListProps } from "../../../../types";

export default class PersonalitiesList2Class extends Component<TypePersonalitiesListProps> {
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          const { id, firstName, lastName } = name;
          return (
            <h2 key={id}>
              {firstName} {lastName}
            </h2>
          );
        })}
      </div>
    );
  }
}
