//import images
import Hero_person from "../assets/images/Hero/person.jpeg";


<<<<<<< HEAD:src/content/Content.js
import Git from "../assets/images/Skills/git.png";
import github from "../assets/images/Skills/github.png";
import reactjs from "../assets/images/Skills/react.png";
import tailwind from "../assets/images/Skills/tailwind.webp"
import firebase from "../assets/images/Skills/firebase.png"
import dsa from "../assets/images/Skills/dsa.png"
import Coding from "../assets/images/Skills/c++.png";
import python from "../assets/images/Skills/python.png";
import js from "../assets/images/Skills/js.png";
import services_logo1 from "../assets/images/Services/logo1.png";
import services_logo2 from "../assets/images/Services/logo2.png";
import services_logo3 from "../assets/images/Services/logo3.png";

=======
import Git from "./assets/images/Skills/Git.png";
import github from "./assets/images/Skills/github.png";
import reactjs from "./assets/images/Skills/react.png";
import Coding from "./assets/images/Skills/c++.png";
import python from "./assets/images/Skills/python.png";
import js from "./assets/images/Skills/js.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/portfolio.png";
import project2 from "./assets/images/Projects/website.png";
import project3 from "./assets/images/Projects/weather.jpg";
import project4 from "./assets/images/Projects/project4.jpg";
import person_project from "./assets/images/Projects/person.jpeg";
>>>>>>> eb7675939fbc3790e5e680c3b99a53ed614c79c0:src/Content.js



import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#experiences",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Jyoti",
    LastName: "Saini",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "# ",
        text: "Unlock the guidance, tools, and resources you need to design your best life – then live it Every single day.",
      },
      {
        count: "# ",
        text: "The best way to predict the future is to invent it.",
      },
    ],
   
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Js",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
    
     
      {
        name: "tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "firebase",
        para: "Lorem ipsum text  dummy",
        logo: firebase,
      },
      {
        name: "DSA",
        para: "Lorem ipsum text  dummy",
        logo: dsa,
      },
      {
        name: "C++",
        para: "Lorem ipsum text  dummy",
        logo: Coding,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Github",
        para: "Lorem ipsum text  dummy",
        logo: github,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: Git,
      },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  experiences: {
    title: "Experiences",
    subtitle: "WHAT I Learn",
    experience_content: [
      {
        title: "Web-Developer",
        para: "As part of web development team for Udaan, we successfully deployed the official Udaan website. Our team worked tirelessly to ensure that the website meets the highest standards of quality and functionality.",
        logo: services_logo1,
      },
      {
        title: "CP/DSA Team Lead",
        para: "As the leader of the Competitive Programming team for the GFG Student Chapter, I am thrilled to share that our team organized a comprehensive CP/DSA session. This session was designed to equip our members with the skills and knowledge needed to excel in the world of CP/DSA.",
        logo: services_logo2,
      },
      {
        title: "Competitive Programming Member",
        para: "My Codechef ITGGV team hosted the 2022 coding fiesta. We also organized Talkscess sessions for our university students with former SDE interns and around 100+ students participated in the session. I learned how to manage problems and work as part of a team",
        logo: services_logo3,
      },
    ],
  },
<<<<<<< HEAD:src/content/Content.js
 
=======
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Portfolio Website",
        image: project1,
        link: "https://jyotisaini-2001.github.io/Portfolio/"

        

      },
      {
        title: "Udaan Magazine Website",
        image: project2,
        link: "https://udaanggv.com/"
      },
      {
        title: "Weather App",
        image: project3,

         link: "https://jyotisaini-2001.github.io/Weather-App/"
      },
      {
        title: "Note App",
        image: project4,

         link: "https://mynotes-f2239.web.app/home"
      },
    ],
  },
>>>>>>> eb7675939fbc3790e5e680c3b99a53ed614c79c0:src/Content.js
 
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "js.saini267@gmail.com",
        icon: GrMail,
        link: "mailto:js.saini267@gmail.com",
      },
      {
        text: "+91 9588837644",
        icon: MdCall,
        link: "https://wa.me/9588837644",
      },
      {
        text: "js8_99",
        icon: BsInstagram,
        link: "https://www.instagram.com/js8_99/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
