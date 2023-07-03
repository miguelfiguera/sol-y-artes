import React from "react";

export default function PreyPostnatal() {
  const stylingDark = {
    color: '#3b0764',
  };
  return (
    <div className="container bg-light shadow-lg rounded-3" style={stylingDark}>
      <img src="" alt="" />

      <div className="row">
        <h1>Prenatal</h1>
        <p>
          La conexión de la madre y el bebé con la música desde el cuarto mes de
          gestación es importante para el desarrollo cognitivo, afectivo,
          lúdico-social y psicomotor. La respiración consciente, la relajación
          corporal, el canto de nanas, las secuencias rítmicas básicas con
          movimiento corporal, forman parte de este hermoso trabajo que
          ofrecemos. La interacción madre-padre-hijo en la actividad musical
          genera desarrollo del vínculo, la confianza en sí mismo, identidad
          familiar, conexión de calma, reconocimiento vibratorio-sonoro y
          estimulación de movimiento.
        </p>
      </div>

      <div className="row">
        <h1>Postnatal</h1>
        <p>
          El desarrollo de actividades musicales en la etapa infante temprana 6
          meses a 3 años es importante para el desarrollo cognitivo, afectivo,
          lúdico-social y psicomotor. Actividades como el canto facilitan el
          desarrollo del habla, las secuencias rítmicas, la distinción de
          timbres (instrumentos), matices sonoros y articulaciones mediante
          juegos; así como también el compartir con otros infantes de edades
          cercanas estimula la socialización y el aprendizaje por imitación. Si
          son acompañados por un familiar cercano (mamá, papá, abuelos,
          hermanos) genera un vínculo familiar importante para el desarrollo
          social del infante.{" "}
        </p>
      </div>
    </div>
  );
}
