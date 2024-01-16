
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../content/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div  className=" mx-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
