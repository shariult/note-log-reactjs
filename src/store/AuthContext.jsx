import { createContext, useState } from "react";
import useHTTP from "../hooks/useHTTP";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

function AuthProvider(props) {
  const { sendRequest, isLoading, error } = useHTTP();
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn === false && localStorage.getItem("token")) {
    const userData = jwtDecode(localStorage.getItem("token"));
    setUserData(userData);
    setIsLoggedIn(true);
  }

  // Handle SignUp
  function signUpResHandler(resData) {
    if (!error) {
      localStorage.setItem("token", resData.token);
      const userData = jwtDecode(resData.token);
      setUserData(userData);
      setIsLoggedIn(true);
    }
  }
  function signUpHandler(data) {
    const reqConfig = {
      url: `/signUp`,
      method: "POST",
      body: data,
    };
    sendRequest(reqConfig, signUpResHandler);
  }

  // Handle SignIn
  function signInResHandler(resData) {
    if (!error) {
      localStorage.setItem("token", resData.token);
      const userData = jwtDecode(resData.token);
      setUserData(userData);
      setIsLoggedIn(true);
    }
  }
  function signInHandler(data) {
    const reqConfig = {
      url: "/signIn",
      method: "POST",
      body: data,
    };
    sendRequest(reqConfig, signInResHandler);
  }

  // Handle Sign Out
  function signOutHandler() {
    localStorage.removeItem("token");
    setUserData(undefined);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        signUpHandler,
        signInHandler,
        signOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
