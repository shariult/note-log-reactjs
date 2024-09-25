import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../store/AuthContext";
import styles from "./Navbar.module.scss";

import logo from "../../assets/img/logo.png";
import userDefaultImg from "../../assets/img/users/user-1.jpg";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className={styles["navbar"]}>
      <div className={`container ${styles["navbar__nav"]}`}>
        <div className={styles["navbar__logo"]}>
          <NavLink to="/" className={styles["navbar__logo-link"]}>
            <img
              src={logo}
              className={styles["navbar__logo-img"]}
              alt="logo of Note log"
            />
          </NavLink>
        </div>
        <ul className={styles["navbar__list"]}>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles["navbar__link"]} ${styles["navbar__link--active"]}`
                  : styles["navbar__link"]
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/notebook"
              className={({ isActive }) =>
                isActive
                  ? `${styles["navbar__link"]} ${styles["navbar__link--active"]}`
                  : styles["navbar__link"]
              }
            >
              Notebooks
            </NavLink>
          </li>
        </ul>

        <ul className={styles["navbar__list"]}>
          {/* <!-- Dropdown Menu --> */}
          <li className={styles["navbar__item"]}>
            <input
              type="checkbox"
              name="navbarSubCheckbox"
              id="userDropdown"
              className={styles["navbar__checkbox"]}
            />
            <label
              htmlFor="userDropdown"
              className={`${styles["navbar__link"]} ${styles["navbar__label"]}`}
            >
              <img
                src={userDefaultImg}
                alt="demo-image"
                className={styles["navbar__label-img"]}
              />
            </label>
            <ul
              className={`${styles["navbar__list"]} ${styles["navbar__list--sub"]}`}
            >
              <li className={styles["navbar__item"]}>
                <NavLink
                  to="/signUp"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar__link"]} ${styles["navbar__link--active"]}`
                      : styles["navbar__link"]
                  }
                >
                  SignUp
                </NavLink>
              </li>
              <li className={styles["navbar__item"]}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["navbar__link"]} ${styles["navbar__link--active"]}`
                      : styles["navbar__link"]
                  }
                >
                  SignIn
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles["navbar__toggle"]}>
          <span className={styles["navbar__toggle-icon"]}>&nbsp;</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
