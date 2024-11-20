import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";
import { dateFormatter } from "../../utils/utilFunctions";

import styles from "./NoteShow.module.scss";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

import Modal from "../ui/Modal";
import NoteDelete from "./NoteDelete";

function NoteShow() {
  const { nbId, nId } = useParams();
  const dispatch = useDispatch();
  const noteArr = useSelector((state) => state.noteState);
  const uiState = useSelector((state) => state.uiState);

  const noteItem = noteArr.filter((item) => item._id === nId)[0];

  function modalToggleHandler() {
    dispatch(uiActions.modalToggleFn());
  }

  return (
    <div className={styles["note"]}>
      <h2 className={`heading-2 ${styles["note__title"]}`}>
        {noteItem.noteTitle}{" "}
        <span className={styles["note__access"]}>
          {noteItem.notePrivacyLevel === 0 ? "public" : "private"}
        </span>
      </h2>
      <p className={styles["note__author"]}>
        created by <em>Author</em> on{" "}
        <em>{dateFormatter(noteItem.createdAt)}</em>
      </p>
      <div className={styles["note__tags"]}>
        {noteItem.noteTags.map((noteTag, idx) => (
          <span className={styles["note__tag"]} key={idx}>
            {noteTag}
          </span>
        ))}
      </div>
      <div className={styles["note__dates"]}>
        <p className={styles["note__date"]}>
          Started At:{" "}
          <em>
            {noteItem.noteStartDate && dateFormatter(noteItem.noteStartDate)}
          </em>
        </p>
        <p className={styles["note__date"]}>
          Completed At:{" "}
          <em>{noteItem.noteEndDate && dateFormatter(noteItem.noteEndDate)}</em>
        </p>
      </div>
      <p className={styles["note__content"]}>{noteItem.noteContent}</p>
      <div className={styles["note__btn-box"]}>
        <LinkAnchor
          to={`/notebook/${nbId}/note/${nId}/edit`}
          variant="secondary"
        >
          <FaRegEdit />
        </LinkAnchor>
        <Button variant="danger" onClick={modalToggleHandler}>
          <FaRegTrashAlt />
        </Button>
        {uiState.isModalOpen && (
          <Modal onClick={modalToggleHandler}>
            <NoteDelete noteItem={noteItem} nbId={nbId} nId={nId} />
          </Modal>
        )}
      </div>
      <LinkAnchor to={`/notebook/${nbId}/note`}>
        &larr; Back to Notebook 1
      </LinkAnchor>
    </div>
  );
}

export default NoteShow;
