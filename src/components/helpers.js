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
    resume: `Soy pianista y cantante. Con formación musical del Conservatorio Juan José Landaeta, la Escuela Lino Gallardo,  la Universidad Nacional Experimental de las Artes (UNEARTE) y la Fundación Vicente Emilio Sojo (FUNVES).  Licenciada en Filosofía y Educación de la Universidad Central de Venezuela (UCV). Con  trayectoria de más de quince años en la enseñanza musical de: teoría y solfeo, banda, iniciación musical, piano, historia y estética de la música en colegios de Caracas (Colegio Humboldt, Instituto Andes, Colegio Internacional de Caracas) y escuelas de música (World music- Yamaha-Estrellita, Música y Artes-Enarmonía, Escuela Experimental de música Manuel Alberto López y Conservatorio de música Juan José Landaeta).`,
    resume2: `He brindado talleres de estimulación musical pre y post natal, kinder musical, piano y canto con diversidad de edades, lo cual ha generado la capacidad de desarrollar estrategias diversas en la enseñanza musical ajustadas a las necesidades e intereses de los alumnos. `,
    resume3: `¡Te invito a guiarte en el camino de la música en el que además de desarrollar recursos técnicos e interpretativos vivirás la experiencia de hacer música en ensamble, la oportunidad de grabar tus mejores interpretaciones y participar en los recitales del año!`,
    instagram: "https://www.instagram.com/musicandoconyoha/",
    youtube: "",
  },
  {
    id: uniqid(),
    photo: photoSolla,
    name: "Victor Solla",
    resume: `Me distingo como ejecutante especialista de guitarra eléctrica y acústica. Soy egresado del Conservatorio Nacional de Música Juan José Landaeta mención composición y de la Universidad Nacional Experimental de las Artes (UNEARTE) con licenciatura en música mención guitarra jazz. `,
    resume2: `Tengo más de 25 años de carrera como docente de guitarra, bajo eléctrico, batería, ensamble, armonía, teoría y solfeo en instituciones como: el Conservatorio de música Juan José Landaeta, Complejo Cultural Los Salías, UNEARTE, y colegio El Ángel. `,
    resume3: `Ofrezco mis conocimientos para acompañarte en esta área profesional como músico y creativo, sea por diversión o por carrera. Podemos trabajar en la etapa inicial y avanzada con el instrumento: interpretación, técnica, sweep picking, tremolo picking, acordes, melodías, solos, improvisación, composición, ensambles grupales y grabación en estudio; teoría, lectura, escritura y armonía aplicada al instrumento. `,

    instagram: "https://www.instagram.com/salsadesolla",
    youtube: "https://www.youtube.com/",
  },
  {
    id: uniqid(),
    photo: photoYohan,
    name: "Yohannazareth De La Rosa",
    resume: `Soy pianista, egresado de la licenciatura en piano de la Universidad Experimental de las Artes (UNEARTE) y con formación musical pianística del Conservatorio Nacional de Música Juan José Landaeta y  la Fundación Vicente Emilio Sojo (FUNVES). Tengo más de 10 años de experiencia como profesor de música en general, piano y composición. En cuanto a la técnica pianística empleo la que me enseñaron mis maestros que estudiaron en el conservatorio de Moscú y de Viena.`,
    resume2: `En mis clases me gusta trabajar de acuerdo a las necesidades y metas que quieren alcanzar mis alumnos. Poseo una gran diversidad de repertorio musical según los gustos y géneros que deseen mis estudiantes. Y para mí, es de suma importancia que mis alumnos crezcan artísticamente según el proceso natural de cada uno de ellos y su ritmo de aprendizaje. `,
    resume3: `¡Estaré dispuesto a ayudarte en lograr tus metas artísticas en el piano, la composición y otros elementos referentes a la música!`,
    instagram: "https://www.instagram.com/clacsdmusik",
    youtube: "",
  },
  {
    id: uniqid(),
    photo: photoRebeca,
    name: "Rebeca Ugas",
    resume: `Soy Violinista, con formación musical en el Sistema de Orquestas del núcleo Carúpano, Estado Sucre y la Universidad Experimental de las Artes (UNEARTE). Con experiencia docente de violín, dirección de ensambles, formación de docentes de música y ejecutante en ensamble de cuerdas en el núcleo de Carúpano. He brindado clases de historia del arte en el Colegio Henry Clay, de violín y teoría musical en el Colegio Humbodlt y la Escuela Experimental de Música Manuel Alberto López, en la que en esta última dirigí el coro. `,
    resume2: `He desarrollado múltiples estrategias para el aprendizaje del instrumento sin límite de edad.`,
    resume3: `¡Te invito a estudiar conmigo y aprender a amar el hermoso camino de tocar un instrumento como el violín!`,
    instagram: "https://www.instagram.com/rebeca_ugas",
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
