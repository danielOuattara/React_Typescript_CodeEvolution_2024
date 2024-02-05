import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // type assertion
  // const [user, setUser] = useState<AuthUser | null>(null);

  /* 
  if you are sure that user values will be given just 
  after component mounted, then tell TypeScript that 
  empty object {} is asserted to be AuthUser 
  */

  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogout = () => setUser({ name: "", email: "" });
  const handleLogin = () => {
    setUser({
      name: "Daniel",
      email: "daniel@mail.com",
    });
  };

  return (
    <div>
      <h2> User name is {user.name}</h2>
      <h2> User email is {user.email} </h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
