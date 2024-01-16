import { Link } from 'react-router-dom';
import AppBanner from '../components/Hero';
import ProjectsGrid from './projects/ProjectsGrid';
import { ProjectsProvider } from '../content/ProjectsContext';
import Theme from './theme';
import { useNavigate } from "react-router-dom";
const Home = () => {
	
	return (
		<div id ="home" className="container mx-auto ">
			<Theme/>
			<AppBanner>
			
			</AppBanner>
			
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
			
			</div>
		</div>
	);
};

export default Home;
