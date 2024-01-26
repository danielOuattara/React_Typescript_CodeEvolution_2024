type TypeGreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean;
};

//------------------------------------------------------------------
// export const Greet = (props: TypeGreetProps) => {
//   return (
//     <div>
//       <h2>Welcome to React TypeScript, {props.name}</h2>
//       <h2> {props.messageCount} messages pending</h2>
//       {props.isLoggedIn ? (
//         <p>User is logged in</p>
//       ) : (
//         <p>User is disconnected</p>
//       )}
//     </div>
//   );
// };

//-------------------------------------------------------------------
// props destructured
export const Greet = ({ name, messageCount, isLoggedIn }: TypeGreetProps) => {
  return (
    <div>
      <h3>Welcome to React TypeScript, {name}</h3>
      <p> {messageCount} messages pending</p>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
