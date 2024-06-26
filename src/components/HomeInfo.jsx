import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

  const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
  )

  const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Hamza</span>
            <br/>
            A software engineer based in India.
        </h1>
    ),

    2: <InfoBox
            text="Worked with many technologies and frameworks"
            link="/about"
            btnText="Know More"
            />
            ,
    3: <InfoBox
            text="Created many projects and looking for more opportunities"
            link="/projects"
            btnText="Checkout my GitHub"
    />,
    4: <InfoBox
            text="Have an opprtunity for me? I'm just a message away!"
            link="/contact"
            btnText="Send A Message"
    />
  }



  const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null
  }


export default HomeInfo
