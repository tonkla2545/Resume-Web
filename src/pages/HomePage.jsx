import React, { useRef } from 'react'
import Home from '../components/Home'
import Aboutme from '../components/Aboutme'
import Skill from '../components/Skill'
import Nav from '../components/Nav'
import Contactme from '../components/Contactme'
import Portfolio from '../components/Portfolio'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const HomePage = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Nav
        onHomeClick={() => scrollTo(homeRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onSkillClick={() => scrollTo(skillsRef)}
        onExperienceClick={() => scrollTo(experienceRef)}
        onPortClick={() => scrollTo(portRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <Home
        onAboutClick={() => scrollTo(aboutRef)}
        onSkillClick={() => scrollTo(skillsRef)}
        onExperienceClick={() => scrollTo(experienceRef)}
        onPortClick={() => scrollTo(portRef)}
        onContactClick={() => scrollTo(contactRef)}
        homeRef={homeRef}
      />
      <Aboutme aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef}/>
      <Skill skillsRef={skillsRef} />
      <Portfolio portRef={portRef}/>
      <Contactme contactRef={contactRef}/>
      <Footer/>
    </div>
  )
}

export default HomePage
