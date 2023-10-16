import React from 'react'
import prontoImg1 from '../../images/prontoImg1.png';
import prontoImg2 from '../../images/prontoImg2.png';
import prontoImg3 from '../../images/prontoImg3.png';
import prontoImg4 from '../../images/prontoImg4.png';

const Work = () => {
    return (
        <div className='HowitworkMain'>
            <div className='HowitworkText'>
                <h1>1…2…3…4… PRONTO!</h1>
            </div>
            <div className='workBox'>
                <div className='row justify-content-center'>
                    <div className='col-md-4 workIdentify '>
                        <img src={prontoImg1} alt="logo" />
                        <div className='workBook'>
                            <h6>Step 1:
                            </h6>
                            <p className='estimate'>Book a free site visit for
                                cost estimate.</p>
                        </div>
                    </div>
                    <div className='col-md-4 workIdentify'>
                        <img src={prontoImg2} alt="logo" />
                        <div className='workBook'>
                            <h6>Step 2:
                            </h6>
                            <p>Pay the initial booking amount to
                                start the project.</p>
                        </div>
                    </div>
                    <div className='col-md-4 workIdentify'>
                        <img src={prontoImg3} alt="logo" />
                        <div className='workBook'>
                            <h6>Step 3:
                            </h6>
                            <p>Speak to our consultant to know the
                                best solution for your project.</p>
                        </div>
                    </div>
                    <div className='col-md-4 workIdentify workcontruction'>
                        <img src={prontoImg4} alt="logo" />
                        <div className='workBook'>
                            <h6>Step 4:
                            </h6>
                            <p>
                                Your wraps will be delivered and installed.
                                Before you can say PRONTO.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work