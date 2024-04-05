import React from 'react'
import { skills } from '../constants'
import { useState } from 'react'
import CTA from '../components/CTA';
const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Hamza</span>

      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500 font-semibold'>
        "Hey there! 👋 I'm an aspiring software engineer based in India, 
        eagerly seeking opportunities to kickstart my career in the tech industry. 
        Although I may not have past professional experience, 
        I'm fueled by a relentless passion for learning and a drive to excel in the field."
                </p>  
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className='btn-back rounded-xl'/>
              {hoveredSkill && <p className="mt-2 text-center">{hoveredSkill}</p>}
                <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'/>
                </div>
                
            </div>
            ))}
        </div>
      </div>


      <hr className='border border-slate-500'/>
      <CTA />
    </section>
  )
}

export default About
