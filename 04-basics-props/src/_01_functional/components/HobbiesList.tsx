type TypeHobbiesListProps = {
  hobbies: string[];
};

export const HobbiesList = ({ hobbies }: TypeHobbiesListProps) => {
  return (
    <ul>
      <h2>Hobbies list</h2>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </ul>
  );
};
