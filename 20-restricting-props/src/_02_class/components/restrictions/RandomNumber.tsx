import { Component } from "react";

type TypeRandomNumber = {
  value: number;
};

type TypePositive = TypeRandomNumber & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type TypeNegative = TypeRandomNumber & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};
type TypeZero = TypeRandomNumber & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type TypeRandomNumberProps = TypePositive | TypeNegative | TypeZero;

export default class RandomNumber extends Component<TypeRandomNumberProps> {
  render() {
    const { value, isPositive, isNegative, isZero } = this.props;
    return (
      <div>
        {value} - {isPositive && "Positive"} - {isNegative && "Negative"} -{" "}
        {isZero && "Zero"}
      </div>
    );
  }
}
