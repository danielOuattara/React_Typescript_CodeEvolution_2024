import { Component } from "react";

type TypeCSSProps = {
  styles: React.CSSProperties;
};

export class ContainerClass extends Component<TypeCSSProps> {
  render() {
    return <div style={this.props.styles}>Text content goes here</div>;
  }
}
