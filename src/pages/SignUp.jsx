import React, { useContext, useState, useEffect } from "react";

import Button from "../components/ui/Button";
import LinkAnchor from "../components/ui/LinkAnchor";
import AuthContext from "../store/AuthContext";

import styles from "./Homepage.module.scss";
import sideImg from "../assets/img/notebook.png";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { signUpHandler, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");

  function fullNameChangeHandler(e) {
    setFullName(e.target.value);
  }
  function usernameChangeHandler(e) {
    setUsername(e.target.value);
  }
  function emailChangeHandler(e) {
    setEmail(e.target.value);
  }
  function passwordChangeHandler(e) {
    setPassword(e.target.value);
  }
  function aboutChangeHandler(e) {
    setAbout(e.target.value);
  }

  function onSignUpSubmit(e) {
    e.preventDefault();
    const signUpData = {
      fullName,
      username,
      email,
      password,
      about,
    };
    signUpHandler(signUpData);

    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setAbout("");
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/notebook");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main className={`container ${styles["auth"]}`}>
      <div className={styles["auth__aside"]}>
        <h2 className={`heading-2 ${styles["auth__title"]}`}>
          NoteLog : Your Digital note
        </h2>
        <p className={styles["auth__subtitle"]}>
          Take your note everywhere. Never miss a single moment.
        </p>
        <div className={styles["auth__img-box"]}>
          <img
            src={sideImg}
            alt="notebook, pen and glass"
            className={styles["auth__img"]}
          />
        </div>
      </div>
      <div className={styles["auth__main"]}>
        <div className={styles["auth__form-box"]}>
          <img
            src={logo}
            alt="logo of notelog"
            className={styles["auth__logo"]}
          />
          <h2 className="heading-3 mb-24">Sign Up</h2>
          <form method="get" className="form" onSubmit={onSignUpSubmit}>
            <div className="form__group form__group-1-2">
              <label htmlFor="fullName" className="form__label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                id="fullName"
                className="form__input"
                placeholder="Full Name"
                onChange={fullNameChangeHandler}
                required
              />
            </div>
            <div className="form__group form__group-1-2">
              <label htmlFor="username" className="form__label">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                id="username"
                className="form__input"
                placeholder="Username"
                onChange={usernameChangeHandler}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                className="form__input"
                placeholder="Email"
                onChange={emailChangeHandler}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                className="form__input"
                placeholder="Password "
                onChange={passwordChangeHandler}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="about" className="form__label">
                About
              </label>
              <textarea
                name="about"
                value={about}
                id="about"
                className="form__textarea"
                placeholder="About you"
                onChange={aboutChangeHandler}
                required
              ></textarea>
            </div>
            <Button>Sign Up</Button>
          </form>
        </div>
        <p className={styles["auth__alt-msg"]}>
          Already have an Account?{" "}
          <LinkAnchor to="/" className={styles["auth__link"]}>
            Sign in
          </LinkAnchor>{" "}
          Now
        </p>
      </div>
    </main>
  );
}

export default SignUp;
