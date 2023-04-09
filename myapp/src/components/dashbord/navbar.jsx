import React from "react";

import { Link } from "react-router-dom";
export default function navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar navbar-dark bg-dark">
        <div
          className="container-fluid  "
          style={{ fontFamily: "sans-serif", fontSize: "20px" }}
        >
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: "bold", marginLeft: "12px" }}
            s
          >
            जी.प.प्रा.क.शाळा बरबाडा
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/gallary"
                >
                  Gallary
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                className="btn btn-outline-light"
                to="/index"
                style={{ marginRight: "10px" }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
