type TypeButtonProps = {
  onClick?: () => void;
  handleClick?: () => void;
  handleClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleClickEventId?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => void;
};

export default function ButtonComponent(props: TypeButtonProps) {
  return (
    <>
      {props.onClick && <button onClick={props.onClick}>Hello React</button>}

      <br />

      {props.handleClick && (
        <button onClick={props.handleClick}> hello TypeScript</button>
      )}

      <br />

      {props.handleClickEvent && (
        <button onClick={props.handleClickEvent}> Click Event</button>
      )}

      <br />

      {props.handleClickEventId && (
        <button onClick={(event) => props.handleClickEventId!(event, 1)}>
          Click Event + Id
        </button>
      )}

      <br />
    </>
  );
}
