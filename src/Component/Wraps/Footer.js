import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerWrap">
      <footer className="new-footer">
        <div className="new-container-footer">
          <div>
            <img className="new-footer-logo" src="./images/logo_new.png" alt="logo" />
          </div>
          <div>
            <p className="new-foot-para">HomeLane Pronto brings to you a lightning-speed painting service
              backed up by the design expertise of India's most trusted home
              interiors brand. Now, you can transform your home conveniently
              with a ready team of designer experts topped up with speedy
              service. Our trained professionals make sure each wall is graced
              with the perfect finish. And to make sure the beauty stays
              intact, we follow a thorough no-mess process with a solid
              support of a HomeLane Pronto 1-Year warranty. Explore a wide
              range of colours and textures that can transform your walls just
              the way you want it.</p>
          </div>
          <div className="new-foot-bottom">
            <p className="new-copyright">Homevista Decor and Furnishings Pvt. Ltd. © 2022</p>
            <div className="new-foot-icons">
              <div className="foot-icon">
                <a href="https://www.facebook.com/homelaneinteriors" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </div>
              <div className="foot-icon">
                <a href="https://twitter.com/homelanedecors" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </div>
              <div className="foot-icon">
                <a href="https://www.linkedin.com/company/3720649/" target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
              </div>
              <div className="foot-icon youtube">
                <a href="https://www.youtube.com/channel/UCHfxWqUbKy8iB18haeZ65Uw" target="_blank" rel="noreferrer">
                  <AiFillYoutube />
                </a>
              </div>
              <div className="foot-icon insta">
                <a href="https://www.instagram.com/homelane_india/" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
