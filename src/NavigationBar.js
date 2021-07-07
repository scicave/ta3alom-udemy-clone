import React, { useContext } from "react";
import styles from "./index.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth-context";

export const NavigationBar = () => {
  // const { isAuthed } = useContext(authContext);
  const [isAuthed] = useContext(AuthContext);

  return (
    <nav className={styles["top-nav"]}>
      <span className={styles["nav-logo"]}>
        <Link to="/">Ta3alom</Link>
      </span>
      <span style={{ flexGrow: 1 }}></span>
      {/* prettier-ignore */}
      <ul>
        <li><Link to="/">Home</Link></li>
        {isAuthed ? (
        <>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </>
        ) : (
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </>
        )}
      </ul>
    </nav>
  );
};
