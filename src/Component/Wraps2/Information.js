import React, { useState } from 'react';
import Search from '../../images/Search.svg';
import Money from '../../images/Money.svg';
import designLeft from '../../images/designLeft.png';
import designRight from '../../images/designRight.png';
import designBg from '../../images/designBg.png';
import designBgSm from '../../images/designBgSm.png';
import designRightSm from '../../images/designRightSm.png';
import designLeftSm from '../../images/designLeftSm.png';
import Forms from '../Wraps/Forms';

const Information = () => {
    const [value, setValue] = useState("one");
    const [FormNow, setFormNow] = useState(0);

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        setValue(newValue);
    };
    return (
        <div className='information' id='bookVisit'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>Speak to a <span>design expert</span></h1>
                    <div className='infoDesign'>
                        <img src={Search} alt='Search' />
                        <p>Know the best designs suited for your surfaces based on a complete assessment.</p>
                    </div>
                    <div className='infoDesign'>
                        <img src={Money} alt='Money' />
                        <p>Get instant quotes</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img className='inner_centerImg2' src={designBgSm} alt='designBgSm' />
                    <div className='inner-sec2_1'>
                        <img className='inner_centerImg' src={designBg} alt='designBg' />
                        <img className='inner_leftImg' src={designLeft} alt='designLeft' />
                        <img className='inner_rightImg' src={designRight} alt='designRight' />
                        <img className='inner_leftImg2' src={designLeftSm} alt='designLeftSm' />
                        <img className='inner_rightImg2' src={designRightSm} alt='designRightSm' />
                        <div className="bottom-sec">
                            <Forms FormNow={FormNow} setFormNow={setFormNow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information