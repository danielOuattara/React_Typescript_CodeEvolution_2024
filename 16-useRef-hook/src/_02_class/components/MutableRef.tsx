// import { Component, createRef } from "react";

// export default class MutableRef extends Component {
//   state = {
//     timer: 0,
//   };

//   interValRef = createRef<number | null>();

//   stopTimer = () => {
//     if (this.interValRef.current) {
//       window.clearInterval(this.interValRef.current);
//     }
//   };

//   // componentDidMount(): void {
//   //   console.log(this.interValRef);
//   //   this.interValRef.current = setInterval(() => {
//   //     this.setState({ timer: this.state.timer + 1 });
//   //   }, 1000);
//   // }

//   render() {
//     this.stopTimer();
//     return (
//       <>
//         HookTimer - {this.state.timer}
//         {/* <button onClick={() => continueTimer()}>Continue</button> */}
//         <button onClick={() => this.stopTimer()}>Stop Timer</button>
//       </>
//     );
//   }
// }

// -----------------------------------------------------------------------------

import React, { Component, RefObject } from "react";

interface State {
  timer: number;
}

export default class MutableRef extends Component<{}, State> {
  interValRef: { current: number | null } = { current: null };

  state: State = {
    timer: 0,
  };

  componentDidMount(): void {
    this.interValRef.current = window.setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  stopTimer = () => {
    if (this.interValRef.current !== null) {
      clearInterval(this.interValRef.current);
    }
  };

  componentWillUnmount(): void {
    this.stopTimer();
  }

  render() {
    return (
      <>
        HookTimer - {this.state.timer}
        <button onClick={this.stopTimer}>Stop Timer</button>
      </>
    );
  }
}
