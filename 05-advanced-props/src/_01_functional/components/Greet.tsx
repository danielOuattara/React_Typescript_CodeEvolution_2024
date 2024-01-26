/* 
type: for applications
interface: for libraries
 */

type TypeGreetProps = {
  name: string;
  messageCount?: number; // the '?' --> optional props
  isLoggedIn: false;
};

export const Greet = (props: TypeGreetProps) => {
  const { name, messageCount = 0, isLoggedIn } = props;
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      {messageCount && <h2> {messageCount} messages pending</h2>}
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
