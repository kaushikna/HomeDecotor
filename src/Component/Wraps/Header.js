import React, { useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {

  useEffect(() => {
    const first = document.getElementById("mobile-header");

    const onScroll = (event) => {
      if (window.pageYOffset > 600) {
        first.classList.add("new-mobile-header");
      } else {
        first.classList.remove("new-mobile-header");
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  const goToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <div className="headerWrapper" id="mobile-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navbar-brand" onClick={() => { window?.dataLayer?.push({ 'input-phone': '18003098789', 'event': 'Toll-Free' }); window.location = "tel:18003098789" }}>
              <AiOutlinePhone /><a href="tel:18003098789">18003098789 </a>
            </div>
            <a href="#bookVisit"><button className="boxWrapper" onClick={e => goToTop(e)}>BOOK FREE HOME VISIT</button></a>
            <div className="collapse navbar-collapse me-auto leftSide" id="navbarSupportedContent">
              <div className="headerLogo">
                <img src="./images/HL_Pronto_Wraps_Logo.png" alt="logo" />
              </div>
              <a className="rightArrow" href="/"><span>Make the most of your interiors here</span><AiOutlineArrowRight /></a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
