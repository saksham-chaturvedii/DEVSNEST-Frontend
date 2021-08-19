import React, { useContext } from "react";
import AuthData from "./auth-context";

function Profile() {
  const { login } = useContext(AuthData);
  return (
    <>{login ? <div>Private Route</div> : <div>Login to access it.</div>}</>
  );
}

export default Profile;
