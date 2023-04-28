import React from "react";
import { Link } from "react-router-dom";
export function Navbar({open}) {

  return (
    <nav className="navbar  navbar-expand-lg  bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sol y Artes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/SolyArtes/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SolyArtes/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SolyArtes/galery">
                Galería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={open}>
                Contacto
              </Link>
            </li>

          </ul>
          <span className="navbar-text">
            <strong>
              <em>Hacemos sonar tus ideas!</em>
            </strong>
          </span>
        </div>
      </div>
    </nav>
  );
}
