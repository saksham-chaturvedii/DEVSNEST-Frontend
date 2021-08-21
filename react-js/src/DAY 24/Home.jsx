import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import AuthData from "./auth-context";

function Home() {
  const { login, setLogin, loading, setLoading } = useContext(AuthData); //'var' if using the loading=!loading method.

  const wait = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const handleLogin = () => {
    // login ? setLogin(false) : setLogin(true);
    // setLoading(true);
    // setLoading(!loading);
    // setLoading(window.loading); //callback queue, event loop, loupe
    setLoading((loading) => !loading);
    wait(500).then(() => {
      // setLoading(false);
      // setLoading(!loading);
      setLoading((loading) => !loading);
      setLogin(!login);
    });
  };

  return (
    <div className="HeadingAndButtonContainer">
      <div className="PageText">
        {login
          ? "You have been logged in."
          : "Login to access 'Profile' & 'Dashboard'"}
      </div>
      {/* <Button variant="outlined" color="secondary" onClick={handleLogin}>
        {loading ? "Loading..." : login ? "Logout" : "Login"}
      </Button> */}
      {loading ? (
        "Loading..."
      ) : (
        <Button variant="outlined" color="secondary" onClick={handleLogin}>
          {" "}
          {login ? "Logout" : "Login"}
        </Button>
      )}
    </div>
  );
}

export default Home;
