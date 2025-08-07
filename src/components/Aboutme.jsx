import React, { useEffect, useState } from 'react'
import Line from '../images/separatorBlack 1.svg'

const Aboutme = ({ aboutRef }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setHideOnScroll(true)
        } else {
            setHideOnScroll(false)
        }
    }

    return (
        <div ref={aboutRef} className='bg-gray-200'>
            <div className={`transition-transform duration-500 ${hideOnScroll ? '-translate-y-0' : 'lg:translate-y-50 translate-y-20'}`}>

                <div className={`flex flex-col items-center justify-center text-center gap-8 py-20 px-4`}>
                    <h1 className='border-4 border-black px-6 py-4 font-bold tracking-widest text-xl'>ABOUT ME</h1>
                    <div className='max-w-3xl break-words text-gray-700 flex flex-col'>
                        <p>
                            สวัสดีครับ ผมชื่อ <strong>สุริยกมล กาโร</strong> ผมเป็นคนที่สนใจในการพัฒนาเว็บแอปพลิเคชัน
                        </p>

                        <p>
                            ผมเริ่มต้นจากการพัฒนาระบบฝั่ง Backend ด้วย <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong> และ <strong>MySQL</strong> จากนั้นได้เรียนรู้และฝึกฝน <strong>React.js</strong> สำหรับการพัฒนาระบบฝั่ง Frontend ควบคู่ไปกับ <strong>TailwindCSS</strong> ซึ่งทำให้ผมสามารถพัฒนาแอปพลิเคชันแบบ Full-stack ได้
                        </p>

                        <p>
                            ผมชอบเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ เรียนรู้จากการแก้ไขปัญหา และพัฒนาตัวเองอย่างสม่ำเสมอ
                        </p>

                        <p>
                            ตอนนี้ผมกำลังฝึกฝนการพัฒนาระบบ Frontend ร่วมกับ Backend เพื่อให้เข้าใจการทำงานร่วมกันของทั้งสองระบบ และสั่งสมประสบการณ์ในการพัฒนาระบบให้มากยิ่งขึ้น
                        </p>

                        <p>
                            มาร่วมกันเติบโตไปพร้อมกับทีมและเรียนรู้สิ่งใหม่ๆ ไปด้วยกันนะครับ!
                        </p>
                    </div>
                    <img src={Line} alt="" />
                </div>

                <div className="flex flex-col justify-center items-center py-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl text-start">
                        <div>
                            <h1 className="text-lg font-bold tracking-widest mb-3 uppercase">Plan & Design</h1>
                            <p className="text-sm text-gray-700">
                                เข้าใจความต้องการของผู้ใช้ และออกแบบ UI/UX ที่ตอบโจทย์ ทั้งสวยงามและใช้งานง่าย
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-widest mb-3 uppercase">Build & Code</h1>
                            <p className="text-sm text-gray-700">
                                พัฒนาเว็บแอปทั้งฝั่งหน้าเว็บ (Frontend) และฝั่งเซิร์ฟเวอร์ (Backend) ด้วยเทคโนโลยีที่เหมาะสม
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-widest mb-3 uppercase">Improve & Maintain</h1>
                            <p className="text-sm text-gray-700">
                                อัปเดต ปรับปรุง และดูแลระบบให้ทันสมัย พร้อมแก้ไขปัญหาและเพิ่มฟีเจอร์ใหม่
                            </p>
                        </div>
                    </div>
                    <img src={Line} alt="" className="mx-auto mt-10" />
                </div>
            </div>
        </div>
    )
}

export default Aboutme
