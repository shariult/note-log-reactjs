import React, { useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import LinkAnchor from "../ui/LinkAnchor";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import NotebookDelete from "./NotebookDelete";

import styles from "./Notebook.module.scss";

function NotebookItem(props) {
  const [modalShown, setModalShown] = useState(false);

  function modalToggleHandler() {
    setModalShown((prevState) => !prevState);
  }

  return (
    <li className={styles["notebook__item"]} key={props.notebookItem._id}>
      <LinkAnchor
        to={`/notebook/${props.notebookItem._id}/note`}
        className={styles["notebook__link"]}
      >
        {props.notebookItem.title}
      </LinkAnchor>
      <div className={styles["notebook__action-group"]}>
        <LinkAnchor
          to={`/notebook/${props.notebookItem._id}/edit`}
          variant="primary"
          className={styles["notebook__action"]}
        >
          <FaRegEdit />
        </LinkAnchor>
        <Button
          className={`${styles["notebook__action"]} ${styles["notebook__action--danger"]}`}
          onClick={modalToggleHandler}
        >
          <FaRegTrashAlt />
        </Button>
        {modalShown && (
          <Modal onClick={modalToggleHandler}>
            <NotebookDelete
              notebookId={props.notebookItem._id}
              notebookItem={props.notebookItem}
            />
          </Modal>
        )}
      </div>
    </li>
  );
}

export default NotebookItem;
