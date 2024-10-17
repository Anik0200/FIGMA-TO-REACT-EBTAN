import React from 'react'

function Subscribe() {
    return (
        <>
            <section className='subs lg:pt-[80px] lg:pb-[77px] pt-[40px] pb-[33px] bg-[#ECEBE6]'>
                <div className="container">
                    <div className="items flex justify-center items-center flex-col lg:flex-row lg:gap-[111px] gap-[40px]">
                        <div className="text">
                            <h2 className='lg:w-[356px] w-[300px] font-ptSans font-normal lg:text-[48px] text-[28px] lg:leading-[64px] leading-[40px]'>
                                Subscribe to the
                                daily <span className='text-[#C51605]'>updates</span>
                            </h2>
                        </div>

                        <div className="input lg:w-[700px] w-[300px] lg:h-[90px] h-[45px] border-[1px] border-solid border-[#A0A79A] rounded-[50px] flex justify-between items-center lg:px-6 px-2">
                            <input type="text" className='outline-none bg-transparent w-[190px]' placeholder='Enter your email address' />

                            <button className='lg:px-[35px] lg:py-[13px] px-[10px] py-[6px] bg-primary rounded-[50px] font-inter font-medium text-white lg:text-[14px] text-[10px]'>Subscribe now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe
