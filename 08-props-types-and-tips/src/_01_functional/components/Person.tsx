import { TypePersonProps } from "../../../../types";

export const Person = ({
  person: { firstName, lastName },
  hobbies,
}: TypePersonProps) => {
  return (
    <div>
      <h2>
        {" "}
        {firstName} {lastName}
      </h2>
      <br />
      <ul>
        {hobbies.map((hobby) => {
          return <li key={hobby}> {hobby} </li>;
        })}
      </ul>
    </div>
  );
};
