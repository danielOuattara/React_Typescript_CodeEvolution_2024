import { TypeGreetProps } from "../../../../types";

export const Greet = ({ name, messageCount, isLoggedIn }: TypeGreetProps) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h2> {messageCount} messages pending</h2>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
