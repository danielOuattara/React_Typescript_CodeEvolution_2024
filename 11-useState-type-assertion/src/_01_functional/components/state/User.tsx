import { useState } from "react";

type TypeAuthUser = {
  name: string;
  email: string;
};

export function User() {
  /* 
  Type assertion :

  if you are sure that user values will be given just 
  after component mounted, then tell TypeScript that 
  empty object {} is asserted to be TypeAuthUser 
  
  In this case we do not need to use ? optional operator
  */

  // const [user, setUser] = useState<TypeAuthUser | null>(null);
  const [user, setUser] = useState<TypeAuthUser>({} as TypeAuthUser);

  const handleLogin = () => {
    setUser({
      name: "Daniel",
      email: "daniel@mail.com",
    });
  };
  const handleLogout = () => setUser({ name: "", email: "" });

  return (
    <div>
      <p>user</p>
      <h3> User name: {user?.name}</h3>
      <h3> User email: {user?.email} </h3>

      {user?.name && <h3> User name: {user?.name}</h3>}
      {user?.email && <h3> User email: {user?.email}</h3>}

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// export default LoggedIn;
