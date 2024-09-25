import React from "react";

import Button from "../ui/Button";

import styles from "./NoteEdit.module.scss";

function NoteEdit() {
  return (
    <div className={styles["note-edit"]}>
      <h2 className="heading-2 mb-24">Edit Note</h2>
      <form
        action="#"
        method="get"
        className={`form ${styles["note-edit__form"]}`}
      >
        <div className="form__group">
          <label htmlFor="noteTitle" className="form__label">
            Note Title
          </label>
          <input
            type="text"
            name="noteTitle"
            value=""
            id="noteTitle"
            className="form__input"
            placeholder="Note Title"
            required
          />
        </div>
        <div class="form__group">
          <label htmlFor="noteContent" className="form__label">
            Note
          </label>
          <textarea
            name="noteContent"
            value=""
            id="noteContent"
            class="form__textarea"
            placeholder="Type Your Note"
            required
          ></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="noteTags" className="form__label">
            Note Tags
          </label>
          <input
            type="text"
            name="noteTags"
            value=""
            id="noteTags"
            className="form__input"
            placeholder="Separate tags by comma i.e 'hello, world' "
            required
          />
        </div>
        <div className="form__group form__group-1-2">
          <label htmlFor="noteStartDate" className="form__label">
            Star Date
          </label>
          <input
            type="date"
            name="noteStartDate"
            value=""
            id="noteStartDate"
            className="form__input"
            placeholder="Start date"
          />
        </div>
        <div className="form__group form__group-1-2">
          <label htmlFor="noteEndDate" className="form__label">
            End Date
          </label>
          <input
            type="date"
            name="noteEndDate"
            value=""
            id="noteEndDate"
            className="form__input"
            placeholder="End date"
          />
        </div>
        <div className="form__group">
          <span className="form__helper-text">Access Level: </span>
          <div className="form__select">
            <select
              name="notePrivacyLevel"
              id="notePrivacyLevel"
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
        <Button>Update Note</Button>
      </form>
    </div>
  );
}

export default NoteEdit;
