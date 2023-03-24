import { createElement, useState } from "react";
import {content} from "../Content";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "23rem",
    width:"90%",
  },
  overlay:{
    padding: "2rem",
  }
};
Modal.setAppElement('#root');
const Skills = () => {
  const {skills}=content;
  const [modalIsOpen, setIsOpen] =useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
  <section id="skills" className="min-h-fit bg-bg_light_primary">

    {/* {modal} */}
    <Modal isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}>
    <div className="flex items-center gap-2">
     <img className="h-10" src={selectSkill?.logo} alt="" />
     <h6>{selectSkill?.name}</h6>
    </div>
    <br/>
    <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
    </ul>
    <br/>
      <div className="flex justify-center">
        <button onClick={closeModal} className="btn">close</button>
      </div>
        </Modal>

    {/* {CONTENT} */}
   <div className="md:container px-5 py-14 " >
   <h2 className=" title " data-aos="fade-down">{skills.title}</h2>
   <h4 className="subtitle " data-aos="fade-down">{skills.subtitle}</h4>
   <br/>
   <div className="flex flex-wrap gap-4 justify-center">
    {
      skills.skills_content.map((skill,i)=>(
        <div key={i} 
        data-aos="fade-up"
        data-aos-delay={i * 400}
        className="bg-teal-100 sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm   rounded-md border-2 border-slate-200" >
          <img src={skill.logo} alt="..." className="w-10 group-hover:scale-125 duration-200" />
          <div>
        <h6>{skill.name}</h6>
        <p className="italic">{skill.para}</p>
        <div onClick={()=>{
          setSelectSkill(skill);
          openModal();
          
          }} className="text-xl absolute top-3 right-3">
          { createElement(skills.icon)}
        </div>
           </div>
        </div>
       
      )) }
   </div>
   </div>
    
  </section>);
};

export default Skills;
