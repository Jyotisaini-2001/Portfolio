
import useThemeSwitcher from '../hook/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../assets/images/Hero/hero.jpg';
import developerDark from '../assets/images/Hero/hero.jpg';

import { motion } from 'framer-motion';


<<<<<<< HEAD
const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase" data-aos="fade-right"
				>
					Hi, I am Jyoti
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left text-[rgba(183,197,211)]  md:text-4xl text-3xl !leading-relaxed font-Paprika" data-aos="fade-left"
				>
					A Frontend Developer & Coding Enthusiast
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Stoman-Resume.pdf"
						href="https://drive.google.com/file/d/1hKxvCQF-5xbKCqbaRQ-IA3FZeuY3Uh9u/view?usp=sharing"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100 ">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer" className='w-screen mt-12'
				/>
			</motion.div>
		</motion.section>
	);
=======
const Hero = () => {
  const {hero} =content;
  
  return(
   <section id="home" className="overflow-hidden">
    <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center ">
     
      <div  data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-teal-500 bottom-0">
             
            <div className=" flex flex-col items-center">
              <h2 >Jyoti Saini</h2>
               <img src={hero.image}  alt="" className="w-[10vw] min-w-[10rem] border-2 border-none rounded-[50px] pt-5 "/>
             </div>
            <div className=" right-0 pt-4 gap-5 flex justify-center">
            
              
              <a href="https://www.linkedin.com/in/jyoti-saini-b31752203/ "> <img src={linkdin_icon}  alt="Linkedin"  className="w-10 "/></a>
             <a href="https://github.com/Jyotisaini-2001"> <img src={github_icon} alt=""  className="w-10 sm:cursor-pointer"/></a>
             <a href="https://twitter.com/Jyotisa60592422"> <img src={twitter_icon} alt=""  className="w-10 sm:cursor-pointer"/></a>
             <a href="https://leetcode.com/jyoti042023/">  <img src={leetcode_icon} alt=""  className="w-10 sm:cursor-pointer rounded-[12px]"/></a>
            
            </div>
     {/* <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[green]">
     {hero.firstName}{" "}
     <span className="text-dark_primary">
      {hero.LastName}
     </span>
     </h1> */}
     
      </div>
      <div className=" pb-60 pr-7 pt-5" data-aos="fade-down">
        
        <h2>
          {hero.title}
        </h2>
        <br/>
        <div className="flex justify-end">
          <a href="https://drive.google.com/file/d/1oiot25ndF_EVqqucnT3_Hsuu6Oh-VR87/view"><button className="btn"> {hero.btnText}</button></a>
          
        </div>
        <div  className="flex flex-col gap-5 mt-10">
          {
            hero.hero_content.map((content,i)=>(
              <div key={i}
              data-aos="fade-down"
                data-aos-delay={i * 300}
                 className={`flex items-center w-80 gap-5
              ${i === 1 && " flex-row-reverse text-right"}  `}>
                   <h3>{content.count}</h3>
                   <p>{content.text}</p>
              </div>
            ))
          }
        </div>
      </div>
     <div className="mid: h-[28rem] h-96">
      {/* <img src={hero.image} 
      data-aos="slide-up"
      alt="..." className="h-full object-cover rounded-3xl" /> */}
     </div>
    </div>
   
    </section>
    );
>>>>>>> eb7675939fbc3790e5e680c3b99a53ed614c79c0
};

export default AppBanner;
