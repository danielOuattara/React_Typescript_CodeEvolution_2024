/* using static contextType : OK
-------------------------------*/

import { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export class Box extends Component {
  static contextType = ThemeContext;
  context!: React.ContextType<typeof ThemeContext>;

  render() {
    // const { primary, secondary } = this.context;
    return (
      <>
        <h3>using static contextType </h3>
        <div
          style={{
            backgroundColor: this.context.primary.main,
            color: this.context.primary.text,
          }}
        >
          Theme Context primary
        </div>
        <div
          style={{
            backgroundColor: this.context.secondary.main,
            color: this.context.secondary.text,
          }}
        >
          Theme Context Secondary
        </div>
      </>
    );
  }
}

//-------------------------------------------------------------------

/* using context API ThemeContext.Consumer : OK */

export class Box2 extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <>
            <h3>ThemeContext.Consumer</h3>
            <div
              style={{
                backgroundColor: context.primary.main,
                color: context.primary.text,
              }}
            >
              Theme Context primary
            </div>
            <div
              style={{
                backgroundColor: context.secondary.main,
                color: context.secondary.text,
              }}
            >
              Theme Context Secondary
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}
