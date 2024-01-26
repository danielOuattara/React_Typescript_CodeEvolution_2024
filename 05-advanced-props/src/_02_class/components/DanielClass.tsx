import React, { Component } from "react";

type TypeDanielProps = {
  children: React.ReactNode; // <-- for a React component
};

export class DanielClass extends Component<TypeDanielProps> {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}
