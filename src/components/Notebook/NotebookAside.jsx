import React from "react";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import { uiActions } from "../../store/uiSlice";
import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NotebookAside.module.scss";

function NotebookAside() {
  const dispatch = useDispatch();

  function notebookToggleHandler() {
    // dispatch(uiActions.toggleNotebookState());
  }

  return (
    <aside className={styles["notebook"]}>
      <div className={styles["notebook__header"]}>
        <h2 className={`heading-2 ${styles["notebook__title"]}`}>Notebooks</h2>
        <LinkAnchor
          to="/notebook/create"
          variant="primary"
          onClick={notebookToggleHandler}
        >
          Create Notebook
        </LinkAnchor>
      </div>
      <ul className={styles["notebook__list"]}>
        <li className={styles["notebook__item"]}>
          <LinkAnchor
            to="/notebook/someId/note"
            className={styles["notebook__link"]}
          >
            Notebook 1
          </LinkAnchor>
          <div className={styles["notebook__action-group"]}>
            <LinkAnchor
              to={`/notebook/someId/edit`}
              variant="primary"
              className={styles["notebook__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["notebook__action"]} ${styles["notebook__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
        <li className={styles["notebook__item"]}>
          <LinkAnchor
            to="/notebook/someId/note"
            className={styles["notebook__link"]}
          >
            Notebook 2
          </LinkAnchor>
          <div className={styles["notebook__action-group"]}>
            <LinkAnchor
              to={`/notebook/someId/edit`}
              variant="primary"
              className={styles["notebook__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["notebook__action"]} ${styles["notebook__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
        <li className={styles["notebook__item"]}>
          <LinkAnchor
            to="/notebook/someId/note"
            className={styles["notebook__link"]}
          >
            Notebook 3
          </LinkAnchor>
          <div className={styles["notebook__action-group"]}>
            <LinkAnchor
              to={`/notebook/someId/edit`}
              variant="primary"
              className={styles["notebook__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["notebook__action"]} ${styles["notebook__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default NotebookAside;
