import React from 'react'
import { FaStar } from "react-icons/fa";

function ReviewItem() {
    return (
        <>
            <div className="item flex flex-col items-center">
                <div className="icons flex lg:gap-[25px] gap-[14px]">
                    <FaStar className='lg:text-[41px] text-[30px] text-[#F2994A]' />
                    <FaStar className='lg:text-[41px] text-[30px] text-[#F2994A]' />
                    <FaStar className='lg:text-[41px] text-[30px] text-[#F2994A]' />
                    <FaStar className='lg:text-[41px] text-[30px] text-[#F2994A]' />
                    <FaStar className='lg:text-[41px] text-[30px] text-[#F2994A]' />
                </div>

                <div className="text text-center">
                    <p className='lg:w-[441px] w-[220px] font-ptSans font-normal lg:text-[20px] text-[14px] text-[#C51605] px-1 lg:px-0 my-[13px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <h2 className='font-ptSans font-normal lg:text-[36px] text-[20pxpx] text-[#333333]'>Ebrahim Ahmed</h2>
                    <p className='font-ptSans font-normal text-[18px] lg:text-[20px] text-[#F2994A] mt-[2px]'>Actor</p>
                </div>
            </div>
        </>
    )
}

export default ReviewItem
