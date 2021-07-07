import styles from "./Button.css";
import React from "react";
import PropTypes from "prop-types";

function getColor(col) {
  switch (col) {
    case "primary":
      return "var(--primary-color)";
    case "secondary":
      return "var(--primary-color-1)";
  }

  return col;
}

// prettier-ignore
export const Button = ({ children, color, size, otherColor="white", outlined, ...props }) => {
  const scale = size === "large" ? 1.2 : size === "small" ? 0.8 : 1;
  color = getColor(color);
  outlined = (outlined && "outlined") || "";
  // eslint-disable-next-line react/prop-types
  const style = { "--main-color": color, "--other-color": otherColor, "--scale": scale, ...(props.style || {}) };

  return (
    <button
      className={`${styles["button"]} ${size} ${outlined}`}
      {...props}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * the main color of the button
   */
  color: PropTypes.string,
  /**
   * the other color to use for `color`, or `background-color` when outlined
   */
  otherColor: PropTypes.string,
  /**
   * whether it is outlined or not
   */
  outlined: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * extra styles
   */
  style: PropTypes.string,
  /**
   * Children if you want
   */
  children: PropTypes.node
};
