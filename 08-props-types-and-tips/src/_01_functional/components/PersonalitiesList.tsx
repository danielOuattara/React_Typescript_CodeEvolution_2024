import { PersonalitiesListProps } from "../../../../types";

export const PersonalitiesList = ({ names }: PersonalitiesListProps) => {
  return (
    <div>
      {names.map((person) => {
        return (
          <h2 key={person.id}>
            {person.firstName} {person.lastName}
          </h2>
        );
      })}
    </div>
  );
};
