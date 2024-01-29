import { Component } from "react";
import { TypeInputProps } from "../../../../types";

export class InputClass extends Component<TypeInputProps> {
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleInputChange}
        />

        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}
