import React from 'react';
import Screenshot1 from '../../images/icon1.png'
import Screenshot2 from '../../images/icon2.png'
import Screenshot3 from '../../images/icon3.png'
import Screenshot4 from '../../images/icon4.png'
import Screenshot5 from '../../images/icon5.png'
import Screenshot6 from '../../images/icon6.png'

const Features = () => {
    return (
        <>
            <div className='featureswrap'>
                <div>
                    <div className='container'>
                        <h1>
                            Why should you get HomeLane Pronto Wraps?
                        </h1>
                        <div className='row featuresData'>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot1} alt='' />
                                <p>Cost-efficient designing process</p>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot2} alt='' />
                                <p>Extensive design palette</p>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresBg'>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot3} alt='' />
                                <p>Smooth process</p>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot4} alt='' />
                                <p>Easy installation </p>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresBg'>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot5} alt='' />
                                <p>Pronto ​​1 year warranty</p>
                            </div>
                            <div className='col-md-4 col-sm-6 featuresLook'>
                                <img src={Screenshot6} alt='' />
                                <p>Tested for quality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Conditions'>
                <p>* Terms and Conditions apply</p>
            </div>
        </>
    )
}

export default Features