import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import { uiActions } from "../../store/uiSlice";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NotebookShow.module.scss";
import { listNoteAction } from "../../store/noteSlice";
import { useSelector } from "react-redux";

function NotebookShow() {
  const noteArr = useSelector((states) => states.noteState);
  const dispatch = useDispatch();
  const { nbId } = useParams();

  function notebookToggleHandler() {
    // dispatch(uiActions.toggleNotebookState());
  }

  useEffect(
    function () {
      dispatch(listNoteAction(nbId));
    },
    [dispatch, nbId]
  );

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
        {noteArr.map((noteItem) => (
          <li
            className={styles["note__item"]}
            onClick={notebookToggleHandler}
            key={noteItem._id}
          >
            <LinkAnchor
              to={`/notebook/${nbId}/note/${noteItem._id}`}
              className={styles["note__link"]}
            >
              {noteItem.noteTitle}
            </LinkAnchor>
            <div className={styles["note__action-group"]}>
              <LinkAnchor
                to={`/notebook/${nbId}/note/${noteItem._id}/edit`}
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
        ))}
        {noteArr.length === 0 && <p className="text--center">No Note Found!</p>}
      </ul>
    </div>
  );
}

export default NotebookShow;
