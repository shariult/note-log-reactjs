import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import { useSelector } from "react-redux";

function RootLayout() {
  const uiState = useSelector((states) => states.uiState);
  return (
    <>
      {uiState.showLoader && (
        <Modal>
          <Loader />
        </Modal>
      )}
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
