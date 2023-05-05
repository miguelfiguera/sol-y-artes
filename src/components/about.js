import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {useState} from 'react'


export function About() {

  const [viewport,setViewport] = useState(window.innerWidth)

  window.addEventListener('resize',()=>{
    setViewport(window.innerWidth)
  })


  function toggleCollapsed(){
    if(viewport<995){ 
    let navbar=document.getElementById('navbarNavDropdown')
    let button=document.getElementById('buttonOfAbout')

    navbar.classList.toggle('show')
    button.classList.toggle('collapsed')}
  }
  

  const lightPurple='#581c87'
  const darkOrange='#c2410c'
  const darkPurple='#3b0764'

  const stylingDark={
    color:darkPurple
  }


  return (
    <div className="container">
      <div id="header"></div>
      <div className="row ">
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
          <div className="container-fluid">
            <button
              id='buttonOfAbout'
              className="navbar-toggler sticky-top"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#vision" onClick={toggleCollapsed}>
                  Visión
                  </Link></strong>
                </li>
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#mision"onClick={toggleCollapsed}>
                  Misión
                  </Link></strong>
                </li>
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#ofrecemos" onClick={toggleCollapsed}>
                  Oportunidades
                  </Link></strong>
                </li>
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#contenido"onClick={toggleCollapsed}>
                  Contenido
                  </Link></strong>
                </li>
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#acuerdos"onClick={toggleCollapsed}>
                  Acuerdos
                  </Link></strong>
                </li>
                <li className="nav-item">
                  <strong><Link className="nav-link" to="/sol-y-artes/about#header"onClick={toggleCollapsed}>
                  Top Page
                  </Link></strong>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      

        <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div id="vision" className="row mt-3 border-bottom border-dark">
            <h2 style={stylingDark}> Visión</h2>
            <p style={stylingDark} >
              Tenemos la certeza con base a estudios científicos y humanísticos
              de que el estudio de las artes musicales tiene una fuerte
              influencia en el proceso del desarrollo cognitivo, psicomotor y
              socio-afectivo en el ser humano y adicionalmente ayuda a
              desarrollar la sensibilidad, la creatividad y el pensamiento
              crítico.{" "}
            </p>
          </div>
          <div id="mision" className="row mt-3 border-bottom border-dark">
            <h2 style={stylingDark}> Misión</h2>
            <p style={stylingDark}>
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
            <h2 style={stylingDark}> ¿Qué ofrecemos?</h2>{" "}
            <ol className="ms-5 me-5">
              <li style={stylingDark}>
                Clase individual de instrumentos (teclado, canto, guitarra,
                bajo, batería, violín) con lenguaje-armonía musical aplicados y
                ensamble. No es indispensable poseer el instrumento (en la clase
                a domicilio).{" "}
              </li>{" "}
              <br />
              <li style={stylingDark}>
                Talleres de instrumento (no aplica batería), de estimulación
                musical pre-natal, de estimulación musical post natal (4 a 24
                meses), de estimulación musical (2-3 años), de iniciación
                musical (4-7 años).
              </li>
              <br />
              <li style={stylingDark}>
                El servicio educativo es durante los 365 días del año (sólo
                aplica para clases online y a domicilio).
              </li>
              <br />
              <li style={stylingDark}>
                Las clases en sede cumplen con el resguardo de las fechas
                feriadas (no abren las instalaciones) y/o decretos
                gubernamentales.
              </li>
              <br />
              <li style={stylingDark}>Ofrecemos múltiples paquetes y promociones.</li>
              <br />
              <li style={stylingDark}>
                Organizamos conciertos anuales presenciales en una sala acordada
                con los representantes u online -dependiendo de las
                circunstancias- (mes de diciembrejulio).{" "}
              </li>
              <br />
              <li style={stylingDark}>
                Organizamos clases abiertas online o en la sede en fechas
                especiales (día de la amistad, día de la madre, día del padre)
                previo acuerdo con los docentes, alumnos y representantes.
              </li>
              <br />
            </ol>
          </div>
          <div id="contenido" className="row mt-3 border-bottom border-dark">
            <h2 style={stylingDark}> Contenido de las Clases de Música</h2>{" "}
            <ol className="ms-5 me-5">
              <div className="row align-items-start mt-3 border-right border-dark">
                <div className="col me-3">
                  <li style={stylingDark}> Comprensión del lenguaje musical</li>
                  <br />
                  <li style={stylingDark}>Desarrollo y comprensión de la lectoescritura musical</li>
                  <br />
                  <li style={stylingDark}>
                    Desarrollo del oído rítmico y auditivo (melódico y armónico)
                  </li>
                  <br />
                  <li style={stylingDark}>Desarrollo de la entonación</li>
                  <br />
                  <li style={stylingDark}>Desarrollo de la lateralidad rítmica corporal</li>
                  <br />
                  <li style={stylingDark}>
                    Aplicación de los recursos teóricos musicales al instrumento
                  </li>
                  <br />
                  <li style={stylingDark}>
                    Desarrollo de la independencia motriz de los dos hemisferios
                    cerebrales para el ensamblaje de ambas manos y la soltura de
                    los dedos con el instrumento
                  </li>
                  <br />
                  <li style={stylingDark}>Desarrollo del dominio del pulso</li>
                  <br />

                  <li style={stylingDark}>
                    Desarrollo de habilidades técnicas (ritmización,
                    intervalos-elasticidad, mecanismo, velocidad, matices,
                    cambios de métrica) como recursos para las obras musicales.
                  </li>
                  <br />
                </div>
                <div className="col">
                  <li style={stylingDark}>
                    Montaje de repertorio diversos en las áreas de interés del
                    estudiante y lo recomendado por el profesor (académica,
                    popular o tradicional)
                  </li>
                  <br />
                  <li style={stylingDark}>
                    Desarrollar la experiencia sensorial entorno a la
                    comunicación de la obra a través de la interpretación y el
                    conocimiento de los momentos históricos-significativos de
                    las obras
                  </li>
                  <br />
                  <li style={stylingDark}>
                    Manejo de la concentración para la ejecución en público o
                    privado
                  </li>
                  <br />
                  <li style={stylingDark}>
                    Ensambles musicales (piano a 4 manos, piano-voz, ensamble
                    popular)
                  </li>
                  <br />
                  <li style={stylingDark}>
                    Participación en los conciertos anuales presenciales en una
                    sala acordada con los representantes u online dependiendo de
                    las circunstancias (mes de diciembre- julio).
                  </li>
                  <br />
                  <li style={stylingDark}>
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
            <h2 style={stylingDark} className="text-center mt-4">Acuerdos</h2> <br />
            <div className="mt-4 row align-items-start">
              <div className="col">
                <h3 style={stylingDark} className="text-center">Academicos: </h3>
                <ul className="ms-5 me-5">
                  <li style={stylingDark}>
                    Poseer el material indicado por el docente: libros (copia o
                    pdf), artículos escolares (colores, lápices, cuaderno u
                    hojas pentagramadas, agenda o cuaderno de línea,
                    instrumento-no limitativo).
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>
                    El representante debe estar en los alrededores de la clase
                    en caso de que se presente algún requerimiento por parte del
                    docente o el alumno.
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>
                    Dar apoyo en la semana en la práctica del instrumento,
                    repertorio o realización de las actividades asignadas por el
                    docente.
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>Participar en los recitales organizados en el año</li>
                </ul>
              </div>
              <div className="col">
                <h3 style={stylingDark} className="text-center">Horario:</h3>
                <ul className="ms-5 me-5">
                  <li style={stylingDark}>
                    Por cuestiones de dificultades de reprogramación horaria
                    para la recuperación de las clases el alumno y el docente
                    deben hacer lo posible para cumplir con las actividades en
                    el horario acordado. Situaciones de faltas especiales deben
                    ser avisadas al docente tres horas antes para acordar una
                    posible recuperación. (sólo aplica para clases online o a
                    domicilio)
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>
                    En caso de inasistencia del docente en una clase del horario
                    oficial acordado entre las partes, se descuenta del
                    siguiente pago mensual.{" "}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3 style={stylingDark} className="text-center">Administrativos:</h3>
                <ul className="ms-5 me-5">
                  <li style={stylingDark}>
                    Contribuir con los honorarios respectivos para alquiler de
                    sala en los recitales (de ser necesario).
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>
                    Cumplir con los pagos en las fechas de corte de cada alumno.
                  </li>{" "}
                  <br />
                  <li style={stylingDark}>
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
