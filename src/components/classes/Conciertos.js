import React from "react";

export default function Conciertos() {
  const stylingDark = {
    color: "#3b0764",
  };
  return (
    <div className="container bg-light shadow-lg rounded-3" style={stylingDark}>
      <img src="" alt="" />

      <h1>Conciertos</h1>
      <div className="row">
        <p>
          En diciembre y julio se realizan las muestras musicales de todas las
          cátedras (individuales y ensambles) con la importancia de compartir
          con la comunidad de allegados el quehacer musical; así como también
          desarrollar la confianza en el estudiante de interactuar con otros y
          transmitir su experiencia. Estas muestras son en modalidad virtual y
          presencial (privado o público según la planificación del espacio).
        </p>
      </div>
    </div>
  );
}
