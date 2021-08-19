import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthData from "./auth-context";

function Dashboard() {
  const { login } = useContext(AuthData);
  return (
    <div>
      {login ? (
        <div>You are logged in (Dashboard- Private Route).</div>
      ) : (
        <Route>
          <Redirect to="/" />
        </Route>
      )}
    </div>
  );
}

export default Dashboard;
//Notice the difference in the line position of the <Route> tag here and in Profile.jsx. Both ways its working fine.
