import React from "react";
import Plan1 from "../graphic_resources/Flyer cartel para clases de guitarra instrumentos música extraescolares fotográfico blanco y negro.png";
import Plan2 from "../graphic_resources/Instagram story  instrumentos musicales oscuro blanco y negro .png";
import Plan3 from "../graphic_resources/jazz club flyer -1 (2).png";
import video from "../graphic_resources/video5082427284611138643.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

export function Home() {
  const lightPurple = "#581c87";
  const darkOrange = "#c2410c";
  const darkPurple = "#3b0764";

  const stylingDark = {
    color: darkPurple,
  };

  return (
    <div
      className="container shadow-lg rounded-3 pt-5 mt-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="text-center rounded-3">
        <h1
          style={{ color: darkOrange, scale: "1.5", width: "calc(100%/1.5)" }}
          className="my-3 mx-auto"
        >
          Escuela Solyartes
        </h1>
      </div>

      <Video
        autoPlay
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster="http://sourceposter.jpg"
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={video} type="video/mp4" />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </Video>

      <div className="container">
        <div className="row align-items-center  border-bottom border-dark">
          <img
            src={Plan3}
            alt="Clases de guitarra, informacion"
            className="col-3 px-0"
          />
          <div className="col">
            {/* <h2 style={stylingDark}>title</h2>*/}
            <h2 style={stylingDark}>
              <strong>10 Bondades de la música</strong>
            </h2>

            <ol style={stylingDark}>
              <li>Contribuye en la  autoexploración del talento y gestión de propias creaciones.</li>
              <li>Contribuye con la identidad y seguridad personal</li>
              <li>Mejora la atención y la concentración.</li>
              <li>Reduce el estrés y la ansiedad.</li>
              <li>Mejora el estado de ánimo</li>
              <li>Fortalece relaciones interpresonales</li>
              <li>Contribuye en la expresión de sentimientos</li>
              <li>Mejora la capacidad analítica.</li>
              <li>Fortalece el pensamiento crítico</li>
              <li>
                Contribuye a tener una actitud organizada y metódica frente al
                estudio.
              </li>
            </ol>
          </div>
          <div className="row align-items-center mb-5  border-top border-dark">
            <div className="col">
              {/* <h2 style={stylingDark}>title</h2>*/}
              <h2 style={stylingDark}>
                <strong> ¿Sabías que…</strong>
              </h2>

              <p style={stylingDark}>
                En la estimulación musical prenatal, el bebé logra reconocer la
                voz de la madre y contribuye a una profunda respiración
                brindando un estado de calma durante el período de gestación y
                posterior a su nacimiento?
              </p>
            </div>
            <img
            src={Plan1}
            alt="Clases de guitarra, informacion"
            className="col-3 px-0"
          />

          </div>
        </div>

        <div className="row align-items-center  mb-5  border-bottom border-dark">
        <img
            className="col-3 px-0"
            src={Plan2}
            alt="Instrumentos musicales"
          />
          <div className="col">
            {/* <h2 style={stylingDark}>title</h2>*/}
            <h2 style={stylingDark}>
              
              <strong> ¿Sabías que…</strong>
            </h2>

            <p style={stylingDark}>
              La música en la edad infantil fortalece el aprendizaje, contribuye
              a mejorar su lenguaje, y favorece su discriminación auditiva. La
              repetición de canciones incorpora vocabulario nuevo, el ritmo les
              ayuda a repetir frases complejas y desarrollar su habilidades
              psicomotoras, la interacción individual y social contribuye en el
              desarrollo afectivo del infante. Un aprendizaje divertido,
              dinámico y espontáneo de la experiencia musical es un abanico de
              crecimiento personal aplicable para el desarrollo en general de la
              vida?
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
