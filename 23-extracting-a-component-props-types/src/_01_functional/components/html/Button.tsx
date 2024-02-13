//----------------------------------------
// Here children can be any text or html element

type TypeButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export function CustomButton({ variant, children, ...rest }: TypeButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}

//----------------------------------------
// Here children is text only

type TypeButtonProps2 = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export function CustomButton2({
  variant,
  children,
  ...rest
}: TypeButtonProps2) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
