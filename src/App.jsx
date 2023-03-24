// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";


import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
       <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Jyoti Saini</h6>
        <p> @All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
