import {content} from "../Content";
import linkdin_icon from "../assets/images/Hero/linkedin.png";
import github_icon from "../assets/images/Hero/github.png";
import twitter_icon from "../assets/images/Hero/twitter.png";
import leetcode_icon from "../assets/images/Hero/leetcode.png";


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
          <a href="https://docs.google.com/document/d/1v27S1AvZxka8XqyUeB3DdXrZnkUNBg8y31LUWOiLYDs/edit?usp=sharing"><button className="btn"> {hero.btnText}</button></a>
          
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
};

export default Hero;
