import React from 'react'
import Box from '../Common/Box'
import Title from '../Common/Title'

function Cream() {
    return (
        <>
            <section className='lg:pt-[191px] lg:pb-[121px] pt-[45px] pb-[60px]'>
                <div className="container">

                    <div className="title mb-[64px]">
                        <Title head={'Why choose us'} pararaph={'SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'} />
                    </div>

                    <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cream
