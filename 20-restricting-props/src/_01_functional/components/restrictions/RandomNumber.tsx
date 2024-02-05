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

export default function RandomNumber({
  value,
  isNegative,
  isPositive,
  isZero,
}: TypeRandomNumberProps) {
  return (
    <div>
      {value} - {isPositive && "Positive"} - {isNegative && "Negative"} -{" "}
      {isZero && "Zero"}
    </div>
  );
}
