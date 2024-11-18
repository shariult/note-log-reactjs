import React, { useReducer } from "react";

import Button from "../ui/Button";

import styles from "./NoteNew.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { noteCreateAction } from "../../store/noteSlice";

const noteFormInitialState = {
  noteTitle: "",
  noteContent: "",
  noteTags: "",
  noteStartDate: "",
  noteEndDate: "",
  notePrivacyLevel: "",
};

function noteFormReducer(prevState, action) {
  switch (action.type) {
    case "INPUT_CHANGE": {
      return {
        ...prevState,
        [action.payload.target.name]: action.payload.target.value,
      };
    }
    case "SET_INITIAL": {
      return { ...action.payload };
    }
    case "RESET": {
      return noteFormInitialState;
    }
    default: {
      return prevState;
    }
  }
}

function NoteNew() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [noteFormState, noteDispatchFn] = useReducer(
    noteFormReducer,
    noteFormInitialState
  );
  function inputChangeHandler(e) {
    noteDispatchFn({ type: "INPUT_CHANGE", payload: e });
  }

  function onNoteSubmit(e) {
    e.preventDefault();
    const noteData = {
      ...noteFormState,
      notebookId: params.nbId,
    };
    dispatch(noteCreateAction(noteData));
    noteDispatchFn({ type: "RESET" });
    navigate(`/notebook/${params.nbId}/note`);
  }

  return (
    <div className={styles["note-create"]}>
      <h2 className="heading-2 mb-24">Create a Note</h2>
      <form
        className={`form ${styles["note-create__form"]}`}
        onSubmit={onNoteSubmit}
      >
        <div className="form__group">
          <label htmlFor="noteTitle" className="form__label">
            Note Title
          </label>
          <input
            type="text"
            name="noteTitle"
            value={noteFormState.noteTitle}
            id="noteTitle"
            className="form__input"
            placeholder="Note Title"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="noteContent" className="form__label">
            Note
          </label>
          <textarea
            name="noteContent"
            value={noteFormState.noteContent}
            id="noteContent"
            className="form__textarea"
            placeholder="Type Your Note"
            onChange={inputChangeHandler}
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
            value={noteFormState.noteTags}
            id="noteTags"
            className="form__input"
            placeholder="Separate tags by comma i.e 'hello, world' "
            onChange={inputChangeHandler}
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
            value={noteFormState.noteStartDate}
            id="noteStartDate"
            className="form__input"
            placeholder="Start date"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form__group form__group-1-2">
          <label htmlFor="noteEndDate" className="form__label">
            End Date
          </label>
          <input
            type="date"
            name="noteEndDate"
            value={noteFormState.noteEndDate}
            id="noteEndDate"
            className="form__input"
            placeholder="End date"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form__group">
          <span className="form__helper-text">Access Level: </span>
          <div className="form__select">
            <select
              name="notePrivacyLevel"
              id="notePrivacyLevel"
              className="form__select-menu"
              value={noteFormState.notePrivacyLevel}
              onChange={inputChangeHandler}
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
        <Button>Add Note</Button>
      </form>
    </div>
  );
}

export default NoteNew;
