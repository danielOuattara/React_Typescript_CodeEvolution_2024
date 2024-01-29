import { Component } from "react";
import { TypeButtonProps } from "../../../../types";

export default class ButtonComponent extends Component<TypeButtonProps> {
  render() {
    return (
      <>
        {this.props.onClick && (
          <button onClick={this.props.onClick}>Hello React</button>
        )}

        <br />

        {this.props.handleClick && (
          <button onClick={this.props.handleClick}> hello TypeScript</button>
        )}

        <br />

        {this.props.handleClickEvent && (
          <button onClick={this.props.handleClickEvent}> Click Event</button>
        )}

        <br />

        {this.props.handleClickEventId && (
          <button onClick={(event) => this.props.handleClickEventId!(event, 1)}>
            Click Event + Id
          </button>
        )}

        <br />
      </>
    );
  }
}
