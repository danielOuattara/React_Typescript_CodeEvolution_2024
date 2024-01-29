import { TypeButtonProps } from "../../../../types";

export const Button = (props: TypeButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick}> Click</button>
      <button onClick={props.handleClickEvent}> Click Event</button>
      {/* <button onClick={(event) => props.handleClickEventId(event, 1)}> Click Event + Id</button> */}
      <br />
    </>
  );
};
