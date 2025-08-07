import React, { useEffect, useState } from 'react'
import Line from '../images/separatorBlack 1.svg'

const Experience = ({ experienceRef }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 900) {
            setHideOnScroll(true)
        } else {
            setHideOnScroll(false)
        }
    }

    return (
        <div ref={experienceRef} className='bg-gray-200'>
            <div className={`transition-transform duration-500 ${hideOnScroll ? 'translate-y-0' : 'translate-y-20 lg:translate-y-[200px]'}`}>

                <div className={`flex flex-col items-center justify-center text-center gap-8 py-20 px-4`}>
                    <h1 className='border-4 border-black px-6 py-4 font-bold tracking-widest text-xl uppercase'>Experience</h1>
                    <div className='max-w-3xl break-words text-gray-700 flex flex-col'>
                        <p className='leading-relaxed text-justify'>
                            <strong>เม.ย. - พ.ค. 2566 (2 เดือน) ฝึกงานตำแหน่ง Back-end Developer</strong><br />
                            บริษัท ADC Microsystems
                        </p>
                        <ul className='list-disc list-inside mt-2 text-left text-gray-700'>
                            <li>พัฒนาระบบบริการสำหรับร้านค้า E-Commerce</li>
                            <li>รับผิดชอบการออกแบบและพัฒนาระบบ Back-end</li>
                            <li>จัดการฐานข้อมูลและเชื่อมโยงข้อมูลระหว่างโมดูล</li>
                            <li>ปรับปรุงประสิทธิภาพระบบให้รองรับการใช้งานของผู้ดูแลระบบและลูกค้า</li>
                        </ul>
                    </div>
                    <img src={Line} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Experience
