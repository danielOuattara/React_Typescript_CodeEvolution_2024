import { Component } from "react";
import { TypeHeadingProps } from "../../../../types";
import { IHeadingInterface } from "../../../../interfaces";

export class HeadingClass extends Component<TypeHeadingProps> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}

export class HeadingClass2 extends Component<IHeadingInterface> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}
