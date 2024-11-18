import React, { useEffect, useReducer } from "react";

import Button from "../ui/Button";

import styles from "./NoteEdit.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { noteUpdateAction } from "../../store/noteSlice";

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

function NoteEdit() {
  const params = useParams();
  const dispatch = useDispatch();
  const noteArr = useSelector((states) => states.noteState);
  const navigate = useNavigate();
  const [noteFormState, noteDispatchFn] = useReducer(
    noteFormReducer,
    noteFormInitialState
  );
  function inputChangeHandler(e) {
    noteDispatchFn({ type: "INPUT_CHANGE", payload: e });
  }

  const noteData = noteArr.filter((noteItem) => noteItem._id === params.nId)[0];

  function onNoteSubmit(e) {
    e.preventDefault();
    const noteData = {
      ...noteFormState,
      nbId: params.nbId,
      nId: params.nId,
    };
    dispatch(noteUpdateAction(noteData));
    noteDispatchFn({ type: "RESET" });
    navigate(`/notebook/${params.nbId}/note/${params.nId}`);
  }

  useEffect(
    function () {
      noteDispatchFn({ type: "SET_INITIAL", payload: noteData });
    },
    [noteData._id]
  );

  return (
    <div className={styles["note-edit"]}>
      <h2 className="heading-2 mb-24">Edit Note</h2>
      <form
        className={`form ${styles["note-edit__form"]}`}
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
            value={
              noteFormState.noteStartDate &&
              new Date(noteFormState.noteStartDate).toISOString().split("T")[0]
            }
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
            value={
              noteFormState.noteEndDate &&
              new Date(noteFormState.noteEndDate).toISOString().split("T")[0]
            }
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
        <Button>Update Note</Button>
      </form>
    </div>
  );
}

export default NoteEdit;
