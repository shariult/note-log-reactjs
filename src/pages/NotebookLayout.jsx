import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import NotebookAside from "../components/Notebook/NotebookAside";

import { PiNotebook } from "react-icons/pi";
import styles from "./NotebookLayout.module.scss";

function NotebookLayout() {
  const uiState = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  function notebookToggleHandler() {
    dispatch(uiActions.toggleNotebookState());
  }

  console.log(uiState.isNotebookOpen);

  return (
    <>
      <Navbar />
      <div className={`container ${styles["main"]}`}>
        {uiState.isNotebookOpen && <NotebookAside />}
        <Button
          className={styles["notebook-toggle"]}
          onClick={notebookToggleHandler}
        >
          <PiNotebook />
        </Button>
        <Outlet />
      </div>
    </>
  );
}

export default NotebookLayout;
