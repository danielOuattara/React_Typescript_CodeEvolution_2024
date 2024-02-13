import { Greet } from "../Greet";

export default function CustomPropsComponent(
  props: React.ComponentProps<typeof Greet>,
) {
  return (
    <div>
      <h3>Welcome to React TypeScript, {props.name}</h3>
      <h3> {props.messageCount} messages pending</h3>
      {props.isLoggedIn ? (
        <p>User is logged in</p>
      ) : (
        <p>User is disconnected</p>
      )}
    </div>
  );
}
