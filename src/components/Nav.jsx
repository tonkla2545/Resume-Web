import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Nav = ({ onHomeClick, onAboutClick, onSkillClick, onExperienceClick, onPortClick, onContactClick }) => {
  const [showNav, setShowNav] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    handleScroll()
  }, [])

  const handleScroll = () => {
    const scrollY = window.scrollY

    if (scrollY > 50) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }

  const handleNavClick = (callback) => {
    setMobileMenuOpen(false);
    if (callback) callback();
  };

  window.addEventListener('scroll', handleScroll)

  return (
    // <div className={`fixed w-full top-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'} py-3 px-4 lg:px-10 bg-black backdrop-blur-sm`}>
    //   <div className='lg:hidden'>
    //     <div className='flex justify-end gap-13 font-bold items-center text-sm'>
    //       <p className='py-2 lg:py-3 px-2  rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white' onClick={onHomeClick}>Home</p>
    //       <p className='py-2 lg:py-3 px-2  rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white' onClick={onAboutClick}>About Me</p>
    //       <p className='py-2 lg:py-3 px-2  rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white' onClick={onSkillClick}>Skills</p>
    //       {/* <p className='text-white'>Portfolio</p> */}
    //       <p className='border bg-white px-3 py-2 rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={onContactClick}>Contact Me</p>
    //     </div>
    //   </div>
    // </div>
    <div className={`fixed w-full top-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'
      } py-3 px-4 lg:px-10 bg-black/95 backdrop-blur-sm`}>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-lg">
            Resume
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="pt-4 pb-2">
            <div className="flex flex-col space-y-2">
              <button
                className="text-left py-3 px-4 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onHomeClick)}
              >
                Home
              </button>
              <button
                className="text-left py-3 px-4 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onAboutClick)}
              >
                About Me
              </button>
              <button
                className="text-left py-3 px-4 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onExperienceClick)}
              >
                Experience
              </button>
              <button
                className="text-left py-3 px-4 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onSkillClick)}
              >
                Skills
              </button>
              <button
                className="text-left py-3 px-4 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onPortClick)}
              >
                Portfolio
              </button>
              <button
                className="py-3 px-4 bg-white text-black hover:bg-gray-300 rounded-lg transition-colors font-bold text-sm"
                onClick={() => handleNavClick(onContactClick)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className='flex justify-end gap-8 font-bold items-center text-sm'>
          <p className='py-2 lg:py-3 px-2 rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white transition-colors' onClick={onHomeClick}>
            Home
          </p>
          <p className='py-2 lg:py-3 px-2 rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white transition-colors' onClick={onAboutClick}>
            About Me
          </p>
          <p className='py-2 lg:py-3 px-2 rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white transition-colors' onClick={onExperienceClick}>
            Experience
          </p>
          <p className='py-2 lg:py-3 px-2 rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white transition-colors' onClick={onSkillClick}>
            Skills
          </p>
          <p className='py-2 lg:py-3 px-2 rounded-full text-white hover:text-black hover:cursor-pointer hover:bg-white transition-colors' onClick={onPortClick}>
            Portfolio
          </p>
          <p className='border bg-white px-3 py-2 rounded-full hover:bg-gray-300 hover:cursor-pointer transition-colors' onClick={onContactClick}>
            Contact Me
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
