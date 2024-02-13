import React, { Component } from "react";

type TypeInputProps = React.ComponentProps<"input">;

export default class CustomInput extends Component<TypeInputProps> {
  render() {
    return <input {...this.props} />;
  }
}
