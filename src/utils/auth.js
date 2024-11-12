import { redirect } from "react-router-dom";

function getAuthTokenLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
}

function isLoggedInLoader() {
  const token = getAuthTokenLoader();
  if (!token) {
    return redirect("/signUp");
  }
  return token;
}

function isGuestLoader() {
  const token = getAuthTokenLoader();
  if (token) {
    return redirect("/notebook");
  }
  return token;
}

export { getAuthTokenLoader, isLoggedInLoader, isGuestLoader };
