import { Component } from "react";
import Text from "./components/polymorphic/Test";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <Text as="h3" size="lg">
          Heading h3
        </Text>

        <Text as="p" size="md">
          Paragraph
        </Text>

        <Text as="label" htmlFor="username" size="sm" color="secondary">
          Label
        </Text>

        {/* <Text
        as="input"
        id="username"
        name="username"
        size="sm"
        color="secondary"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      >
        Label
      </Text> */}

        <Text size="sm" color="secondary">
          Hello
        </Text>
      </div>
    );
  }
}
