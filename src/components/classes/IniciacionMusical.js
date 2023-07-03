import React from "react";

export default function IniciacionMusical() {
  const stylingDark = {
    color: '#3b0764',
  };
  return (
    <div className="container bg-light shadow-lg rounded-3" style={stylingDark}>
      <img src="" alt="" />

      <h1>Iniciación musical</h1>
      <div className="row">
        <p>
          Las actividades musicales teórico-prácticas (ligadas a un instrumento
          básico como la flauta dulce, el xilófono y teclado) son un papel
          fundamental en el desarrollo del infante entre los 4 y 7 años de edad.
          Aumenta la capacidad de memoria, la atención y la concentración; es
          una manera de desarrollar la motricidad; estimula la imaginación
          infantil; al combinarse con el movimiento, estimula los sentidos, el
          equilibrio y el desarrollo muscular; brinda la oportunidad para que
          interactúen y se expresen entre sí. Genera sensibilidad e identidad a
          través de la expresión musical en el repertorio interpretado.{" "}
        </p>
      </div>
    </div>
  );
}
