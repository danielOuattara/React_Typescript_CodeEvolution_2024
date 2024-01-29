import React from "react";
import "./../App.css";
import ButtonComponent from "./components/ButtonComponent";
import Input from "./components/Input";

export default function AppFunctional() {
  const handleClickEvent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("Button Event", event);
  };

  const handleClickEventId = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    console.log(event);
    console.log(id);
  };

  return (
    <div className="App">
      {/* ----------------------------------------------------- */}
      <h2>1</h2>
      <button onClick={() => console.log("Simple Button")}>
        Simple Button
      </button>
      <br />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>2</h2>
      <ButtonComponent onClick={() => console.log("Hello React")} />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>3</h2>{" "}
      <ButtonComponent handleClick={() => console.log("Hello TypeScript")} />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>4</h2> <ButtonComponent handleClickEvent={handleClickEvent} />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>5</h2>
      <ButtonComponent
        handleClickEvent={(event) => console.log("Button Event", event)}
      />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>6</h2>
      <ButtonComponent
        handleClickEventId={(event, id = 23) => {
          console.log("btn clicked! ", event, id);
        }}
      />
      <ButtonComponent handleClickEventId={handleClickEventId} />
      <hr />
      {/* ----------------------------------------------------- */}
      <h2>7</h2> <Input value="" handleChange={(event) => console.log(event)} />
      {/* ----------------------------------------------------- */}
    </div>
  );
}
