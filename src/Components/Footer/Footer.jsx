import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className='lg:pt-[64px] pt-[32px] lg:pb-[66px] pb-[33px] bg-primary'>
                <div className="container">
                    <div className="row text-center">
                        <h2 className='font-inter font-black lg:text-[34px] text-[20px] text-white'>EbTan Cosmetics</h2>

                        <ul className='flex justify-center flex-col lg:flex-row lg:gap-[33px] gap-4 lg
                        :py-[50px] py-[25px]'>
                            <li><Link className='font-inter font-medium text-[14px] text-[#FFFFFF]' to="/">Home</Link></li>
                            <li><Link className='font-inter font-medium text-[14px] text-[#FFFFFF]' to="/">About us</Link></li>
                            <li><Link className='font-inter font-medium text-[14px] text-[#FFFFFF]' to="/">Product</Link></li>
                            <li><Link className='font-inter font-medium text-[14px] text-[#FFFFFF]' to="/">Contact</Link></li>
                        </ul>

                        <h2 className='font-inter font-medium text-[14px] text-[#FFFFFF]'>© 2024 All Rights Reserved.</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
