import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import { uiActions } from "../../store/uiSlice";
import { listNotebookAction } from "../../store/notebookSlice";
import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NotebookAside.module.scss";

let isInitial = true;

function NotebookAside() {
  const notebookArr = useSelector((state) => state.notebookState);
  const dispatch = useDispatch();

  function notebookToggleHandler() {
    // dispatch(uiActions.toggleNotebookState());
  }

  useEffect(function () {
    if (isInitial) {
      dispatch(listNotebookAction());
      isInitial = false;
    }
  });

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
        {notebookArr.map(function (notebookItem) {
          return (
            <li className={styles["notebook__item"]} key={notebookItem._id}>
              <LinkAnchor
                to={`/notebook/${notebookItem._id}/note`}
                className={styles["notebook__link"]}
              >
                {notebookItem.title}
              </LinkAnchor>
              <div className={styles["notebook__action-group"]}>
                <LinkAnchor
                  to={`/notebook/${notebookItem._id}/edit`}
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
          );
        })}
      </ul>
    </aside>
  );
}

export default NotebookAside;
