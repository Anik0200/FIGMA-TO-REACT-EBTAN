import React from 'react'
import Banner from '../Components/Banner/Banner'
import Why from '../Components/Why/Why'
import Handwash from '../Components/HandWash/Handwash'
import Cream from '../Components/Cream/Cream'
import Review from '../Components/Review/Review'
import Subscribe from '../Components/Subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'

function Home() {
    return (
        <>
            <Banner />
            <Why />
            <Handwash />
            <Cream />
            <Review />
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default Home
