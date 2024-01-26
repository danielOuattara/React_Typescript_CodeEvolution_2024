import React, { Component } from "react";

type TypeHeadingProps = {
  children: string | JSX.Element | React.ReactNode;
};

interface InterfaceHeadingProps {
  children: string | JSX.Element | React.ReactNode;
}

export class HeadingClass extends Component<TypeHeadingProps> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}

export class HeadingClass2 extends Component<InterfaceHeadingProps> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}
