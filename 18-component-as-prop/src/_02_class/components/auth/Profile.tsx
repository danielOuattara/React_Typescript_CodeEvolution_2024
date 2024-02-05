import { Component } from "react";

export type TypeProfileProps = {
  name: string;
};

export default class Profile extends Component<TypeProfileProps> {
  render() {
    return <div> Private Profile: user {this.props.name}</div>;
  }
}
