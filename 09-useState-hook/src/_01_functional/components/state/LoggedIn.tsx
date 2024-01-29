import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h3> User is {isLoggedIn ? "logged in" : "logged out"}</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// ------------------------------------------------------

export const LoggedIn2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3> User is {isLoggedIn ? "logged in" : "logged out"}</h3>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
};
