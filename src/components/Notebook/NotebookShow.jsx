import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { noteListAction } from "../../store/noteSlice";

import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NotebookShow.module.scss";

function NotebookShow() {
  const noteArr = useSelector((states) => states.noteState);
  const dispatch = useDispatch();
  const { nbId } = useParams();

  function notebookToggleHandler() {
    // dispatch(uiActions.toggleNotebookState());
  }

  useEffect(
    function () {
      dispatch(noteListAction(nbId));
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
          </li>
        ))}
        {noteArr.length === 0 && <p className="text--center">No Note Found!</p>}
      </ul>
    </div>
  );
}

export default NotebookShow;
