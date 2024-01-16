// import { useContext } from 'react';
import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectsSingle from './ProjectsSingle';
import ProjectsFilter from './ProjectsFilter';
import { ProjectsContext } from '../../content/ProjectsContext';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section id ='projects'  className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light font-inria-serif" data-aos="fade-down"> 
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
			<h3 class="font-general-regular 
			font-Paprika text-5xl;
         text-center 
         text-secondary-dark 
         dark:text-ternary-light 
         text-sm   sm:text-base
         md:text-lg
         lg:text-xl
         xl:text-2xl
         mb-2      sm:mb-3
         md:mb-4
         lg:mb-5
         xl:mb-6
		 text-[rgba(183,197,211)]  md:text-4xl text-3xl !leading-relaxed font-paprika
">
    Search projects by title or filter by category
</h3>

				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
						
				>
					<div className="flex justify-between gap-2">
						<span
							className="
							text-dark_primary
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10" data-aos="fade-right">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectsSingle
								title={project.title}
								view={project.view}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectsSingle
								title={project.title}
								view={project.view}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectsSingle
								title={project.title}
								view={project.view}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
