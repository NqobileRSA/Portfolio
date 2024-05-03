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
    title: "Educare Engligh Learning Academy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
    listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "#",
  },
  {
    title: "Cyber Security Blog with live comments section",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
    listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "#",
  },
  {
    title: "ReactBD web development company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
    listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "#",
  },
];

export { navlinks, socials, skills, projects, archiveData };
