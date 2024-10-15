import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import { uiActions } from "../../store/uiSlice";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NotebookShow.module.scss";

function NotebookShow() {
  const dispatch = useDispatch();
  const { nbId } = useParams();

  function notebookToggleHandler() {
    // dispatch(uiActions.toggleNotebookState());
  }

  return (
    <div className={styles["note"]}>
      <div className={styles["note__header"]}>
        <h3 className={`heading-3 ${styles["note__title"]}`}>Notes</h3>
        <LinkAnchor
          to={`/notebook/${nbId}/note/create`}
          variant="primary"
          onClick={notebookToggleHandler}
        >
          Create Note
        </LinkAnchor>
      </div>
      <ul className={styles["note__list"]}>
        <li className={styles["note__item"]} onClick={notebookToggleHandler}>
          <LinkAnchor
            to={`/notebook/${nbId}/note/someId`}
            className={styles["note__link"]}
          >
            Note 1
          </LinkAnchor>
          <div className={styles["note__action-group"]}>
            <LinkAnchor
              to={`/notebook/${nbId}/note/someId/edit`}
              variant="primary"
              className={styles["note__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["note__action"]} ${styles["note__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
        <li className={styles["note__item"]} onClick={notebookToggleHandler}>
          <LinkAnchor
            to={`/notebook/${nbId}/note/someId`}
            className={styles["note__link"]}
          >
            Note 2
          </LinkAnchor>
          <div className={styles["note__action-group"]}>
            <LinkAnchor
              to={`/notebook/${nbId}/note/someId/edit`}
              variant="primary"
              className={styles["note__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["note__action"]} ${styles["note__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
        <li className={styles["note__item"]} onClick={notebookToggleHandler}>
          <LinkAnchor
            to={`/notebook/${nbId}/note/someId`}
            className={styles["note__link"]}
          >
            Note 3
          </LinkAnchor>
          <div className={styles["note__action-group"]}>
            <LinkAnchor
              to={`/notebook/${nbId}/note/someId/edit`}
              variant="primary"
              className={styles["note__action"]}
            >
              <FaRegEdit />
            </LinkAnchor>
            <Button
              className={`${styles["note__action"]} ${styles["note__action--danger"]}`}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NotebookShow;
