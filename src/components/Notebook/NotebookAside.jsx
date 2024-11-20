import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { notebookListAction } from "../../store/notebookSlice";
import LinkAnchor from "../ui/LinkAnchor";
import NotebookItem from "./NotebookItem";

import styles from "./Notebook.module.scss";

function NotebookAside() {
  const notebookArr = useSelector((state) => state.notebookState);
  const uiState = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(notebookListAction());
    },
    [uiState.isNotebookOpen, dispatch]
  );

  return (
    <>
      <aside className={styles["notebook"]}>
        <div className={styles["notebook__header"]}>
          <h2 className={`heading-2 ${styles["notebook__title"]}`}>
            Notebooks
          </h2>
          <LinkAnchor to="/notebook/create" variant="primary">
            Create Notebook
          </LinkAnchor>
        </div>
        <ul className={styles["notebook__list"]}>
          {notebookArr.map(function (notebookItem) {
            return (
              <NotebookItem
                key={notebookItem._id}
                notebookItem={notebookItem}
              />
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default NotebookAside;
