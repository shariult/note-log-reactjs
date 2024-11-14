import React, { useEffect, useReducer } from "react";

import Button from "../ui/Button";

import styles from "./NotebookEdit.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notebookUpdateAction } from "../../store/notebookSlice";

const notebookFormInitialState = {
  title: "",
  notebookPrivacyLevel: "",
};

function notebookFormReducer(prevState, action) {
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
      return notebookFormInitialState;
    }
    default: {
      return prevState;
    }
  }
}

function NotebookEdit() {
  const params = useParams();
  const dispatch = useDispatch();
  const notebookArr = useSelector((state) => state.notebookState);
  const [notebookFormState, notebookDispatchFn] = useReducer(
    notebookFormReducer,
    notebookFormInitialState
  );

  const notebookData = notebookArr.filter(
    (notebookItem) => notebookItem._id === params.nbId
  )[0];

  useEffect(
    function () {
      notebookDispatchFn({ type: "SET_INITIAL", payload: notebookData });
    },
    [notebookData._id]
  );

  function onNotebookUpdate(e) {
    e.preventDefault();
    dispatch(notebookUpdateAction(notebookFormState));
  }

  return (
    <div className={styles["notebook-edit"]}>
      <h2 className="heading-2 mb-24">Edit Notebook</h2>
      <form
        className={`form ${styles["notebook-edit__form"]}`}
        onSubmit={onNotebookUpdate}
      >
        <div className="form__group">
          <label htmlFor="title" className="form__label">
            Notebook Title
          </label>
          <input
            type="text"
            name="title"
            value={notebookFormState.title}
            id="title"
            className="form__input"
            placeholder="Notebook Title"
            onChange={(e) =>
              notebookDispatchFn({ type: "INPUT_CHANGE", payload: e })
            }
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
              value={notebookFormState.notebookPrivacyLevel}
              onChange={(e) =>
                notebookDispatchFn({ type: "INPUT_CHANGE", payload: e })
              }
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
        <Button>Update Notebook</Button>
      </form>
    </div>
  );
}

export default NotebookEdit;
