import React from 'react';
import ReactCompareImage from "react-compare-image";
import slideFirst from "../../images/slideFirst.png";
import slideSecond from "../../images/slideSecond.jpg";

const Booking = () => {
    const before = slideFirst;
    const after = slideSecond;

    return (
        <>
            <div className="mainWrapper">
                <div className="contentWrapper">
                    <ReactCompareImage leftImage={before} rightImage={after} />
                </div>
            </div>
        </>
    )
}

export default Booking
