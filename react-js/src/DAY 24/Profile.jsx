import React, { useContext } from "react";
import AuthData from "./auth-context";
import { Route, Redirect } from "react-router-dom";

function Profile() {
  const { login } = useContext(AuthData);
  return (
    <div className="HeadingAndButtonContainer">
      <Route>
        {login ? (
          <div className="PageText">
            You are logged in (Profile- Private Route).
          </div>
        ) : (
          /*<div>Login to access it.</div>*/ <Redirect to="/"></Redirect>
        )}
      </Route>
    </div>
  );
}

export default Profile;
