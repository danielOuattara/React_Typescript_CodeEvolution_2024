import { Component } from "react";

type TypeButtonProps = {
  onClick?: () => void;
  handleClick?: () => void;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickEventId?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};

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
