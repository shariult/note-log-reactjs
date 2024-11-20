import React from "react";
import { noteDeleteAction } from "../../store/noteSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./NoteDelete.module.scss";
import Button from "../ui/Button";

function NoteDelete(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function noteDeleteHandler() {
    const formData = {
      nbId: props.nbId,
      nId: props.nId,
    };
    dispatch(noteDeleteAction(formData));
    navigate(`/notebook/${props.nbId}/note`);
  }
  return (
    <div className={styles["note-delete"]}>
      <h3 className={"heading-3 " + styles["note-delete__title"]}>
        Delete Notebook "{props.noteItem.noteTitle}"?
      </h3>
      <div className={styles["note-delete__btn-box"]}>
        <Button className="btn btn--primary">Cancel</Button>
        <Button className="btn" variant="danger" onClick={noteDeleteHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default NoteDelete;
