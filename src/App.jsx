// import components
import Skills from "./components/Skills";
<<<<<<< HEAD
=======

>>>>>>> 5334bc87e626f655204809058ac5317667de0458
import { AnimatePresence } from 'framer-motion';
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import { lazy, Suspense } from 'react';
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.jsx';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home.jsx";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    
      <AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
          <Navbar/>
        <Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
						

						</Routes>
            </Suspense>
            <Skills/>
            <Experiences/>
            <Contact/>
            <Footer/>
				</Router>
      
			</div>
      
		</AnimatePresence>
     
    
  );
};

export default App;
