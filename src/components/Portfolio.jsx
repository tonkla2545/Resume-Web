import React, { useEffect, useState } from 'react'
import Line from '../images/separatorBlack 1.svg'
import Shark from '../images/result_0.jpg'
import ecom from '../images/E-com.PNG'
import webblog from '../images/webblog.PNG'

const Portfolio = ({ portRef }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 2500) {
            setHideOnScroll(true)
        } else {
            setHideOnScroll(false)
        }
    }
    return (
        <div>
            <div ref={portRef} className='bg-gray-200 py-20 px-4'>
                <div className={`transition-transform duration-500 ${hideOnScroll ? '-translate-y-0' : 'lg:translate-y-50 translate-y-20'}`}>
                    <div className='flex justify-center'>
                        <h1 className='border-4 border-black px-6 py-4 font-bold tracking-widest text-xl'>PORTFOLIO</h1>
                    </div>

                    <div className='py-10 lg:py-16 px-4 lg:px-8'>
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl'>
                                {/* Card 1 */}
                                <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto w-full max-w-sm'>
                                    <a href="https://detection-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <div className='aspect-video overflow-hidden'>
                                            <img
                                                src={Shark}
                                                alt="Shark Species Detection Project"
                                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                                            />
                                        </div>
                                        <div className='p-6'>
                                            <h3 className='text-xl font-bold mb-3 text-gray-800'>Shark Species Detection</h3>
                                            <p className='text-gray-600 mb-4 leading-relaxed'>
                                                นี้คือโปรเจคจบการศึกษาที่ได้ทำขึ้นเกี่ยวกับการตรวจจับสายพันธุ์ฉลาม ใช้เทคโนโลยี AI และ Machine Learning
                                            </p>
                                            <div className='flex flex-wrap gap-2 mb-4'>
                                                <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>Python</span>
                                                <span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>AI/ML</span>
                                                <span className='px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full'>Computer Vision</span>
                                                <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>React</span>
                                                <span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>NodeJs</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto w-full max-w-sm'>
                                    <a href="https://ecom-web-lime.vercel.app/" target='_blank'>
                                        <div className='aspect-video overflow-hidden'>
                                            <img
                                                src={ecom}
                                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                                            />
                                        </div>
                                        <div className='p-6'>
                                            <h3 className='text-xl font-bold mb-3 text-gray-800'>E-Commerce</h3>
                                            <p className='text-gray-600 mb-4 leading-relaxed'>
                                                เว็บไซต์ E-commerce ที่พัฒนาจาก Workshop บน YouTube มีระบบ login register ตะกร้าสินค้า การจัดการสินค้า และระบบชำระเงิน
                                            </p>
                                            <div className='flex flex-wrap gap-2 mb-4'>
                                                <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>React</span>
                                                <span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>NodeJs</span>
                                                <span className='px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full'>MySQL</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto w-full max-w-sm'>
                                    <div className='aspect-video overflow-hidden'>
                                        <img
                                            src={webblog}
                                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <h3 className='text-xl font-bold text-gray-800'>Web Blog</h3>
                                            <span className='px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium'>
                                                กำลังพัฒนา
                                            </span>
                                        </div>
                                        <p className='text-gray-600 mb-4 leading-relaxed'>
                                            เว็บไซต์ Blog สำหรับฝึกฝนการพัฒนา Full-stack มีระบบเขียนบทความ การจัดหมวดหมู่ แสดงความคิดเห็น และจัดการเนื้อหา
                                        </p>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>React</span>
                                            <span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>NodeJs</span>
                                            <span className='px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full'>MySQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
