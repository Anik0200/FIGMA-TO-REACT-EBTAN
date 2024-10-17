import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Acordion({ head }) {

    const [show, setShow] = React.useState(false);

    return (
        <>
            <div className="acordion-item mt-[18px]">

                <h2 onClick={() => setShow(!show)} className='font-inter font-semibold text-[15px] lg:text-[22px] text-[#333333] flex items-center'>
                    {
                        show ?
                            <IoMdArrowDropup className='lg:text-[30px] text-[20px]' />
                            :
                            <IoMdArrowDropdown className='lg:text-[30px] text-[20px]' />

                    }
                    {head}
                </h2>
                {
                    show && (
                        <p className='font-inter font-normal text-lg text-[#A0A79A] lg:w-[300px] w-[250px] bg-[#F0EFEA] rounded-sm mt-[5px] lg:p-4 p-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        </p>
                    )
                }

            </div>
        </>
    )
}

export default Acordion
