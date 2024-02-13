/**
 *
 *  Position prop can be one of :
 *  "left-center" | " left-top" | "left-bottom" |
 *  "center" | "center-top" | "center-bottom" |
 *  "right-center" | right-top | right-bottom
 *
 *  */

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

export function Toast({ position }: TypeToastProps) {
  return <div>Toast Notification position - {position}</div>;
}
