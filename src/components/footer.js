import React from "react";

export function Footer() {
  let string = "Escribo por las clases de musica desde la pagina web.";
  let text = string.split(" ").join("%20");

  const darkOrange = "#c2410c";

  const styling = {
    background: "rgb(54,8,91)",
    background:
      "linear-gradient(90deg, rgba(54,8,91,1) 27%, rgba(88,28,135,1) 50%, rgba(54,8,91,1) 71%)",
  };

  return (
    <div
      className="container-fluid mt-3 border-top border-dark mb-0"
      style={styling}
    >
      <div className="row align-items-start mt-3">
        <div className="col text-center">
          <p className="text-light">
            M.F-2023{" "}
            <a href="https://github.com/miguelfiguera" className="text-reset">
              gitHub.com{" "}
              <i
                className="fa-brands fa-github fa-lg"
                style={{ color: darkOrange }}
              ></i>
            </a>
          </p>
        </div>
        <div className="col text-center">
          <h6 className="text-light">
            Whatsapp:{" "}
            <a href={`https://wa.me/584242341510?text=${text}`}>
              <i
                className="fa-brands fa-whatsapp fa-lg"
                style={{ color: darkOrange }}
              ></i>{" "}
            </a>
          </h6>
        </div>
        <div className="col text-center">
          <h6 className="text-light">
            Instagram:{" "}
            <a href="https://www.instagram.com/escuela.solyartes/">
              <i
                className="fa-brands fa-instagram fa-lg"
                style={{ color: darkOrange }}
              ></i>
            </a>
          </h6>
        </div>
        <div className="col text-center">
          <h6 className="text-light">
            Youtube:{" "}
            <a
              href="https://www.youtube.com/@victorsolla/videos"
              className="text-reset text-light"
            >
              <i
                className="fa-brands fa-youtube fa-lg"
                style={{ color: darkOrange }}
              ></i>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
