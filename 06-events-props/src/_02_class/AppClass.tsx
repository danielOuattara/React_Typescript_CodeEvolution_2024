import { Component } from "react";
import "./../App.css";

import ButtonComponent from "./components/ButtonComponent";
import Input from "./components/Input";

export default class AppClass extends Component {
  //
  handleClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Event", event);
  };

  handleClickEventId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    console.log(event);
    console.log(id);
  };

  render() {
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
        <h2>4</h2> <ButtonComponent handleClickEvent={this.handleClickEvent} />
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
          handleClickEventId={(event, id) => {
            console.log("btn clicked! ", event, id);
          }}
        />
        <ButtonComponent handleClickEventId={this.handleClickEventId} />
        <hr />
        {/* ----------------------------------------------------- */}
        <h2>7</h2>{" "}
        <Input value="" handleChange={(event) => console.log(event)} />
        {/* ----------------------------------------------------- */}
      </div>
    );
  }
}
