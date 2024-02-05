// /* VERSION 1 : userContext check by if, line 10 & line 19 */
//

// import { Component } from "react";
// import { UserContext } from "./UserContext";
// //-------------------------------------------

// // using Consumer
// export class User extends Component {
//   render() {
//     return (
//       <UserContext.Consumer>
//         {(context) => (
//           <>
//             <button onClick={context?.handleLogin}>Login</button>
//             <button onClick={context?.handleLogout}>Logout</button>
//             <div>User name is :{context?.name} </div>
//             <div>User email is :{context?.email} </div>
//           </>
//         )}
//       </UserContext.Consumer>
//     );
//   }
// }

//--------------
//

import { Component } from "react";
import { UserContext } from "./UserContext";
// using static contextType
export class User extends Component {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;
  render() {
    return (
      <>
        <button onClick={this.context?.handleLogin}>Login</button>
        <button onClick={this.context?.handleLogout}>Logout</button>
        <div>User name is :{this.context?.name} </div>
        <div>User email is :{this.context?.email} </div>
      </>
    );
  }
}
