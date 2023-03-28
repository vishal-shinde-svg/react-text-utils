import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bg-toggle="collapse"
            data-bg-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2 "
                onClick={() => {
                  props.setToggle('primary');
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2 "
                onClick={() => {
                  props.setToggle("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2 "
                onClick={() => {
                  props.setToggle("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2 "
                onClick={() => {
                  props.setToggle("warning");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.setToggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
};

// also deifned default propType

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About-Us",
};
