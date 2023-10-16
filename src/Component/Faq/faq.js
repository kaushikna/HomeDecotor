import React, { useState } from "react";
import Vector from "./footer-arr.png";
import FaqComponent from "./FaqComponent";
import UpArrow from '../../images/chevron-up.svg';
import DownArrow from '../../images/chevron-down.svg';
import "./faq.css";

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  const changeOpen2 = () => {
    setOpen2(!open2);
  };
  return (
    <div className="container container2">
      <h2 className="faq-head">FAQs</h2>
      <FaqComponent
        data="How will HomeLane Pronto Painting Service go about painting your home?"
        description="As part of this service, our representative will contact you to understand your painting requirements. Following this, the representative will visit the site for evaluation. Based on the site evaluation and your painting requirements, the representative will provide you with a quotation. A Supervisor will also be available to assist on-site at regular intervals, for quality checking and to oversee the work."
      />
      <FaqComponent
        data="How can one register for HomeLane Pronto Painting Service?"
        description="You may contact us at 18003098789, anytime between 09:00 am to 07:00 pm (Monday to Sunday)
        Or fill up the form on this page.
        "
      />
      <FaqComponent
        data="After the painting work is over, will HomeLane Pronto Painting Service clean up my home?"
        description="Yes, we do the post-painting clean up for your home and make sure we leave behind nothing but a beautifully painted, clean home."
      />
      <FaqComponent
        data="What are the tools used during painting and how will those benefit me?"
        description="As part of the service, we use automated tools to ensure a superior finish. We also conduct scientific site evaluation through moisture meters and take accurate measurements through laser-based digital distance meters. Covering and masking of furniture is done with masking films. Superior sanding is done with electric sanders and dust extraction is carried out by vacuum cleaners. We also use the Ultra Hand Held Sprayer to get uniform paint finish at lightning speed. This is in line with our commitment to ensure a hassle-free home painting experience for every customer."
      />
      <FaqComponent
        data="Will HomeLane Pronto Painting Service assist me in shifting and covering up my furniture before the painting process starts?"
        description="We cover furniture, doors, windows, cupboards, etc., with masking sheets before we start the painting process to prevent any damage. Our team will also help you in shifting your furniture."
      />
      <div className="mobileOuter">
        <div onClick={changeOpen} className="faq-div">
          <h3 className="head2">What are the features of HomeLane Pronto Painting Service?</h3>
          {
            open ?
              <img className="Updown" src={UpArrow} alt="arrow" />
              :
              <img className="Updown" src={DownArrow} alt="arrow" />
          }
        </div>
        {open && (
          <div>
            <p className="outer-desc">1. End-to-end responsibility of painting customer's home (including product and service)</p>
            <p className="outer-desc">2. Timely delivery</p>
            <p className="outer-desc">3. Personalization with immersive color consultation</p>
            <p className="outer-desc">4. Paint Calculator</p>
            <p className="outer-desc">5. Instant Quote</p>
            <p className="outer-desc">6. Trained Professionals</p>
            <p className="outer-desc">7. HomeLane Pronto Warranty</p>
            <p className="outer-desc">8. Excellent Finish</p>
          </div>
        )}
        <div className="line"></div>
      </div>
      <div className="mobileOuter">
        <div onClick={changeOpen2} className="faq-div">
          <h3 className="head2">What are the benefits of HomeLane Pronto Painting Service?</h3>
          {
            open2 ?
              <img className="Updown" src={UpArrow} alt="arrow" />
              :
              <img className="Updown" src={DownArrow} alt="arrow" />
          }
        </div>
        {open2 && (
          <div>
            <p className="outer-desc">HomeLane Pronto Painting Service offers professional Interior, Exterior, Texture and Stencil painting services, along with Waterproofing.</p>
            <p className="outer-desc">Check out some of the benefits of HomeLane Pronto Painting Service.</p>
            <p className="outer-desc">1. Increases real estate value of your home</p>
            <p className="outer-desc">2. Enhances aesthetic appeal</p>
            <p className="outer-desc">3. Promotes healthy indoor air quality</p>
            <p className="outer-desc">4. Hides permanent marks and stains</p>
            <p className="outer-desc">5. Protects exterior/interior surfaces for longer durability</p>
            <p className="outer-desc">6. Inexpensive remodeling</p>
            <p className="outer-desc">7. Positive energy and improved homeowner outlook</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
