import React from 'react'

function Box() {
    return (
        <>
            <div className="box pt-[32px] pb-[41px] lg:pl-[26px] pl-[13px] lg:pr-[20px]  bg-[#F0EFEA]">

                <div className="icon h-[58px] w-[58px] bg-[#CDD5CA] flex justify-center items-center rounded-full">
                    <img src="/images/Star.png" alt="" />
                </div>

                <div className="text">
                    <h2 className='font-inter font-bold lg:text-[22px] text-[18px] text-[#333333] mt-[20px] mb-[11px]'>Dermatologist Tested</h2>
                    <p className='font-inter font-normal lg:text-[18px] text-[12px] text-[#A0A79A] w-[290px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                </div>

            </div>
        </>
    )
}

export default Box
