type TypePersonProps = {
  person: {
    firstName: string;
    lastName: string;
  };
  hobbies: string[];
};

export const Person = ({ person, hobbies }: TypePersonProps) => {
  const [one, two, three] = hobbies;

  return (
    <div>
      <h3>
        {person.firstName} {person.lastName}
      </h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>

      <ol type="I">
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ol>
    </div>
  );
};
