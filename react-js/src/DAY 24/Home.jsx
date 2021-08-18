import React, { useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import AuthData from "./auth-context";

function Home() {
  const { login, setLogin } = useContext(AuthData);

//   useEffect(() => {
//     return console.log(login);
//   }, [login]);

  const handleLogin = () => {
    login ? setLogin(false) : setLogin(true);
  };
  return (
    <div>
      <div>Home</div>
      <div>Login to access "Profile" & "Dashboard"</div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}

export default Home;
