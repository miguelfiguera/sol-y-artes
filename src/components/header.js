import logo from "../graphic_resources/Logo_y_Profesores/Solyartes sin lema.png";
import { useState } from "react";

export function Header() {
  const lightPurple = "#581c87";

  const darkPurple = "#3b0764";

  const [viewport, setViewport] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  const darkOrange = "#e64d11";

  let backgroundStyle = {
    background: " rgb(54,8,91)",
    background:
      "linear-gradient(51deg, rgba(54,8,91,1) 25%, rgba(88,28,135,1) 50%, rgba(54,8,91,1) 75%)",
  };

  //tipografia banhaus para debajo del logo "Tu escuela online y a domicilio."

  return (
    <div className="page-header mb-0 pb-4" style={backgroundStyle}>
      <div className="text-center pb-5 pt-5">
        <img
          src={logo}
          className="sol-y-artes-logo text-center rounded-circle shadow-lg mb-0 pb-0 "
          alt="Sol y Artes Logo"
        ></img>
        <h1
          className="fs-3 mt-5 fw-bold fst-italic"
          style={{
            color: darkOrange,
            fontFamily: "Bauhaus Modern",
            translate: "0% 50%",
          }}
        >
          Tu escuela online y a domicilio.
        </h1>
      </div>
    </div>
  );
}
