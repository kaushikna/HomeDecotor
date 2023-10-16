import React, { useState } from 'react'
// import Booking from './Component/Wraps/Booking'
import Footer from './Component/Wraps/Footer'
import Header from './Component/Wraps/Header'
import '../src/Component/Wraps/Wraps.scss'
import Newlook from './Component/Wraps/Newlook'
import Work from './Component/Wraps/Work'
import Features from './Component/Wraps/Features'
// import FAQ from './Component/Faq/faq'
import Banner from './Component/Wraps/Banner'
import BeforeSlider from './Component/Wraps/BeforeSlider'
// import Process from './Component/Wraps/Process'
import Video from './Component/Wraps/Video'
import Wraps from './Component/Wraps/Wraps'
import PickLook from './Component/Wraps/PickLook'
import Collection from './Component/Wraps/Collection'
import Faq from './Component/Wraps/Faq'

const ProntoWraps = () => {
    // const [propertyMailError, setPropertyMailError] = useState(null);
    // const [FormNow, setFormNow] = useState(0);
    return (
        <>
            <div id="Wrapper">
                <Header />
                {/* className={`renovationWrap ${FormNow === 6 ? "reviewDetail" : ""} ${propertyMailError !== null && 'homelaneReview'}`} */}
                {/* <div> */}
                {/* FormNow={FormNow} setFormNow={setFormNow} setPropertyMailError={setPropertyMailError} propertyMailError={propertyMailError} */}
                <Banner />
                <BeforeSlider />
                {/* </div> */}
                {/* <Booking /> */}
                <Newlook />
                <Video />
                <Collection />
                <PickLook />
                <Wraps />
                <Work />
                {/* <Process /> */}
                <Features />
                <Faq />
                <Footer />
            </div>
        </>
    )
}

export default ProntoWraps