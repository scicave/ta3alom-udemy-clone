import React, { useContext } from "react";
import styles from "./styles.scss";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/Button.js";
import { AuthContext } from "../../auth-context.js";

export const LoginPage = () => {
  const [isAuthed, setIsAuthed] = useContext(AuthContext);

  if (isAuthed) return <Redirect to="/" />;
  return (
    <div>
      <h1 className={styles["header"]}>Login page</h1>
      <Button
        color="primary"
        outlined
        style={{ margin: "auto", display: "block" }}
        onClick={() => {
          setIsAuthed(true); // TODO: use the backend end-point to auth
        }}
      >
        Login ➡️
      </Button>
    </div>
  );
};
