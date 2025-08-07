import React, { useEffect, useState } from 'react'
import profileImg from '../images/IMG_1807-removebg-preview.png';
import { motion } from 'framer-motion';

import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Home = ({ homeRef, onAboutClick, onSkillClick, onExperienceClick, onPortClick, onContactClick }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setHideOnScroll(true)
        } else {
            setHideOnScroll(false)
        }
    }

    return (
        <>

            <div ref={homeRef} id="home" className={`bg-black relative flex flex-col lg:flex-row lg:min-h-screen w-full transform `}>
                {/* w-1/2แบ่งซ้ายขวาเท่ากัน */}
                <div className='bg-gray-200 relative w-full lg:w-1/2 flex flex-col justify-center items-center py-12 lg:py-0' style={{
                    clipPath: window.innerWidth >= 1024 ? 'polygon(0% 0, 100% 0%, 80% 100%, 0% 100%)' : 'none',
                }}>
                    {/* ใชั useState useEffect ก็ได้ */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='px-6 lg:px-0'
                    >
                        <div className={`transition-transform duration-500 ${hideOnScroll ? '-translate-y-full' : 'translate-y-0'}`}>
                            <div className='items-start py-2 gap-1 text-center lg:text-left'>
                                <h1 className='text-2xl lg:text-3xl pb-4 lg:pb-6'>Hi, I am</h1>
                                <p className='text-3xl md:text-4xl lg:text-5xl'>Suriyakamon Karo</p>
                                <p className='text-lg md:text-xl text-gray-600 mt-2'>Full-stack Developer</p>
                            </div>
                            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                                <button className="bg-white shadow p-3 rounded hover:cursor-pointer hover:scale-105">
                                    <a href="https://github.com/tonkla2545" target="_blank">
                                        <FaGithub />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className={` pt-6 lg:pt-10 pb-6 px-6 lg:px-10 w-full lg:w-1/2 flex flex-col order-first lg:order-last`} >
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`lg:pl-10 flex flex-wrap gap-3 lg:gap-12 font-bold items-center justify-center lg:justify-strat text-xs md:text-sm transition-transform duration-500 ${hideOnScroll ? '-translate-y-40' : 'translate-y-0'}`}>
                            <p className='text-white py-2 lg:py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white' >Home</p>
                            <p className='text-white py-2 lg:py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white' onClick={onAboutClick}>About Me</p>
                            <p className='text-white py-2 lg:py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white' onClick={onExperienceClick}>Experience</p>
                            <p className='text-white py-2 lg:py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white' onClick={onSkillClick}>Skill</p>
                            <p className='text-white py-2 lg:py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white' onClick={onPortClick}>Portfolio</p>
                            {/* <p className='text-white py-3 px-2 rounded-full hover:text-black hover:cursor-pointer hover:bg-white'>Portfolio</p> */}
                            <p className='bg-white px-3 py-2 rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={onContactClick}>Contact Me</p>
                        </div>
                    </motion.div>
                    <div className={`flex flex-col items-center lg:items-start justify-center h-full transition-transform duration-500 ${hideOnScroll ? '-translate-y-40' : 'translate-y-0'}`}>
                        <motion.img
                            src={profileImg}
                            alt="profile"
                            className={`rounded-full bg-gray-500 w-30 h-38 sm:w-60 sm:h-75 md:w-90 md:h-112 lg:w-120 lg:h-150 object-cover`}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                        {/* <img src={profileImg} alt="profile" className="rounded-full bg-gray-500 w-120 h-150  object-cover" /> */}
                    </div>
                </div>
            </div >

        </>
    )
}

export default Home
