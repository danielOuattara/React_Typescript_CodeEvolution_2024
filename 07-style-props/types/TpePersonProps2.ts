// props extracted in an other object

export type TypeName = {
  firstName: string;
  lastName: string;
  id: number;
};

export type TypePersonProps = {
  name: TypeName;
  hobbies: string[];
};

export type TypePersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};
