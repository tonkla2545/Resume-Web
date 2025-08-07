import React, { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import English from '../images/eng_18.svg'
import Line from '../images/separatorBlack 1.svg'

const Skill = ({ skillsRef }) => {
    const iconUsing = [FaHtml5, FaCss3Alt, FaJs, FaNodeJs, BiLogoMongodb, GrMysql]
    const iconColorUsing = ['FF5722', '2196F3', 'F7DF1E', '539E43', '10AA50', '00546B']
    const nameIconUsing = ['HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'MONGODB', 'MYSQL']

    const iconLearning = [FaReact, RiTailwindCssFill]
    const iconColorLearning = ['53C1DE', '00BCFF']
    const nameIconLearning = ['REACT', 'TAILWINDCSS']

    const iconFuture = [SiNextdotjs, SiTypescript]
    const iconColorFuture = ['000000', '007ACC']
    const nameIconFuture = ['NEXTJS', 'TYPESCRIPT']

    const [hideOnScroll, setHideOnScroll] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 1200) {
            setHideOnScroll(true)
        } else {
            setHideOnScroll(false)
        }
    }

    return (
        <div ref={skillsRef} className='bg-gray-200 py-20 px-4'>
            <div className={`transition-transform duration-500 ${hideOnScroll ? '-translate-y-0' : 'lg:translate-y-50 translate-y-20'}`}>
                <div className='flex justify-center'>
                    <h1 className='border-4 border-black px-6 py-4 font-bold tracking-widest text-xl'>SKILLS</h1>
                </div>

                {/* <div className='flex justify-center text-left mt-10 mb-4'>
                <h1 className='text-lg font-bold tracking-[0.2em]'>USING NOW:</h1>
            </div> */}

                <div className='py-10 lg:py-16 px-4 lg:px-8'>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl w-full'>
                            <h2 className='text-xl lg:text-lg font-bold tracking-[0.2em] text-center lg:text-left mb-8 lg:ml-15'>USING NOW:</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                {iconUsing.map((IconComponent, index) =>
                                    <div key={index} className='flex flex-col items-center'>
                                        <IconComponent color={iconColorUsing[index]} size='100px' />
                                        <p className='mt-2 text-sm font-medium'>{nameIconUsing[index]}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16 mt-10'>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl w-full'>
                            <h2 className='text-xl lg:text-lg font-bold tracking-[0.2em] text-center lg:text-left mb-8 lg:ml-15'>LEARNING:</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                {iconLearning.map((IconComponent, index) =>
                                    <div key={index} className='flex flex-col items-center'>
                                        <IconComponent color={iconColorLearning[index]} size='100px' />
                                        <p className='mt-2 text-sm font-medium'>{nameIconLearning[index]}</p>
                                    </div>
                                )}
                                <div className='flex flex-col items-center'>
                                    <img src={English} />
                                    <p className='mt-2 text-sm font-medium'>ENGLISH A1/A2</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16 mt-10'>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl w-full'>
                            <h2 className='text-xl lg:text-lg font-bold tracking-[0.2em] text-center lg:text-left mb-8 lg:ml-15 '>LEARNING NEXT:</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                {iconFuture.map((IconComponent, index) =>
                                    <div key={index} className='flex flex-col items-center'>
                                        <IconComponent color={iconColorFuture[index]} size='100px' />
                                        <p className='mt-2 text-sm font-medium'>{nameIconFuture[index]}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={Line} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skill
