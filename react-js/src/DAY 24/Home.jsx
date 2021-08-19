import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import AuthData from "./auth-context";

function Home() {
  const { login, setLogin, loading, setLoading } = useContext(AuthData);

  const wait = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const handleLogin = () => {
    // login ? setLogin(false) : setLogin(true);
    setLoading(true);
    // setLoading(!loading);
    wait(500).then(() => {
      setLoading(false);
      // setLoading(!loading);
      setLogin(!login);
    });
  };

  return (
    <div>
      <div>Login to access "Profile" & "Dashboard"</div>
      {/* <Button onClick={handleLogin}>
        {loading ? "Loading..." : login ? "Logout" : "Login"}
      </Button> */}
      {loading ? (
        "Loading..."
      ) : (
        <Button onClick={handleLogin}> {login ? "Logout" : "Login"}</Button>
      )}
    </div>
  );
}

export default Home;
