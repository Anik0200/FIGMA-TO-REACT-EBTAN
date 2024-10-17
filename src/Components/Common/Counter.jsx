import React from 'react'



function Counter({ iconOne, iconTwo, number, text }) {
    return (
        <>
            <div className="counter_item">

                <div className="icon-num flex items-center gap-[6px]">
                    {iconOne}
                    <div className="number">
                        <p className='font-inter font-bold text-[18px] lg:text-[32px] text-[#333333] leading-[145%]'>
                            {number}
                            <span>{iconTwo}</span>
                        </p>
                    </div>
                </div>

                <p className='font-inter font-normal text-[14px] lg:text-[18px] text-[#A0A79A] pl-[22px] lg:pl-[34px]'>{text}</p>

            </div>
        </>
    )
}

export default Counter
