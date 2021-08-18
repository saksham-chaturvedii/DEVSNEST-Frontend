import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import "./style.css";
import { ContextFunction } from "./auth-context";
function NavBar() {
  return (
    <div>
      <ContextFunction>
        <Router>
          {/* We use {Link} here becuse it does not reloads the page when the url changes, say, from {http://localhost:3000/} to {http://localhost:3000/profile}. If we use anchor tag i.e. <a href='/about'></a>, then everytime the react will render the about component(or any visited page) if we vist it and reload the page. Earlier every thing was loaded and the react was just switching the pages.  */}
          <div className="NavBar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/dashboard">DASHBOARD</Link>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ContextFunction>
    </div>
  );
}

export default NavBar;
