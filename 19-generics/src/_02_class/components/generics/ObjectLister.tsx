import { Component } from "react";

type PropsType = {
  item: Object;
};

export default class ObjectLister extends Component<PropsType> {
  render() {
    return (
      <ul>
        {Object.entries(this.props.item).map((subArray) => {
          const [key, value] = subArray;
          return (
            <li
              style={{
                textAlign: "center",
                margin: "10px 0 10px 10px",
              }}
              key={key}
            >
              {" "}
              <b>{key}</b> : {value}
            </li>
          );
        })}
      </ul>
    );
  }
}
