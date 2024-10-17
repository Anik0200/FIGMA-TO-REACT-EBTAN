import React from 'react'

function Title({ head, pararaph }) {
    return (
        <>
            <div className="title flex flex-col items-center text-center">
                <h2 className='font-ptSans font-normal text-[30px] lg:text-[48px] text-[#C51605]'>
                    {head}
                </h2>

                <p className='font-inter font-normal lg:text-[18px] text-[14px] text-[#A0A79A] w-[300px] lg:w-[526px] mt-[21px]'>
                    {pararaph}
                </p>
            </div>
        </>
    )
}

export default Title
