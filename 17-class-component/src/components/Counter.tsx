import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        {this.props.message}
        <br />
        <button onClick={this.handleClick}>Increment</button> :{" "}
        {this.state.count}
      </>
    );
  }
}
