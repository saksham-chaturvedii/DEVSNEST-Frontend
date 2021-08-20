import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import AuthData from "./auth-context";

function Home() {
  const { login, setLogin, loading, setLoading } = useContext(AuthData); //'var' if using the loading=!loading method.
  // console.log(setLoading);
  // console.log(loading);
  // const date = new Date();

  const wait = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const handleLogin = () => {
    // login ? setLogin(false) : setLogin(true);
    setLoading(true);
    // console.log(date);
    // setLoading(!loading) was not working because of how lifecycle of variables work in React JS. Check log(date) to understand how the home omponent is getting rendered everytime a button click happens.
    // loading=!loading;
    // setLoading(loading);
    wait(500).then(() => {
      setLoading(false);
      // loading=!loading;
      // setLoading(loading);
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
