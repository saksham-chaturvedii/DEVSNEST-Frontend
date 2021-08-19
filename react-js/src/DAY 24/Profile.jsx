import React, { useContext } from "react";
import AuthData from "./auth-context";
import { Route, Redirect } from "react-router-dom";

function Profile() {
  const { login } = useContext(AuthData);
  return (
    <>
      <Route>
        {login ? (
          <div>You are logged in (Profile- Private Route).</div>
        ) : (
          /*<div>Login to access it.</div>*/ <Redirect to="/"></Redirect>
        )}
      </Route>
    </>
  );
}

export default Profile;
