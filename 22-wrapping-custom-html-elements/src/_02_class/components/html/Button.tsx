import React, { Component } from "react";
//----------------------------------------
// Here children can be any text or html element

type TypeButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export class CustomButton extends Component<TypeButtonProps> {
  render() {
    const { variant, children, ...rest } = this.props;
    return (
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    );
  }
}

//----------------------------------------
// Here children can be any text or html element

type TypeButtonProps2 = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export class CustomButton2 extends Component<TypeButtonProps2> {
  render() {
    const { variant, children, ...rest } = this.props;
    return (
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    );
  }
}
