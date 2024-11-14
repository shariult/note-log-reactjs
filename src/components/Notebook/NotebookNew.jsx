import React, { useState } from "react";

import Button from "../ui/Button";

import styles from "./NotebookNew.module.scss";
import { useDispatch } from "react-redux";
import { notebookCreateAction } from "../../store/notebookSlice";

function NotebookNew() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [notebookPrivacyLevel, setNotebookPrivacyLevel] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function notebookPrivacyLevelChangeHandler(e) {
    setNotebookPrivacyLevel(e.target.value);
  }

  function onNotebookSubmit(e) {
    e.preventDefault();
    const formData = {
      title,
      notebookPrivacyLevel,
    };

    setTitle("");
    setNotebookPrivacyLevel("");

    dispatch(notebookCreateAction(formData));
  }

  return (
    <div className={styles["notebook-create"]}>
      <h2 className="heading-2 mb-24">Create a Notebook</h2>
      <form
        method="get"
        className={`form ${styles["notebook-create__form"]}`}
        onSubmit={onNotebookSubmit}
      >
        <div className="form__group">
          <label htmlFor="title" className="form__label">
            Notebook Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            className="form__input"
            placeholder="Notebook Title"
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="form__group">
          <span className="form__helper-text">Access Level: </span>
          <div className="form__select">
            <select
              name="notebookPrivacyLevel"
              id="notebookPrivacyLevel"
              className="form__select-menu"
              onChange={notebookPrivacyLevelChangeHandler}
              value={notebookPrivacyLevel}
              required
            >
              <option value="" className="form__select-option" disabled>
                Access Level
              </option>
              <option value="0" className="form__select-option">
                Private
              </option>
              <option value="1" className="form__select-option">
                Public
              </option>
            </select>
            <span className="form__select-icon"></span>
          </div>
        </div>
        <Button>Add Notebook</Button>
      </form>
    </div>
  );
}

export default NotebookNew;
