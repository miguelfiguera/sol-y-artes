//Profesores
import uniqid from "uniqid";
import photoSolla from "../graphic_resources/profile_pictures/victorSolla.png";
import photoYoha from "../graphic_resources/profile_pictures/Yohangelly De La Rosa Profesora de piano, canto y lenguaje.png";
import photoYohan from "../graphic_resources/profile_pictures/photo1683217769.jpeg";
import photoRebeca from "../graphic_resources/profile_pictures/RebecaUgas.png";
import photoInstrument from "../graphic_resources/Galeria_estudiantes/Canto.png";
import photoTaller from "../graphic_resources/Galeria_estudiantes/Iniciación musical 2 .png";
import photoEnsamble from "../graphic_resources/Galeria_estudiantes/Ensamble 1.png";
import photoConcierto from "../graphic_resources/Galeria_estudiantes/Conciertos 1.png";
import photoArmonia from "../graphic_resources/Galeria_estudiantes/Clases online.png";
import photoGrabaciones from "../graphic_resources/Galeria_estudiantes/Ensamble 3.png";

const teachers = [
  {
    id: uniqid(),
    photo: photoYoha,
    name: "Yohangelly De La Rosa",
    resume:
      "Soy docente de canto y piano, egresada de Filosofía y Educación de la UCV, mi formación musical la tuve en el Conservatorio Juan José Landaeta y UNEARTE. Poseo una larga trayectoria de más de quince años en la enseñanza musical: talleres de estimulación musical pre y post natal, kinder musical, piano y canto con todas las edades. ",
    resume2:
      "He desarrollado estrategias de enseñanza ajustadas a las necesidades e intereses de los alumnos. Te invito a guiarte en el camino de la música en el que además de desarrollar recursos técnicos e interpretativos vivirás la experiencia de hacer música en ensamble, la oportunidad de grabar tus mejores interpretaciones y participar en los recitales del año. ",
    instagram: "https://www.instagram.com/gelly.rosae/",
    youtube: "",
  },
  {
    id: uniqid(),
    photo: photoSolla,
    name: "Victor Solla",
    resume:
      "Egresado del conservatorio nacional de música Juan José Landaera mención composición, donde también di clases de guitarra, ensamble jazz, armonía y teoría y solfeo; además soy egresado del Instituto universitario de música (IUDEM-UNEARTE) mención guitarra jazz. Tengo más de 25 años de carrera como docente y guitarrista interprete.",
    resume2:
      " Ofrezco mis conocimientos para acompañarte en esta área profesional como músico y creativo, sea por diversión o por carrera. Podemos trabajar en la etapa inicial y avanzada con el instrumento: interpretación, técnica, sweep picking, tremolo picking, acordes, melodías, solos, improvisación, composición, ensambles grupales y grabación en estudio; Teoría, lectura, escritura y armonía aplicada al instrumento. Soy especialista en guitarra eléctrica y acústica aunque también juego con la batería, bajo y piano.",
    instagram: "https://www.instagrem.com/salsadesolla",
    youtube: "https://www.youtube.com/",
  },
  {
    id: uniqid(),
    photo: photoYohan,
    name: "Yohannazareth De La Rosa",
    resume:
      "Hola! soy Yohannazaret De La Rosa,  egresado de la licenciatura en piano de la Universidad de las Artes y con formación musical pianística del Conservatorio Nacional de Música Juan José Landaeta,  en Caracas Venezuela. Tengo más de 10 años de experiencia como profesor de música en general,  piano y composición. En cuanto a la técnica pianistica empleo la que me enseñaron mis maestros que estudiaron en el conservatorio de Moscú y de Vienna. ",
    resume2:
      "En mis clases me gusta trabajar de acuerdo a las necesidades y metas que quieren alcanzar mis alumnos. Poseeo una gran diversidad de repertorio musical según los gustos y géneros que deseen mis estudiantes. Y para mi es de suma importancia que mis alumnos crezcan artisticamente según el proceso natural de cada uno de ellos y su ritmo de aprendizaje. ¡Estaré dispuesto a ayudarte en lograr tus metas artísticas en el piano, la composición y otros elementos referentes a la música!",
    instagram: "",
    youtube: "",
  },
  {
    id: uniqid(),
    photo: photoRebeca,
    name: "Rebeca Ugas",
    resume: "",
    resume2: "",
    instagram: "",
    youtube: "",
  },
];

export function theTeachers() {
  return teachers;
}

// Para los cursos

const Services = [
  {
    fullTime: { online: "60", inOffice: "100", inHouse: "100" },
    threeQuartes: { online: "50", inOffice: "80", inHouse: "80" },
    half: { online: "40", inOffice: "N/A", inHouse: "N/A" },
    third: { online: "30", inOffice: "N/A", inHouse: "N/A" },
  },
];

const theClassObject = [
  {
    id: uniqid(),
    photo: photoInstrument,
    course: "Clases Individuales del instrumento",
    description:
      "Clase individual de instrumentos (teclado, canto, guitarra, bajo, batería, violín) con lenguaje-armonía musical aplicados y ensamble. No es indispensable poseer el instrumento (en la clase a domicilio).",
  },
  {
    id: uniqid(),
    photo: photoTaller,
    course: "Talleres de Instrumentos",
    description:
      "Talleres de instrumento (no aplica batería), de estimulación musical pre-natal, de estimulación musical post natal (4 a 24 meses), de estimulación musical (2-3 años), de iniciación musical (4-7 años).",
  },
  {
    id: uniqid(),
    photo: photoArmonia,
    course: "Lenguaje y Armonía",
    description:
      "Clases personalizadas de armonia y lenguaje musical, composicion, arreglos... AQUI HACE FALTA UNA DESCRIPCION SOBRE ESTO Ajajaja.",
  },
  {
    id: uniqid(),
    photo: photoEnsamble,
    course: "Ensamble",
    description: "INSERTE AQUI LA DESCRIPCION DETALLADA DEL CURSO",
  },
  {
    id: uniqid(),
    photo: photoConcierto,
    course: "Conciertos",
    description: "EVENTOS ANUALES PARA NUESTROS ALUMNOS Y CON NUESTROS ALUMNOS",
  },
  {
    id: uniqid(),
    photo: photoGrabaciones,
    course: "Grabaciones",
    description: "INSERTE AQUI LA DESCRIPCION DEL SERVICIO POR FAVOR",
  },
];

export function theCourses() {
  return theClassObject;
}

export function theServices() {
  return Services;
}
