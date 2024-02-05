// import { Component, createRef } from "react";

// export default class DomRef extends Component {
//   inputRef = createRef<HTMLInputElement>();

//   componentDidMount(): void {
//     this.inputRef.current?.focus();
//   }

//   render() {
//     return <input type="text" ref={this.inputRef} />;
//   }
// }

//----------------------------------------------------

import { Component, createRef, RefObject } from "react";

export default class DomRef extends Component {
  inputRef: RefObject<HTMLInputElement | null> =
    createRef<HTMLInputElement | null>();

  componentDidMount(): void {
    this.inputRef.current?.focus();
  }

  render() {
    return (
      <input
        type="text"
        ref={this.inputRef as React.RefObject<HTMLInputElement>}
      />
    );
  }
}

/* 
how to write the equivalent code above without
optional parameter, like in the useRef second 
example ?
*/
