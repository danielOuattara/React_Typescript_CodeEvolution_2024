type TypePersonalitiesListProps = {
  personalities: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

export const PersonalitiesList = ({
  personalities,
}: TypePersonalitiesListProps) => {
  return (
    <div>
      {personalities.map((name) => {
        return (
          <h2 key={name.id}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};
