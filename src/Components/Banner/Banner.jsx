import React from 'react'
import Heading from '../Common/Heading'
import Button from '../Common/Button'
import { FaShoppingCart } from "react-icons/fa";
import Counter from '../Common/Counter';
import { FaStar } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

function Home() {
    return (
        <>
            <section className='banner lg:pt-[96px] pt-[50px] px-[20px]'>
                <div className="container">
                    <div className="banner-row flex justify-center items-center flex-col-reverse md:flex-row lg:gap-[72px] gap-[40px]">

                        <div className="banner-img ">
                            <img src="/images/bannner.jpg" alt="bannner" />
                        </div>

                        <div className="banner-text">

                            <Heading heading="Normal to oily skin" />

                            <h2 className='font-ptSans font-normal w-[300px] text-[35px] my-[10px] lg:text-[72px] text-[#333333] leading-[130%] lg:leading-[110%] lg:w-[540px] lg:my-[20px]'>
                                Men’s Sunscreen
                                hand & body
                            </h2>

                            <p className='tetx-[14px] lg:text-[18px] font-normal font-inter w-[300px] mb-[40px] mt-[10px]  lg:w-[518px] sm:mt-[20px] lg:mb-[64px] text-[#A0A79A]'>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                            </p>

                            <Button text="Shop Now" icon={<FaShoppingCart />} />

                            <div className='flex justify-center sm:flex-row lg:justify-start items-center gap-[14px] lg:gap-[24px] mt-[42px]'>
                                <Counter iconOne={<FaStar className='text-[#F2994A] text-[18px] lg:text-[28px]' />} number={5} text={'Rating'} />
                                <Counter iconOne={<FaSmile className='text-[#F2994A] text-[18px] lg:text-[28px]' />} iconTwo={'+'} number={200} text={'Product solds'} />
                                <Counter iconOne={<FaShoppingBag className='text-[#F2994A] text-[18px] lg:text-[28px]' />} iconTwo={'+'} number={99} text={'Review'} />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
