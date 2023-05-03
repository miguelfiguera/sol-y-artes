import React from "react";
import ReactDom from "react-dom";
import logo from "../graphic_resources/Solyartes_con_lema.png";

export function Contact({ open, closeModal }) {
  if (open === false) {
    return null;
  }

  const darkOrange = "#c2410c";

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgb(54,8,91)",
    background:
      "linear-gradient(45deg, rgba(54,8,91,1) 50%, rgba(88,28,135,1) 90%)",
    padding: "50px",
    zIndex: 1000,
    maxWidth: 600,
    maxHeight: 400,
  };

  const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: 1000,
  };

  const imgSize = {
    maxWidth: 200,
    maxHeight: 200,
  };
  let string = "Escribo por las clases de musica desde la pagina web.";
  let text = string.split(" ").join("%20");

  return ReactDom.createPortal(
    <div className="container">
      <div className="overlay" style={backdropStyles}>
        <div
          className=" row container-sm align-items-start rounded-3"
          style={modalStyles}
        >
          <h1 className="text-center mb-4 text-light">Escuela Sol y Artes</h1>

          <div className="col mt-3">
            <ul>
              <li className="text-light">Telf: +58 424-2341510</li>
              <li className="text-light">Correo: solyartes@hotmail.com </li>
              <li className="text-light">
                Instagram: @escuela.solyartes
                <a href="https://www.instagram.com/escuela.solyartes/">
                  <i
                    className="fa-brands fa-instagram fa-lg"
                    style={{ color: darkOrange }}
                  ></i>{" "}
                </a>
              </li>
              <li className="text-light">
                Whatsapp:{" "}
                <a href={`https://wa.me/584242341510?text=${text}`}>
                  <i
                    className="fa-brands fa-whatsapp fa-lg"
                    style={{ color: darkOrange }}
                  ></i>{" "}
                </a>
              </li>
              <li className="text-light">
                Youtube:{" "}
                <a href="https://www.youtube.com/@victorsolla/videos">
                  <i
                    className="fa-brands fa-youtube fa-lg"
                    style={{ color: darkOrange }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <img
            className="col"
            src={logo}
            style={imgSize}
            alt="Logo Sol y Artes"
          />
          <div class="modal-footer">
            <button
              type="button"
              className="btn btn-secondary mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
