import React, { useContext } from "react";
import AuthData from "./auth-context";

function About() {
  const { login } = useContext(AuthData);
  return (
    <div className="HeadingAndButtonContainer">
      <div className="PageText">
        {login
          ? " This is a Public Route and you are logged in. Head to the 'Home' page to log out."
          : " This is a Public Route. However, you are currently logged out. Head to the 'Home' page to log in."}
      </div>
    </div>
  );
}

export default About;
