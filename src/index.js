// import styles from "./index.scss";
import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from "./NavigationBar.js";
import { NavigationRoutes } from "./NavigationRoutes.js";
import { AuthContextProvider } from "./auth-context.js";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavigationBar />
        <NavigationRoutes />
      </Router>
    </AuthContextProvider>
  );
}

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.querySelector("#app"));
