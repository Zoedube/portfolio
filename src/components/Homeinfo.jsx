import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className="font-semibold">Zoe</span><br />
      A Software Engineer from South Africa.
    </h1>
  ),
  2: (
    <InfoBox
      text="As a self-taught developer, I've honed my skills through hands-on projects and continuous learning."
      link='/about'
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Built and led multiple projects from scratch, turning ideas into reality. Want to see more?"
      link='/projects'
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a developer? Let's connect!"
      link='/contact'
      btnText="Let's Talk"
    />
  ),
}

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo;
