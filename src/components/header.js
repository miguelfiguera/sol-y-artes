import logo from "../graphic_resources/Logo_y_Profesores/Solyartes sin lema.png";
import { useState } from "react";

export function Header() {
  const lightPurple = "#581c87";

  const darkPurple = "#3b0764";

  const [viewport, setViewport] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  let backgroundStyle = {
    background: " rgb(54,8,91)",
    background:
      "linear-gradient(51deg, rgba(54,8,91,1) 25%, rgba(88,28,135,1) 50%, rgba(54,8,91,1) 75%)",
  };

  return (
    <div className="page-header mb-0 pb-4" style={backgroundStyle}>
      <div className="text-center pb-5 pt-5">
        <img
          src={logo}
          className="sol-y-artes-logo text-center rounded-circle shadow"
          alt="Sol y Artes Logo"
        ></img>
      </div>
    </div>
  );
}
