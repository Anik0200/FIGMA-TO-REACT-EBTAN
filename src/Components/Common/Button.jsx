import React from 'react'

function Button({ text, style, icon }) {
    return (
        <div className={`w-[130px] sm:w-[211px] h-[40px] lg:h-[54px] rounded-[5px] bg-primary flex items-center justify-center gap-[6px] lg:gap-[16px] cursor-pointer ${style}`} >
            <div className='text-[14px] lg:text-[28px] font-inter font-medium text-white'>{icon}</div>
            <div className='text-[14px] lg:text-[18px] font-inter font-medium text-white'>{text}</div>
        </div >
    )
}

export default Button
