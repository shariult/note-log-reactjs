import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NoteShow.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { dateFormatter } from "../../utils/utilFunctions";
import { useDispatch } from "react-redux";
import { noteDeleteAction } from "../../store/noteSlice";

function NoteShow() {
  const { nbId, nId } = useParams();
  const noteArr = useSelector((state) => state.noteState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noteData = noteArr.filter((noteItem) => noteItem._id === nId)[0];

  function noteDeleteHandler() {
    const formData = {
      nbId,
      nId,
    };
    dispatch(noteDeleteAction(formData));
    navigate(`/notebook/${nbId}/note`);
  }

  return (
    <div className={styles["note"]}>
      <h2 className={`heading-2 ${styles["note__title"]}`}>
        {noteData.noteTitle}{" "}
        <span className={styles["note__access"]}>
          {noteData.notePrivacyLevel === 0 ? "public" : "private"}
        </span>
      </h2>
      <p className={styles["note__author"]}>
        created by <em>Author</em> on{" "}
        <em>{dateFormatter(noteData.createdAt)}</em>
      </p>
      <div className={styles["note__tags"]}>
        {noteData.noteTags.map((noteTag, idx) => (
          <span className={styles["note__tag"]} key={idx}>
            {noteTag}
          </span>
        ))}
      </div>
      <div className={styles["note__dates"]}>
        <p className={styles["note__date"]}>
          Started At:{" "}
          <em>
            {noteData.noteStartDate && dateFormatter(noteData.noteStartDate)}
          </em>
        </p>
        <p className={styles["note__date"]}>
          Completed At:{" "}
          <em>{noteData.noteEndDate && dateFormatter(noteData.noteEndDate)}</em>
        </p>
      </div>
      <p className={styles["note__content"]}>{noteData.noteContent}</p>
      <div className={styles["note__btn-box"]}>
        <LinkAnchor
          to={`/notebook/${nbId}/note/${nId}/edit`}
          variant="secondary"
        >
          <FaRegEdit />
        </LinkAnchor>
        <Button variant="danger" onClick={noteDeleteHandler}>
          <FaRegTrashAlt />
        </Button>
      </div>
      <LinkAnchor to={`/notebook/${nbId}/note`}>
        &larr; Back to Notebook 1
      </LinkAnchor>
    </div>
  );
}

export default NoteShow;
