/* using static contextType
-------------------------------*/

// import React, { Component, ContextType } from "react";
// import { ThemeContext } from "./ThemeContext";
// import { ThemeType } from "./theme";

// export class Box extends Component<ContextType> {
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context);
//     console.log(this.context);
//     // const { primary, secondary } = this.context!;
//     // TODO : Comment out above line and mouse over to see the Error
//     return (
//       <div
//         style={{
//           backgroundColor: primary.main,
//           color: primary.text,
//         }}
//       >
//         Theme Context
//       </div>
//     );
//   }
// }

//------------------------------------------------------------------------------

/* using ThemeContext.Consumer : OK
-------------------------------*/

import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export class Box extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <div
            style={{
              backgroundColor: context.primary.main,
              color: context.primary.text,
            }}
          >
            Theme Context
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
