import React from "react";

export default function Instrumentos() {
  const stylingDark = {
    color: '#3b0764',
  };
  return (
    <div className="container bg-light shadow-lg rounded-3" style={stylingDark}>
      <img src="" alt="" />

      <h1>Instrumentos</h1>
      <div className="row">
        <p>
          {" "}
          Sin límite de edad, aprender a ejecutar un instrumento musical puede
          estimular el cerebro de gran manera: incrementa la materia gris,
          mejora las conexiones entre las áreas más distanciadas del cerebro y
          mejora la memoria verbal, el razonamiento espacial y las habilidades
          de aprendizaje. A su vez, brinda organización que es necesario para la
          vida diaria. Ofrecemos clase de guitarra acústica o eléctrica, bajo
          eléctrico, batería, piano o teclado y violín. El contenido se
          distingue por la enseñanza de la teoría musical aplicada al
          instrumento, recursos técnicos interpretativos que facilitarán el
          mecanismo de la ejecución del instrumento y el repertorio según el
          interés del alumno y las recomendaciones del docente. A su vez, podrán
          participar en los ensambles y conciertos organizados por la escuela.{" "}
        </p>
      </div>
    </div>
  );
}
