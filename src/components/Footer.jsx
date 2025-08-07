import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-6 text-center'>
            <div className='mt-10'>
                <p className='text-sm'>&copy; {new Date().getFullYear()} Suriyakamon Karo. All rights reserved.</p>
                <div className='flex flex-col justify-center gap-4 mt-4'>
                    <a href='https://github.com/tonkla2545' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <p>Email : suriyakamonkaro@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
