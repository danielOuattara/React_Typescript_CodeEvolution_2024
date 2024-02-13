type TypeInputProps = React.ComponentProps<"input">;

export default function CustomInput(props: TypeInputProps) {
  return <input {...props} />;
}
