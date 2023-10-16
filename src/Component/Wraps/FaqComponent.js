import React, { useState } from "react";
import UpArrow from '../../images/chevron-up.svg';
import DownArrow from '../../images/chevron-down.svg';

const FaqComponent = ({ data, description }) => {
    const [open, setOpen] = useState(false);

    const changeOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="mobileOuter">
            <div onClick={changeOpen} className="faq-div">
                <h3 className="head2">{data}</h3>
                {
                    open ?
                        <img className="Updown" src={UpArrow} alt="arrow" />
                        :
                        <img className="Updown" src={DownArrow} alt="arrow" />
                }
            </div>
            {open && (

                <p className="description">{description}</p>

            )}
            <div className="line"></div>
        </div>
    );
};

export default FaqComponent;
