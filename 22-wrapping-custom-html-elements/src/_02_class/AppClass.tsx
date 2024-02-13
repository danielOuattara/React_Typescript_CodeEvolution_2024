import { Component } from "react";
import { CustomButton, CustomButton2 } from "./components/html/Button";
import CustomInput from "./components/html/Input";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <CustomButton variant="primary" onClick={() => console.log("Clicked!")}>
          Primary Custom Button 1
        </CustomButton>
        <br />
        <br />

        <CustomButton variant="primary" onClick={() => console.log("Clicked!")}>
          <h2>Primary Custom Button 1</h2>
        </CustomButton>
        <br />
        <br />

        <CustomButton2
          variant="primary"
          onClick={() => console.log("Clicked!")}
        >
          Primary Custom Button2
        </CustomButton2>

        <br />

        <label htmlFor="name">
          Enter a name:
          <CustomInput
            type="text"
            id="name"
            name="name"
            onChange={(e) => console.log(e.target.value)}
          />
        </label>
      </div>
    );
  }
}
