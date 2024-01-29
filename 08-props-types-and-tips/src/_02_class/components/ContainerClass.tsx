import { Component } from "react";
import { TypeCSSProps } from "../../../../types";

export class ContainerClass extends Component<TypeCSSProps> {
  render() {
    return <div style={this.props.styles}>Text content goes here</div>;
  }
}
