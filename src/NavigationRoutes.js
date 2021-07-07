import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { DashboardPage } from "./pages/Dashboard";
import { AuthContext } from "./auth-context.js";

const Logout = () => {
  const [_, setIsAuthed] = useContext(AuthContext);
  setIsAuthed(false);
  return <Redirect to="/" />;
};

export const NavigationRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
