import {content} from '../Content';
const Experiences = () => {
  const {experiences}= content;
  return( 
    <section id='experiences'>
     <div className=" md:container px-5 py-14">
      <h2 className="title" ata-aos="fade-down">{experiences.title}</h2>
      <h4 className='subtitle' ata-aos="fade-down">{experiences.subtitle}</h4>
      <br/>
      <div className='flex gap-5 justify-between flex-wrap group'>
       { experiences.experience_content.map((content, i)=>(
       <div key={i} 
       data-aos="fade-up"
       data-aos-delay={i * 600}
       className="min-w-[14rem]  duration-300  cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-teal-100 p-6  flex-1 group-hover:blur-sm 
       hover:!blur-none">
        <img src={content.logo} alt="..."  className='mx-auto'/>
        <h6 className='my-3'>{content.title}</h6>
        <p className='leading-7'>{content.para}</p>
       </div>
       ))}
      </div>
      </div> 
      
      </section>
      )};

export default Experiences;
//my-3: uper-nichhe margin 3
// leading-7: line-height= 1.75
