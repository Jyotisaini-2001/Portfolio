import {content} from '../content/Content';
const Experiences = () => {
  const {experiences}= content;
  return( 
    <section id='experiences'>
     <div className=" md:container  px-5 py-14">
      <h2 className="md:text-3xl text-2xl font-inria-serif text-5xl font-bold text-ternary-dark dark:text-ternary-light" ata-aos="fade-down">{experiences.title}</h2>
      <h4 className="text-[rgba(183,197,211)]  md:text-4xl text-3xl !leading-relaxed font-paprika" data-aos="fade-down">
          {experiences.subtitle}
        </h4>      
        <br/>
      <div className='flex gap-5 justify-between flex-wrap group'>
       { experiences.experience_content.map((content, i)=>(
       <div key={i} 
       data-aos="fade-up"
       data-aos-delay={i * 600}
       className="min-w-[14rem]  duration-300  cursor-pointer border-2 border-slate-200 rounded-xl text-center rounded-xl shadow-lg hover:shadow-lg cursor-pointer  bg-secondary-light dark:bg-ternary-dark p-6  flex-1 group-hover:blur-sm 
       hover:!blur-none text-ternary-dark dark:text-ternary-light">
        <img src={content.logo} alt="..."  className='mx-auto'/>
        <h6 className='my-3 font-paprika font-bold text-[#253D57] leading-8 text-ternary-dark dark:text-ternary-light'>{content.title}</h6>
        <p className='leading-7 font-poppins text-[0.95rem] text-ternary-dark dark:text-ternary-light'>{content.para}</p>
       </div>
       ))}
      </div>
      </div> 
      
      </section>
      )};

export default Experiences;
//my-3: uper-nichhe margin 3
// leading-7: line-height= 1.75

