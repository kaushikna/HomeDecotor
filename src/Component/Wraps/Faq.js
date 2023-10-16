import React, { useState } from 'react';
import FaqComponent from "./FaqComponent";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const changeOpen = () => {
        setOpen(!open);
    };

    const changeOpen2 = () => {
        setOpen2(!open2);
    };
    return (
        <div><div className="container container2">
            <h2 className="faq-head">FAQs</h2>
            {/* <FaqComponent
                data="How much time will it take to do the installation?"
                description="-The delivery time is 15 days from the date of booking the order. The process takes 1-3 days depending on the space."
            />
            <FaqComponent
                data="What are the prices for these?"
                description="-The quotation will depend on the wrap that is selected. The range starts from 249/- including delivery and installation.
        "
            /> */}
            <FaqComponent
                data="Will it be done here in my house?"
                description="Yes, the installation of wraps is done on site."
            />
            <FaqComponent
                data="Will there be a lot of noise and mess on site?"
                description="No, the application process is a fairly silent process without much dirt or mess on site. The site will be cleaned after installation."
            />
            <FaqComponent
                data="Can I apply it to my old wooden furniture, counter top, wall paneling, wooden ceiling etc?"
                description="Yes, the wraps can be applied to a variety of surfaces."
            />
            <FaqComponent
                data="Is it waterproof?"
                description="The Wraps are water resistant, and the surface is water proof."
            />
            <FaqComponent
                data="What is the warranty on wraps?"
                description="It comes with a 1 year warranty."
            />
            <FaqComponent
                data="Is it scratch proof?"
                description="HL wraps are scratch resistant."
            />
            <FaqComponent
                data="What is the maintenance of the Wraps?"
                description="It's very easy to maintain. Can be cleaned with any surface cleaner or a damp wipe."
            />
            <FaqComponent
                data="Can I also change some hardware which is rusted/ not working etc?"
                description="Yes, we also provide the option of changing hardware and handles."
            />
            <FaqComponent
                data="Can I remove it after some years and change it?"
                description="Yes, HL wraps can be removed with the help of an expert and new wraps can be installed."
            />
        </div></div>
    )
}

export default Faq