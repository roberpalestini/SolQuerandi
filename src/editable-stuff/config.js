// Navigation Bar SECTION
const navBar = {
  show: true,
  logo: require("../assets/img/typologo_solquerandi.png"),
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sol",
  middleName: "",
  lastName: "Querandi",
  message: "Un lugar privilegiado donde la Naturaleza, tranquilidad, y el sonido del mar son los únicos testigos.",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  icons: [
    {
      image: "fa-airbnb",
      url: "https://github.com/hashirshoaeb",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-booking",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: false,
  heading: "Parque Lago",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:`Mar de Cobo, Buenos Aires, Argentina: 
    Parque Lago es un lugar privilegiado donde la Naturaleza, tranquilidad, y el sonido del mar son los únicos testigos. A 100 m de la playa de 4 km que une Parque Lago con Mar Chiquita. Se puede recorrere a pie o en vehículo. Lugar especial para tomar sol , pescar, y hacer deportes como kayak, surf o kite. Nos encontramos solo a 700 m del centro de Mar de Cobo. Alli encontramos varios supermercados, panaderias, cervecerías, etc.
    Si buscamos mas movimiento, a 30 km tenemos a Mar del Plata, minada de espectáculos, teatro, recitales y gastronomia.`,
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Nuestras Cabañas",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Acerca de este alojamiento",
  message:
  "Sol Querandi se encuentra emplazada frente a la reserva que forma parte de la albusfera de Mar chiquita (patrimonio de la Unesco), a pasos de la playa, todo lleno de naturaleza, sol y mucha paz. A 30 km. de Mar del Plata, a 5 km. de Mar Chiquita y a 75 km. de Villa Gessell. \n\nParque Lago: \nUn lugar privilegiado donde la Naturaleza, tranquilidad, y el sonido del mar son los únicos testigos. A 100 m. de la playa de 4 km. que une Parque Lago con Mar Chiquita. Se puede recorrer a pie o en vehículo. \nLugar especial para tomar sol, pescar, y hacer deportes como kayak, surf o kite. Nos encontramos solo a 700 m. del centro de Mar de Cobo. Alli encontramos varios supermercados, panaderias, cervecerías, etc. \n\nSi buscamos mas movimiento, a 30 km. tenemos a Mar del Plata, minada de espectáculos, teatro, recitales y gastronomia.",
  images: [
    { 
      img: require('../assets/img/booking_award.jpg'),
      // label: "GOOGLE COMENTARIOS", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require('../assets/img/frente_slider.jpg'),
      // label: "BOOKING AWARD", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"615"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Durante tu estadía",
  message:
    `Estaremos siempre a disposicion del huesped, brindando servicio de limpieza (antes del ingreso a su salida) y ropa blanca
    Índice de respuesta: 100%
    Tiempo de respuesta: en pocas horas`,
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
const blog = {
  show: true,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
