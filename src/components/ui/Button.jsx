import React from "react";

import styles from "./Button.module.scss";

function Button(props) {
  let buttonClass = styles["btn"];

  if (props.variant === "link") {
    buttonClass += ` ${styles["btn--link"]}`;
  } else if (props.variant === "secondary") {
    buttonClass += ` ${styles["btn--secondary"]}`;
  } else if (props.variant === "danger") {
    buttonClass += ` ${styles["btn--danger"]}`;
  } else {
    buttonClass += ` ${styles["btn--primary"]}`;
  }

  if (props.size === "md") {
    buttonClass += ` ${styles["btn--md"]}`;
  }
  if (props.size === "lg") {
    buttonClass += ` ${styles["btn--lg"]}`;
  }

  let allClasses = props.className
    ? `${buttonClass} ${props.className}`
    : buttonClass;

  return (
    <button className={allClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
