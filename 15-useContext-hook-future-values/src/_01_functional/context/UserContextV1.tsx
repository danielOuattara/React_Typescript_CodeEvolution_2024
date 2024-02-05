/* VERSION 1 : userContext check by if, line 10 & line 19 in User.tsx */

import { createContext, useState } from "react";

export type TypeAuthUser = {
  name: string;
  email: string;
};

export type TypeUserContext = {
  user: TypeAuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<TypeAuthUser | null>>;
};

export const UserContextV1 = createContext<TypeUserContext | null>(null);

type TypeUserContextProvideProps = {
  children: React.ReactNode;
};

export function UserContextProviderV1({
  children,
}: TypeUserContextProvideProps) {
  const [user, setUser] = useState<TypeAuthUser | null>(null);

  return (
    <UserContextV1.Provider value={{ user, setUser }}>
      {children}
    </UserContextV1.Provider>
  );
}
