import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NoteShow.module.scss";
import useHTTP from "../../hooks/useHTTP";
import { useParams } from "react-router-dom";

function NoteShow() {
  const { nbId, nId } = useParams();
  const { sendRequest, isLoading, error } = useHTTP();
  const [noteData, setNoteData] = useState({ noteTags: [] });

  function resHandler(data) {
    setNoteData(data);
  }
  const reqConfig = {
    url: `/notebook/${nbId}/notes/${nId}`,
  };
  useEffect(function () {
    sendRequest(reqConfig, resHandler);
  }, []);

  return (
    <div className={styles["note"]}>
      <h2 className={`heading-2 ${styles["note__title"]}`}>
        {noteData.noteTitle}{" "}
        <span className={styles["note__access"]}>
          {noteData.notePrivacyLevel === 0 ? "public" : "private"}
        </span>
      </h2>
      <p className={styles["note__author"]}>
        created by <em>Author</em> on <em>{noteData.createdAt}</em>
      </p>
      <div className={styles["note__tags"]}>
        {noteData.noteTags.map((noteTag) => (
          <span className={styles["note__tag"]}>{noteTag}</span>
        ))}
      </div>
      <div className={styles["note__dates"]}>
        <p className={styles["note__date"]}>
          Started At: <em>{noteData.noteStartDate}</em>
        </p>
        <p className={styles["note__date"]}>
          Completed At: <em>{noteData.noteEndDate}</em>
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
        <Button variant="danger">
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
