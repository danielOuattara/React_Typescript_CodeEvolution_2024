import { TypeHobbiesListProps } from "../../../../types";

export const HobbiesList = ({ hobbies }: TypeHobbiesListProps) => {
  return (
    <ul>
      {hobbies.map((hobby) => {
        return <li key={hobby}> {hobby} </li>;
      })}
    </ul>
  );
};
