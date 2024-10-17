import React from 'react'
import Title from '../Common/Title'
import ReviewItem from '../Common/ReviewItem'

function Review() {
    return (
        <>
            <section className='review lg:pt-[156px] pt-[78px] lg:pb-[106px] pb-[53px]'>
                <div className="container">

                    <div className="title mb-[45px]">
                        <Title head={'Review'} pararaph={'SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'} />
                    </div>

                    <div className="review-items flex flex-wrap justify-center lg:gap-[105px] gap-[52px]">
                        <ReviewItem />
                        <ReviewItem />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Review
