import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";

// prettier-ignore
export const Button = ({ children, type, size, outlined, startIcon, endIcon, ...props }) => {
  const outlinedClass = (outlined && styles["outlined"]) || "";

  if (startIcon || endIcon) {
    children = (
      <span style={{display: "flex"}}>
        {startIcon && <span className={`${styles["icon-container"]} ${styles["start-icon"]}`}>{startIcon}</span>}
        {children}
        {endIcon && <span className={`${styles["icon-container"]} ${styles["end-icon"]}`}>{endIcon}</span>}
      </span>
    )
  }
  
console.log(styles)

  return (
    <button
      className={`${styles["btn"]} ${styles[size] ?? ""} ${styles[type] ?? ""} ${outlinedClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // type of the button
  type: PropTypes.oneOf(["primary", "secondary", "normal"]),
  // whether it is outlined or not
  outlined: PropTypes.bool,
  // How large should the button be?
  size: PropTypes.oneOf(["small", "medium", "large"]),
  // start icon, block-start position
  startIcon: PropTypes.node,
  // start icon, block-start position
  endIcon: PropTypes.node,
  // extra styles
  style: PropTypes.object,
  // Children if you want
  children: PropTypes.node
};
