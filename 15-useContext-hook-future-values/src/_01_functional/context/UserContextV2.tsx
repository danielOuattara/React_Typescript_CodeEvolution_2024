//--------------------------------------------------------------------------------------
/* VERSION 2 : to avoid userContext check by if, line 10 & line 19 in User.tsx 
                we can use type assertion */

/* Using 2 types assertions */

import { createContext, useState } from "react";

export type TypeAuthUser = {
  name: string;
  email: string;
};

export type TypeUserContext = {
  user: TypeAuthUser;
  setUser: React.Dispatch<React.SetStateAction<TypeAuthUser>>;
};

export const UserContextV2 = createContext({} as TypeUserContext); // <-- VERSION 2

type TypeUserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProviderV2 = ({
  children,
}: TypeUserContextProviderProps) => {
  const [user, setUser] = useState<TypeAuthUser>({} as TypeAuthUser); // <-- VERSION 2

  return (
    <UserContextV2.Provider value={{ user, setUser }}>
      {children}
    </UserContextV2.Provider>
  );
};
