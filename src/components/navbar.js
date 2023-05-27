import React from "react";
import { Link } from "react-router-dom";

export function Navbar({ open }) {
  const darkPurple = "#3b0764";
  const lightPurple = "#581c87";
  const almostWhitePurple = "#e9d5ff";

  return (
    <nav className="navbar navbar-expand-lg bg-light mt-0 pt-0 mb-0 pb-0">
      <div
        className="container-fluid mt-0 pt-0"
        style={{ backgroundColor: darkPurple }}
      >
        <Link className="navbar-brand text-light" to="/sol-y-artes/">
          Solyartes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: lightPurple }}
        >
          <i className="fa-solid fa-bars fa-lg" style={{ color: "#d4d4d4" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className=" text-light nav-link" to="/sol-y-artes/about">
                Sobre Nosotros
              </Link>
            </li>




            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="/sol-y-artes/clases" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Materias
          </Link>
          <ul className="dropdown-menu" style={{zIndex:'1040'}}>
          <li><Link className="dropdown-item" to="/sol-y-artes/clases">Todos los Cursos</Link></li>
            <li><Link className="dropdown-item" to="#">Musica Pre y Postnatal</Link></li>
            <li><Link className="dropdown-item" to="#">Iniciacion Musical</Link></li>
            <li><Link className="dropdown-item" to="#">Canto</Link></li>
            <li><Link className="dropdown-item" to="#">Instrumentos</Link></li>
            <li><Link className="dropdown-item" to="#">Teoria y armonia</Link></li>
            <li><Link className="dropdown-item" to="#">Ensambles</Link></li>
            <li><Link className="dropdown-item" to="#">Conciertos</Link></li>
            {/*<li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>*/}
          </ul>
        </li>

            <li className="nav-item">
              <Link className=" text-light nav-link" to="/sol-y-artes/teachers">
                Docentes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="text-light nav-link" to="/sol-y-artes/galery">
                Galería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light nav-link" onClick={open}>
                Contacto
              </Link>
            </li>
          </ul>
          <span className="text-light navbar-text">
            <strong style={{ color: almostWhitePurple }}>
              <em>¡Vive tu experiencia!</em>
            </strong>
          </span>
        </div>
      </div>
    </nav>
  );
}
