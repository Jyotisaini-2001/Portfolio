
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../content/ProjectsContext';

const Projects = () => {
<<<<<<< HEAD
	return (
		<ProjectsProvider>
			<div  className=" mx-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
=======
  const {Projects}= content;
  return (
  <section className='bg-bg_light_primary' id='projects'>
   <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
    <div>
      <h2 className='title' data-aos="fade-down">{Projects.title}</h2>
      <h4 className='subtitle' data-aos="fade-down">{Projects.subtitle}</h4>
      <br/>
    </div>
    <div className='  flex items-center lg:flex-row flex-col-reverse gap-5 '>
{/* <img src={Projects.image} alt="" className='max-w-[45vw] min-w-[22rem]' /> */}

<Swiper
      
      pagination={{
        clickable:true,
      }}
      data-aos="fade-left"
      spaceBetween={20}
     modules={[Pagination]}
    className=" rounded-lg  max-w-lg    drop-shadow-primary  pb-20 mb-20 "
    >
      {
        Projects.project_content.map((content,i)=>(
          <SwiperSlide key={i} className="pt-5  bg-teal-100 rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit  " >
            <img src={content.image} alt=".." className='mx-auto  w-fit'/>
            <div className='flex flex-col gap-1 mt-2'>
              <h5 className='mx-auto font-bold font-poppins'>{content.title}</h5>
              <button className="font-bold text-gray self-end"> 
              <a href={content.link}>read more</a> </button>
            </div>
             
          </SwiperSlide>

        ))
      }
     
      
      
    </Swiper>
    </div>
    
    </div>
  </section>
    );
>>>>>>> eb7675939fbc3790e5e680c3b99a53ed614c79c0
};

export default Projects;
