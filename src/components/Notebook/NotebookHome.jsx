import React from "react";

import styles from "./NotebookHome.module.scss";
import LinkAnchor from "../ui/LinkAnchor";

function NotebookHome() {
  return (
    <div className={styles["notebook-msg"]}>
      <p className={styles["notebook-msg__text"]}>Create or View your notes</p>
      <LinkAnchor to="/notebook/create" variant="primary">
        Create Notebook
      </LinkAnchor>
    </div>
  );
}

export default NotebookHome;
