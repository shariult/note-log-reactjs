import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

function Backdrop(props) {
  const { className, children, ...otherProps } = props;
  return (
    <div className={`${className} ${styles["backdrop"]}`} {...otherProps}></div>
  );
}

function Modal(props) {
  const { className, children, ...otherProps } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop {...otherProps} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={`${styles["modal"]} ${className}`} {...otherProps}>
          {children}
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
