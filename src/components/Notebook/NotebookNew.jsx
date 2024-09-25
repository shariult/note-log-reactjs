import React from "react";

import Button from "../ui/Button";

import styles from "./NotebookNew.module.scss";

function NotebookNew() {
  return (
    <div className={styles["notebook-create"]}>
      <h2 className="heading-2 mb-24">Create a Notebook</h2>
      <form
        action="#"
        method="get"
        className={`form ${styles["notebook-create__form"]}`}
      >
        <div className="form__group">
          <label htmlFor="title" className="form__label">
            Notebook Title
          </label>
          <input
            type="text"
            name="title"
            value=""
            id="title"
            className="form__input"
            placeholder="Notebook Title"
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
              required
            >
              <option
                value=""
                className="form__select-option"
                disabled
                selected
              >
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
