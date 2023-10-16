import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
  useEffect(() => {
    const first = document.getElementById("chg1");
    const second = document.getElementById("chg2");
    const onScroll = (event) => {
      // pageYOffset or scrollY

      if (window.pageYOffset > 50) {
        first.classList.add("nav-changed-0");
        first.classList.remove("d-flex");
        second.classList.remove("nav-changed-1");
      } else {
        first.classList.remove("nav-changed-0");
        first.classList.add("d-flex");
        second.classList.add("nav-changed-1");
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="nav_new" className="white-sectionn">
        <div className="row mx-4">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <a href="/">
              <img className="imglogo" src="./images/logo_new.png" alt="logo" />
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-left">
            <div className="nav-1">
              <BsFillTelephoneFill />
              Tollfree -{" "}
              <span style={{ color: "red", "font-weight": "500" }}>
                18003098789
              </span>
            </div>
            <div className="nav-2">
              Make the most of your interiors here
              <AiOutlineArrowRight />
            </div>
          </div>
          <div
            id="chg2"
            className="col-lg-6 col-md-6 col-sm-6 col-6 col-lg-6 text-center nav-changed-1"
          >
            <button type="button" className="footer-btn">
              Book Free Online Consultation
            </button>
          </div>
        </div>
      </div>
      <div id="nav_new2" className="white-sectionn2">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <img className="imglogo2" src="./images/logo_new.png" alt="logo" />
          </div>
          <div id="chg1" className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex ">
            <div className="nav-1">
              Tollfree -{" "}
              <span style={{ color: "red", "font-weight": "800" }}>
                18003098789
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
