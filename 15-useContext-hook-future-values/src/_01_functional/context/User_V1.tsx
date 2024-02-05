/* VERSION 1 : userContext check by if, line 10 & line 19 */
import { useContext } from "react";
import { UserContextV1 } from "./UserContextV1";
//----------------------------------------------------------

export function UserV1() {
  const userContext = useContext(UserContextV1);

  const handleLogin = () => {
    // VERSION 1
    if (userContext) {
      userContext.setUser({
        name: "daniel",
        email: "daniel@email.com",
      });
    }
  };

  const handleLogout = () => {
    // VERSION 1
    if (userContext) {
      userContext?.setUser(null);
    }
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is :{userContext?.user?.name} </div>
      <div>User email is :{userContext?.user?.email} </div>
    </>
  );
}
