import React from "react";
import { useDispatch } from "react-redux";
import { notebookDeleteAction } from "../../store/notebookSlice";
import Button from "../ui/Button";

import styles from "./NotebookDelete.module.scss";

function NotebookDelete(props) {
  const dispatch = useDispatch();

  function notebookDeleteHandler() {
    dispatch(notebookDeleteAction({ _id: props.notebookId }));
  }

  return (
    <div className={styles["notebook-delete"]}>
      <h3 className={"heading-3 " + styles["notebook-delete__title"]}>
        Delete Notebook "{props.notebookItem.title}"?
      </h3>
      <div className={styles["notebook-delete__btn-box"]}>
        <Button className="btn btn--primary">Cancel</Button>
        <Button
          className="btn"
          variant="danger"
          onClick={notebookDeleteHandler}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default NotebookDelete;
