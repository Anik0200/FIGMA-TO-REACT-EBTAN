import React from 'react'
import Heading from '../Common/Heading'
import Counter from '../Common/Counter';
import { FaStar } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import Button from '../Common/Button';
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Handwash() {
    return (
        <>
            <section className='handWash bg-[#ECEBE6] px-[20px]'>
                <div className="container">
                    <div className="row flex justify-center items-center flex-col md:flex-row lg:gap-[208px] gap-[80px] ">
                        <div className="text pt-[20px] lg:pt-[0px]">
                            <Heading heading={'All skins types'} />

                            <div className='flex justify-center sm:flex-row lg:justify-start items-center gap-[14px] lg:gap-[24px] mt-[40px] '>
                                <Counter iconOne={<FaStar className='text-[#F2994A] text-[18px] lg:text-[28px]' />} number={5} text={'Rating'} />
                                <Counter iconOne={<FaSmile className='text-[#F2994A] text-[18px] lg:text-[28px]' />} iconTwo={'+'} number={200} text={'Product solds'} />
                                <Counter iconOne={<FaShoppingBag className='text-[#F2994A] text-[18px] lg:text-[28px]' />} iconTwo={'+'} number={99} text={'Review'} />
                            </div>

                            <h2 className='font-ptSans font-normal  lg:text-[36px] text-[25px] text-primary lg:py-[40px] py-[20px]'>Men’s Hand wash  lorem</h2>

                            <div className="btn-price flex items-center gap-[20px]">
                                <Button text="Shop Now" icon={<FaShoppingCart />} />
                                <p className='font-ptSans font-normal lg:text-[31px] text-[20px] text-primary'>৳700</p>
                            </div>
                        </div>
                        <div className="img">
                            <img src="/images/handWash.png" alt="handWash.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Handwash
