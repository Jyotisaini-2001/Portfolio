import { useState, createContext } from 'react';
// import { projectsData } from './projectData';
// Import images
import WebImage1 from '../assets/images/Projects/web-project-1.jpg';
import WebImage2 from '../assets/images/Projects/web-project-2.jpg';
import MobileImage1 from '../assets/images/Projects/mobile-project-1.jpg';
import MobileImage2 from '../assets/images/Projects/mobile-project-2.jpg';
import UIImage1 from '../assets/images/Projects/ui-project-1.jpg';
import UIImage2 from '../assets/images/Projects/ui-project-2.jpg';

 const projectsData = [
	{
		id: 1,
		title: 'Decision Tree Platform',
		view:"#",
		category: 'Machine Learning',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		view:"#",
		category: 'Mobile Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Project Management UI',
		view:"#",
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		view:"#",
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Note App',
		view:"https://tailwindcss.com/docs/background-color",
		category: 'Web Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Proof Commerical Website',
		view:"https://saascandy-b637e.web.app/#",
		category: 'Web Application',
		img: WebImage1,
	},
];

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
