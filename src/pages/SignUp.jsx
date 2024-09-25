import React from "react";

import Button from "../components/ui/Button";
import LinkAnchor from "../components/ui/LinkAnchor";

import styles from "./Homepage.module.scss";
import sideImg from "../assets/img/notebook.png";
import logo from "../assets/img/logo.png";

function SignUp() {
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
          <form action="#" method="get" className="form">
            <div className="form__group form__group-1-2">
              <label htmlFor="fullName" className="form__label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value=""
                id="fullName"
                className="form__input"
                placeholder="Full Name"
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
                value=""
                id="username"
                className="form__input"
                placeholder="Username"
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
                value=""
                id="email"
                className="form__input"
                placeholder="Email"
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
                value=""
                id="password"
                className="form__input"
                placeholder="Password "
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="about" className="form__label">
                About
              </label>
              <textarea
                name="about"
                value=""
                id="about"
                className="form__textarea"
                placeholder="About you"
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
