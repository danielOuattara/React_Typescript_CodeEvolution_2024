import { Component } from "react";
import { TypeDanielProps } from "../../../../types";

export class DanielClass extends Component<TypeDanielProps> {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}
