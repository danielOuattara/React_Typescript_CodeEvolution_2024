import { Component } from "react";
import { TypeStatusProps } from "../../../../types";

// export const Status = (props: TypeStatusProps) => {
//   let message;

//   if (props.status === "loading") {
//     message = "...loading";
//   } else if (props.status === "success") {
//     message = "Success";
//   } else {
//     message = "Error fetching data";
//   }
//   return (
//     <div>
//       <h2>Status: {message}</h2>
//     </div>
//   );
// };

//-----------------------------------------

export class StatusClass extends Component<TypeStatusProps> {
  render() {
    return (
      <div>
        <h2>Status: {this.props.status}</h2>
      </div>
    );
  }
}
