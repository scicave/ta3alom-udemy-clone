import styles from "./styles.scss";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../auth-context.js";

export const SignupPage = () => {
  const [isAuthed] = useContext(AuthContext);

  if (isAuthed) return <Redirect to="/" />;
  return <h1 className={styles["header"]}>Sign-up page</h1>;
};
