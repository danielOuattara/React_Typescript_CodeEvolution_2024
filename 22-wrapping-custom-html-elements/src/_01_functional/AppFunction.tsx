import "./../App.css";
import { CustomButton, CustomButton2 } from "./components/html/Button";
import CustomInput from "./components/html/Input";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <CustomButton
        variant="primary"
        onClick={() => console.log("Primary Button Clicked")}
      >
        Primary Custom Button1
      </CustomButton>
      <br /> <br />
      <CustomButton
        variant="primary"
        onClick={() => console.log("Primary Button Clicked")}
      >
        <h2>Primary Custom Button1</h2>
      </CustomButton>
      <br />
      <br />
      <CustomButton2
        variant="primary"
        onClick={() => console.log("Primary Button Clicked")}
      >
        Primary Custom Button2
      </CustomButton2>
      <br /> <br />
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
