//---------------------------------------------------------------------------------

/* VERSION 2 : No userContextV2 check: using type assertion strategy */

import { useContext } from "react";
import { UserContextV2 } from "../context/UserContextV2";

export const UserV2 = () => {
  const userContextV2 = useContext(UserContextV2);

  const handleLogin = () => {
    userContextV2.setUser({
      name: "daniel",
      email: "daniel@email.com",
    });
  };

  const handleLogout = () => {
    userContextV2.setUser({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is :{userContextV2.user?.name} </div>
      <div>User email is :{userContextV2.user?.email} </div>
    </>
  );
};
