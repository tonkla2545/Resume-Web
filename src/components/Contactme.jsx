import React, { useEffect, useState } from 'react'
import Line from '../images/separatorBlack 1.svg'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

const Contactme = ({ contactRef }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (event) => {
        setFormData((data) => ({
            ...data,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('https://resume-api-theta.vercel.app/api/sentemail', formData)
            toast.success('ส่งข้อความสำเร็จแล้ว!')
            setFormData({ name: '', email: '', message: '' })
        } catch (err) {
            console.log(err)
            toast.error('ส่งข้อความไม่สำเร็จ!')
        }
    }

    return (
        <>
            <div ref={contactRef} className='bg-gray-200 flex flex-col pb-8 px-4 lg:px-8'>
                <div className='max-w-4xl mx-auto w-full'>
                    <div className='flex flex-col items-center justify-center text-center gap-6 lg:gap-8 py-12 lg:py-20 px-4'>
                        <h1 className='uppercase border-4 border-black px-4 lg:px-6 py-3 lg:py-4 font-bold tracking-widest text-lg lg:text-xl '>Contact</h1>
                        <img src={Line} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center justify-center space-y-6 lg:space-y-6 '>
                            <div className="w-full max-w-md lg:max-w-lg">
                                <input name="name" className='border-l-4 border-b-4 font-bold text-sm px-3 pb-3 pt-4 w-full bg-transparent placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors' onChange={handleChange} value={formData.name} type="text" placeholder='ENTER YOUR NAME*' required />
                            </div>
                            <div className="w-full max-w-md lg:max-w-lg">
                                <input name="email" className='border-l-4 border-b-4 font-bold text-sm px-3 pb-3 pt-4 w-full bg-transparent placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors' onChange={handleChange} value={formData.email} type="email" placeholder='ENTER YOUR EMAIL*' required />
                            </div>
                            <div className="w-full max-w-md lg:max-w-lg">
                                <textarea name="message" className='border-l-4 border-b-4 font-bold text-sm px-3 pb-3 pt-4 w-full h-40 bg-transparent placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors' onChange={handleChange} value={formData.message} type="text" placeholder='YOUR MESSAGE*' required />
                            </div>
                            <button className='border-l-4 border-r-4 px-6 py-2 my-6 text-sm font-bold tracking-widest hover:cursor-pointer hover:bg-gray-400'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Contactme
