import React, { useContext } from "react";
import styles from "./index.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth-context";

export const NavigationBar = () => {
  // const { isAuthed } = useContext(authContext);
  const [isAuthed] = useContext(AuthContext);

  return (
    <nav className={styles["top-nav"]}>
      <span className={styles["nav-logo"]}>Ta3alom</span>
      <span style={{ flexGrow: 1 }}></span>
      {/* prettier-ignore */}
      <ul>
        <li><Link to="/"><a>Home</a></Link></li>
        {isAuthed ? (
        <>
          <li><Link to="/dashboard"><a>Dashboard</a></Link></li>
          <li><Link to="/logout"><a>Logout</a></Link></li>
        </>
        ) : (
        <>
          <li><Link to="/login"><a>Login</a></Link></li>
          <li><Link to="/signup"><a>Sign up</a></Link></li>
        </>
        )}
      </ul>
    </nav>
  );
};
