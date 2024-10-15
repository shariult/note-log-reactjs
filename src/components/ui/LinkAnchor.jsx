import React from "react";
import { Link } from "react-router-dom";

import styles from "./LinkAnchor.module.scss";

function LinkAnchor(props) {
  let linkClasses = styles["link"];

  if (props.variant === "primary") {
    linkClasses += ` ${styles["link--primary"]}`;
  }
  if (props.variant === "secondary") {
    linkClasses += ` ${styles["link--secondary"]}`;
  }
  if (props.variant === "danger") {
    linkClasses += ` ${styles["link--danger"]}`;
  }

  if (props.size === "md") {
    linkClasses += ` ${styles["link--md"]}`;
  }
  if (props.size === "lg") {
    linkClasses += ` ${styles["link--lg"]}`;
  }

  let allClasses = props.className
    ? `${linkClasses} ${props.className}`
    : linkClasses;

  return (
    <Link
      to={props.to}
      relative={props.relative || "path"}
      className={allClasses}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}

export default LinkAnchor;
