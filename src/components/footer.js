import React from "react";

export function Footer() {
  let string = "Escribo por las clases de musica desde la pagina web.";
  let text = string.split(" ").join("%20");

  return (
    <div className="container mt-3 mb-3">

      <div className="row align-items-start">
        <div className="col text-center">
            <p>Done by Jukumary-2023 at <a href="https://github.com/miguelfiguera">gitHub.com <i class="fa-brands fa-github"></i></a></p>
        </div>
        <div className="col text-center">
        <h6>
          Whatsapp:{" "}
          <a href={`https://wa.me/4242341510?text=${text}`}>
            <i className="fa-brands fa-whatsapp"></i>{" "}
          </a>
        </h6>
        </div>
        <div className="col text-center">
        <h6>
          Instagram:{" "}
          <a href="https://www.instagram.com/escuela.solyartes/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </h6>
        </div>
      </div>
    </div>
  );
}
