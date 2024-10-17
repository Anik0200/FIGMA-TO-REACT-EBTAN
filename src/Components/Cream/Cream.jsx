import React from 'react'
import Heading from '../Common/Heading'
import Acordion from '../Common/Acordion'
import Button from '../Common/Button';
import { FaShoppingCart } from "react-icons/fa";

function Cream() {
    return (
        <>
            <section className='cream lg:pt-[110px] pt-[55px] lg:pb-[155px] pb-[75px] px-[20px]'>
                <div className="container">

                    <div className="cream-row flex justify-center flex-col sm:flex-row sm:items-center lg:gap-[120px] gap-[60px]">
                        <div className="cream-img">
                            <img src="/images/cream.png" alt="" />
                        </div>

                        <div className="cream-text">
                            <Heading heading={'All skins types'} />
                            <h2 className='font-ptSans font-normal  text-[24px] lg:text-[48px] leading-[32px] lg:leading-[64px] text-[#333333] lg:w-[215px] w-full lg:py-[31px]'>
                                Men’s day cream
                            </h2>


                            <div className="accodion">
                                <Acordion head="Benefits" />
                                <Acordion head="Ingredients" />
                                <Acordion head="How to use" />
                            </div>

                            <div className="btn-price flex items-center gap-[20px] mt-[37px]">
                                <Button text="Shop Now" icon={<FaShoppingCart />} />
                                <p className='font-ptSans font-normal lg:text-[31px] text-[20px] text-primary'>৳700</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cream
