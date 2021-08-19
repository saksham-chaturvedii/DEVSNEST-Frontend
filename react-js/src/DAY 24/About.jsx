import React, { useContext } from "react";
import AuthData from "./auth-context";

function About() {
  const { login } = useContext(AuthData);
  return (
    <div>
      This is a Public Route
      {login
        ? " and you are logged in. Head to the 'Home' page to log out."
        : ". However, you are currently logged out. Head to the 'Home' page to log in."}
    </div>
  );
}

export default About;
