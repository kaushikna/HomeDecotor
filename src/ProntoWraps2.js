import React from 'react'
import Collection from './Component/Wraps/Collection'
import Faq from './Component/Wraps/Faq'
import Features from './Component/Wraps/Features'
import Footer from './Component/Wraps/Footer'
import Header from './Component/Wraps/Header'
import Newlook from './Component/Wraps/Newlook'
import PickLook from './Component/Wraps/PickLook'
import Video from './Component/Wraps/Video'
import Work from './Component/Wraps/Work'
import Wraps from './Component/Wraps/Wraps'
import '../src/Component/Wraps2/Wraps2.scss'
import Information from './Component/Wraps2/Information'
import BeforeSliderInfo from './Component/Wraps2/BeforeSliderInfo'
import SurfaceBanner from './Component/Wraps2/SurfaceBanner'

const ProntoWraps2 = () => {
    return (
        <div className='MainWrapper2'>
            <Header />
            <SurfaceBanner />
            <BeforeSliderInfo />
            <Newlook />
            <Information />
            <Video />
            <Collection />
            <PickLook />
            <Wraps />
            <Work />
            <Features />
            <Faq />
            <Footer />
        </div>
    )
}

export default ProntoWraps2