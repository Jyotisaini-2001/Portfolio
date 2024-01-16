import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../hook/useThemeSwitcher';
// import HireMeModal from '../HireMeModal';
import logoLight from '../assets/images/Hero/logo-light.svg';
import logoDark from '../assets/images/Hero/logo-dark.svg';
import { motion } from 'framer-motion';
// import Button from '../reusable/Button';
import { useNavigate } from "react-router-dom";
const Theme = () => {
	
	const [activeTheme, setTheme] = useThemeSwitcher();

	const navigate = useNavigate();
	const handleClick = () => {
		// Navigate to the "/projects/single-project" route
		navigate('/');
	  };

	

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center mt-4">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
                    {/*  */}
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-500 hover:text-gray-100 text-xl" />
						)}
					</div>

					
				</div>

				

				

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
				

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal */}
		
		</motion.nav>
	);
};

export default Theme;
