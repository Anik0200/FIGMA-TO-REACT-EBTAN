import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {

    //Hooks
    const [show, setShow] = React.useState(false)


    //Functions
    const toggleMenu = () => { setShow(!show) };


    return (
        <>
            <nav className='pt-[20px] sm:pt-[33px] px-[10px] lg:px-[0px]'>
                <div className="container">
                    <div className="menu flex items-center justify-between">
                        <div className="logo select-none">
                            <img src="/images/logo.png" alt="" />
                        </div>

                        <div className="bar cursor-pointer select-none relative">
                            <CgMenuLeft onClick={toggleMenu} className='text-2xl rotate-180 active:text-primary' />

                            {show && (
                                <ul className='bg-primary p-[10px] w-[200px] flex flex-col absolute right-0 gap-2 mt-2 rounded-md'>
                                    <li className='text-white font-medium font-inter'><Link>Home</Link></li>
                                    <li className='text-white font-medium font-inter'><Link>About</Link></li>
                                    <li className='text-white font-medium font-inter'><Link>Product</Link></li>
                                    <li className='text-white font-medium font-inter'><Link>Contact</Link></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
