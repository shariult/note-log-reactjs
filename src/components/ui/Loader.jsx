import React from "react";

import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles["loader"]}>
      <div className={`${styles["loader__icon"]} rotate-loader`}></div>
      <p className={styles["loader__text"]}>Loading...</p>
    </div>
  );
}

export default Loader;
