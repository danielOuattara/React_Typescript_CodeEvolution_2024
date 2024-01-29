import { Component } from "react";

type TypeInputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class Input extends Component<TypeInputProps> {
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
