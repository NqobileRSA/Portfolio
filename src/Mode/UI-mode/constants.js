import youtubecloneImage from "../../assets/images/youtube.png";

import artgeneratorImage from "../../assets/images/nqobilepicsearch.png";

import weatherappImage from "../../assets/images/weather.png";

const navlinks = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Project",
    path: "#project",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];
const socials = [
  {
    id: "Github",
    link: "https://github.com/NqobileRSA",
    icon: "bi bi-github",
  },
  {
    id: "LinkedIn",
    link: "https://www.linkedin.com/in/nqobile-ngobeni-57b040237/",
    icon: "bi bi-linkedin",
  },
  {
    id: "Whatsapp",
    link: "https://wa.me/+27618187972",
    icon: "bi bi-whatsapp",
  },
  {
    id: "Facebook",
    link: "#",
    icon: "bi bi-facebook",
  },
  {
    id: "Twitter",
    link: "#",
    icon: "bi bi-twitter-x",
  },
];
const skills = [
  { id: "1", skill: "HTML" },
  { id: "2", skill: "JavaScript" },
  { id: "3", skill: "CSS" },
  { id: "4", skill: "React.js" },
  { id: "5", skill: "Node.js" },
  { id: "6", skill: "Express.js" },
  { id: "7", skill: "MongoDB" },
  { id: "8", skill: "Redux" },
  { id: "9", skill: "Bootstrap" },
  { id: "10", skill: "Tailwindcss" },
  { id: "11", skill: "Typescript" },
];
const projects = [
  {
    title: "Simple Youtube Clone",
    link: "#",
    image: youtubecloneImage,
  },
  {
    title: "Simple Weather App",
    link: "#",
    image: weatherappImage,
  },
  {
    title: "Simple Art Generator",
    link: "#",
    image: artgeneratorImage,
  },
];
const archiveData = [
  {
    title: "Chat App",
    description:
      "A real-time chat application built with MongoDB, React, Express, and Node.js. This application enables users to engage in real-time conversations with each other.",
    listItems: ["MongoDB", "React", "Express", "Node.js"],
    link: "https://github.com/NqobileRSA/Chat-App",
  },

  {
    title: "YouTube Clone",
    description:
      "A YouTube clone application built using React, Bootstrap, CSS3, and Axios. This project aims to replicate the core functionalities of YouTube, such as browsing and watching videos.",
    listItems: ["React", "Bootstrap", "CSS3", "Axios"],
    link: "#",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website built with vanilla HTML5, CSS3, and JavaScript (ES6+). Showcase your skills, projects, and experiences in a sleek and professional manner.",
  //   listItems: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  //   link: "#",
  // },
  {
    title: "Simple Calculator",
    description:
      "A basic calculator application developed with vanilla HTML5, CSS3, and JavaScript (ES6+). Perform arithmetic operations like addition, subtraction, multiplication, and division.",
    listItems: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    link: "https://github.com/NqobileRSA/simple-calculator",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game implemented using vanilla HTML5, CSS3, and JavaScript (ES6+). Enjoy the classic game of Tic Tac Toe against a friend or the computer.",
    listItems: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    link: "https://github.com/NqobileRSA/tic-tac-toe",
  },
  {
    title: "Dating App",
    description:
      "A dating application built with MongoDB, React, Express, and Node.js. This app provides users with a platform to connect with potential partners based on their preferences and interests.",
    listItems: ["MongoDB", "React", "Express", "Node.js"],
    link: "https://github.com/NqobileRSA/Dating-app",
  },
];
const services = [
  {
    title: "Web Development",
    str: "webdevelopment",
    icon: "bi bi-code-slash",
  },
  {
    title: "App Development",
    str: "appdevelopment",
    icon: "bi bi-phone",
  },
  {
    title: "UX Design",
    str: "ux/ui",
    icon: "bi bi-layout-text-window-reverse",
  },
];
export { navlinks, socials, skills, projects, archiveData, services };
