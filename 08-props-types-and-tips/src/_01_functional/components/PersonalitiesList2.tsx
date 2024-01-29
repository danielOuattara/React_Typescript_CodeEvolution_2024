import { TypePersonalitiesListProps } from "../../../../types";

export const PersonalitiesList2 = ({ names }: TypePersonalitiesListProps) => {
  return (
    <div>
      {names.map((name) => {
        const { id, firstName, lastName } = name;
        return (
          <h2 key={id}>
            {firstName} {lastName}
          </h2>
        );
      })}
    </div>
  );
};
