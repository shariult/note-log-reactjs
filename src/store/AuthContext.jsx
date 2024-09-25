import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider(props) {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedin] = useState(false);

  function signUpHandler(data) {}
  function signInHandler(data) {}
  function signOutHandler() {}

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
