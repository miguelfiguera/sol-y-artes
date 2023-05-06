// this may need uniqid()
import uniqid from 'uniqid';
import photoSolla from '../graphic_resources/profile_pictures/victorSolla.png'
import photoYoha from '../graphic_resources/profile_pictures/Yohangelly De La Rosa Profesora de piano, canto y lenguaje.png'
import photoYohan from '../graphic_resources/profile_pictures/photo1683217769.jpeg'
import photoRebeca from '../graphic_resources/profile_pictures/RebecaUgas.png'



const teachers = [

  {    id:uniqid(),
    photo:photoYoha,
    name:"Yohangelly De La Rosa",
    resume:'Soy docente de canto y piano, egresada de Filosofía y Educación de la UCV, mi formación musical la tuve en el Conservatorio Juan José Landaeta y UNEARTE. Poseo una larga trayectoria de más de quince años en la enseñanza musical: talleres de estimulación musical pre y post natal, kinder musical, piano y canto con todas las edades. ',
    resume2:'He desarrollado estrategias de enseñanza ajustadas a las necesidades e intereses de los alumnos. Te invito a guiarte en el camino de la música en el que además de desarrollar recursos técnicos e interpretativos vivirás la experiencia de hacer música en ensamble, la oportunidad de grabar tus mejores interpretaciones y participar en los recitales del año. ',
    instagram:'https://www.instagram.com/gelly.rosae/',
    youtube:'',
},
{
    id:uniqid(),
    photo:photoSolla,
    name: "Victor Solla",
    resume:
      "Egresado del conservatorio nacional de música Juan José Landaera mención composición, donde también di clases de guitarra, ensamble jazz, armonía y teoría y solfeo; además soy egresado del Instituto universitario de música (IUDEM-UNEARTE) mención guitarra jazz. Tengo más de 25 años de carrera como docente y guitarrista interprete.",
    resume2:
      " Ofrezco mis conocimientos para acompañarte en esta área profesional como músico y creativo, sea por diversión o por carrera. Podemos trabajar en la etapa inicial y avanzada con el instrumento: interpretación, técnica, sweep picking, tremolo picking, acordes, melodías, solos, improvisación, composición, ensambles grupales y grabación en estudio; Teoría, lectura, escritura y armonía aplicada al instrumento. Soy especialista en guitarra eléctrica y acústica aunque también juego con la batería, bajo y piano.",
    instagram: "https://www.instagrem.com/salsadesolla",
    youtube: "https://www.youtube.com/",
  },
{id:uniqid(),
photo:photoYohan,
name:'Yohannazareth De La Rosa',
resume:'',
resume2:'',
instagram:'',
youtube:'',
},
{id:uniqid(),
photo:photoRebeca,
name:"Rebeca Ugas",
resume:'',
resume2:'',
instagram:'',
youtube:'',
}
];

export function theTeachers() {
  return teachers;
}


const Services=[{}]