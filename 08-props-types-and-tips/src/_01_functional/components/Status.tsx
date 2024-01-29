import { TypeStatusProps } from "../../../../types";

export const Status = (props: TypeStatusProps) => {
  const status = props.status;
  let message;

  if (status === "loading") {
    message = "...loading";
  } else if (status === "success") {
    message = "success";
  } else {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
