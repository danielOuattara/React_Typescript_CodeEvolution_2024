/**
 *
 *  Position prop cab be one of :
 *  "left-center" | " left-top" | "left-bottom" |
 *  "center" | "center-top" | "center-bottom" |
 *  "right-center" | right-top | right-bottom
 *
 *  */

import { Component } from "react";

type TypeHorizontalPosition = "left" | "center" | "right";
type TypeVerticalPosition = "top" | "center" | "bottom";
type TypeToastProps = {
  position:
    | Exclude<
        `${TypeHorizontalPosition}-${TypeVerticalPosition}`,
        "center-center"
      >
    | "center";
};

export class Toast extends Component<TypeToastProps> {
  render() {
    return <div>Toast Notification position - {this.props.position}</div>;
  }
}
