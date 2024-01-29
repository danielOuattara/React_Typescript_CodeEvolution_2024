import { useState } from "react";

type TypeAuthUser = {
  name: string;
  email: string;
};

export function User() {
  const [user, setUser] = useState<TypeAuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Daniel",
      email: "daniel@mail.com",
    });
  };

  const handleLogout = () => setUser(null);

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
