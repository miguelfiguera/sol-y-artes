import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export function About() {
  const classForNavAnchors = "text-decoration-none text-reset";
  return (
    <div className="container">
      <div id="header"></div>
      <div className="row align-items-start">
        <nav className="col-2 sticky-top">
          <button className="btn btn-secondary me-3 ms-3 mb-3">
            <Link to="/sol-y-artes/about#vision" className={classForNavAnchors}>
              Visión
            </Link>
          </button>
          <button className="btn btn-secondary mb-3 me-3 ms-3">
            {" "}
            <Link to="/sol-y-artes/about#mision" className={classForNavAnchors}>
              Misión
            </Link>
          </button>
          <button className="btn btn-secondary mb-3 me-3 ms-3">
            {" "}
            <Link to="/sol-y-artes/about#ofrecemos" className={classForNavAnchors}>
              Oportunidades
            </Link>
          </button>
          <button className="btn btn-secondary mb-3 me-3 ms-3">
            {" "}
            <Link to="/sol-y-artes/about#contenido" className={classForNavAnchors}>
              Contenido
            </Link>
          </button>
          <button className="btn btn-secondary mb-3 me-3 ms-3">
            {" "}
            <Link to="/sol-y-artes/about#acuerdos" className={classForNavAnchors}>
              Acuerdos
            </Link>
          </button>
          <button className="btn btn-secondary mb-3 me-3 ms-3">
            <Link
              to="/sol-y-artes/about#header"
              className="text-decoration-none text-reset"
            >
              Top Page
            </Link>
          </button>
        </nav>

        <div className="col">
          <div id="vision" className="row mt-3 border-bottom border-dark">
            <h2> Visión</h2>
            <p>
              Tenemos la certeza con base a estudios científicos y humanísticos
              de que el estudio de las artes musicales tiene una fuerte
              influencia en el proceso del desarrollo cognitivo, psicomotor y
              socio-afectivo en el ser humano y adicionalmente ayuda a
              desarrollar la sensibilidad, la creatividad y el pensamiento
              crítico.{" "}
            </p>
          </div>
          <div id="mision" className="row mt-3 border-bottom border-dark">
            <h2> Misión</h2>
            <p>
              Más allá del disfrute emocional que puede generar individualmente
              el estudio de las artes musicales, partimos con la idea de
              preparar a las personas que harán lo mejor para el mañana. Una de
              las cosas más importantes para el mundo es tener personas
              organizadas, sensibles, críticas e interesadas en descubrir y
              trabajar por las cosas nuevas que necesita el mundo globalizado y
              las artes se convierten en una herramienta para generar ese
              proceso.
            </p>
          </div>

          <div id="ofrecemos" className="row mt-3 border-bottom border-dark">
            <h2> ¿Qué ofrecemos?</h2>{" "}
            <ol className="ms-5 me-5">
              <li>
                Clase individual de instrumentos (teclado, canto, guitarra,
                bajo, batería, violín) con lenguaje-armonía musical aplicados y
                ensamble. No es indispensable poseer el instrumento (en la clase
                a domicilio).{" "}
              </li>{" "}
              <br />
              <li>
                Talleres de instrumento (no aplica batería), de estimulación
                musical pre-natal, de estimulación musical post natal (4 a 24
                meses), de estimulación musical (2-3 años), de iniciación
                musical (4-7 años).
              </li>
              <br />
              <li>
                El servicio educativo es durante los 365 días del año (sólo
                aplica para clases online y a domicilio).
              </li>
              <br />
              <li>
                Las clases en sede cumplen con el resguardo de las fechas
                feriadas (no abren las instalaciones) y/o decretos
                gubernamentales.
              </li>
              <br />
              <li>Ofrecemos múltiples paquetes y promociones.</li>
              <br />
              <li>
                Organizamos conciertos anuales presenciales en una sala acordada
                con los representantes u online -dependiendo de las
                circunstancias- (mes de diciembrejulio).{" "}
              </li>
              <br />
              <li>
                Organizamos clases abiertas online o en la sede en fechas
                especiales (día de la amistad, día de la madre, día del padre)
                previo acuerdo con los docentes, alumnos y representantes.
              </li>
              <br />
            </ol>
          </div>
          <div id="contenido" className="row mt-3 border-bottom border-dark">
            <h2> Contenido de las Clases de Música</h2>{" "}
            <ol className="ms-5 me-5">
              <div className="row align-items-start mt-3 border-right border-dark">
                <div className="col me-3">
                  <li> Comprensión del lenguaje musical</li>
                  <br />
                  <li>Desarrollo y comprensión de la lectoescritura musical</li>
                  <br />
                  <li>
                    Desarrollo del oído rítmico y auditivo (melódico y armónico)
                  </li>
                  <br />
                  <li>Desarrollo de la entonación</li>
                  <br />
                  <li>Desarrollo de la lateralidad rítmica corporal</li>
                  <br />
                  <li>
                    Aplicación de los recursos teóricos musicales al instrumento
                  </li>
                  <br />
                  <li>
                    Desarrollo de la independencia motriz de los dos hemisferios
                    cerebrales para el ensamblaje de ambas manos y la soltura de
                    los dedos con el instrumento
                  </li>
                  <br />
                  <li>Desarrollo del dominio del pulso</li>
                  <br />

                  <li>
                    Desarrollo de habilidades técnicas (ritmización,
                    intervalos-elasticidad, mecanismo, velocidad, matices,
                    cambios de métrica) como recursos para las obras musicales.
                  </li>
                  <br />
                </div>
                <div className="col">
                  <li>
                    Montaje de repertorio diversos en las áreas de interés del
                    estudiante y lo recomendado por el profesor (académica,
                    popular o tradicional)
                  </li>
                  <br />
                  <li>
                    Desarrollar la experiencia sensorial entorno a la
                    comunicación de la obra a través de la interpretación y el
                    conocimiento de los momentos históricos-significativos de
                    las obras
                  </li>
                  <br />
                  <li>
                    Manejo de la concentración para la ejecución en público o
                    privado
                  </li>
                  <br />
                  <li>
                    Ensambles musicales (piano a 4 manos, piano-voz, ensamble
                    popular)
                  </li>
                  <br />
                  <li>
                    Participación en los conciertos anuales presenciales en una
                    sala acordada con los representantes u online dependiendo de
                    las circunstancias (mes de diciembre- julio).
                  </li>
                  <br />
                  <li>
                    Participación en las clases abiertas online o en la sede en
                    fechas especiales (día de la amistad, día de la madre, día
                    del padre) previo acuerdo con los docentes, alumnos y
                    representantes.
                  </li>
                  <br />
                </div>
              </div>
            </ol>
          </div>

          <div id="acuerdos" className="row ">
            <h2 className="text-center mt-4">Acuerdos</h2> <br />
            <div className="mt-4 row align-items-start">
              <div className="col">
                <h3 className="text-center">Academicos: </h3>
                <ul className="ms-5 me-5">
                  <li>
                    Poseer el material indicado por el docente: libros (copia o
                    pdf), artículos escolares (colores, lápices, cuaderno u
                    hojas pentagramadas, agenda o cuaderno de línea,
                    instrumento-no limitativo).
                  </li>{" "}
                  <br />
                  <li>
                    El representante debe estar en los alrededores de la clase
                    en caso de que se presente algún requerimiento por parte del
                    docente o el alumno.
                  </li>{" "}
                  <br />
                  <li>
                    Dar apoyo en la semana en la práctica del instrumento,
                    repertorio o realización de las actividades asignadas por el
                    docente.
                  </li>{" "}
                  <br />
                  <li>Participar en los recitales organizados en el año</li>
                </ul>
              </div>
              <div className="col">
                <h3 className="text-center">Horario:</h3>
                <ul className="ms-5 me-5">
                  <li>
                    Por cuestiones de dificultades de reprogramación horaria
                    para la recuperación de las clases el alumno y el docente
                    deben hacer lo posible para cumplir con las actividades en
                    el horario acordado. Situaciones de faltas especiales deben
                    ser avisadas al docente tres horas antes para acordar una
                    posible recuperación. (sólo aplica para clases online o a
                    domicilio)
                  </li>{" "}
                  <br />
                  <li>
                    En caso de inasistencia del docente en una clase del horario
                    oficial acordado entre las partes, se descuenta del
                    siguiente pago mensual.{" "}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3 className="text-center">Administrativos:</h3>
                <ul className="ms-5 me-5">
                  <li>
                    Contribuir con los honorarios respectivos para alquiler de
                    sala en los recitales (de ser necesario).
                  </li>{" "}
                  <br />
                  <li>
                    Cumplir con los pagos en las fechas de corte de cada alumno.
                  </li>{" "}
                  <br />
                  <li>
                    Los pagos se realizan contando la primera clase del corte
                    según el paquete elegido.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
