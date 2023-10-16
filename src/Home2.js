import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/header_new";
import Animation from "./Component/Animation";
import Form2 from "./Component/Box/HomeForm";
import Form1 from "./Component/Box/Form1";
import Form3 from "./Component/Box/Form3";
import Form4 from "./Component/Box/Form4";
import Form5 from "./Component/Box/Form5";
import Form6 from "./Component/Box/Form6";
import Form7 from "./Component/Box/Form7";

import { Link } from "react-router-dom";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import Section5 from "./Component/Section5";
import Section7 from "./Component/Section7";
import Section6 from "./Component/Section6";
import SuccessLogin from "./Component/Box/SuccessMessage";
import Footer from "./Component/Faq/faq.js";
import Footer2 from "./Component/Footer.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useUserState } from "./context/loginContext";
import Navbar from "./Component/Navbar";

const Home2 = () => {
  var { isAuthenticated } = useUserState();

  const [FormNow, setFormNow] = useState(0);

  const [userMobile, setUserMobile] = useState(null);
  const [registrationRes, setRegistrationRes] = useState(null);
  const [messageLabel, setmessageLabel] = useState("");

  /** UseEffect call */
  useEffect(() => {
    if (isAuthenticated) {
      setFormNow(1);
    } else {
      setFormNow(0);
      setUserMobile(null);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const first = document.getElementById("btn-1");

    const onScroll = (event) => {
      // pageYOffset or scrollY
      // pageYOffset or scrollY
      if (window.pageYOffset > 400) {
        first.classList.add("btn1");
      } else {
        first.classList.remove("btn1");
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="Wrapper">
      <Navbar />

      <div className="mainhead-2">
        <div className=" container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="LeftBoxContent1">
                Elevate your Walls.
              </p>
              <div>
                <p className="LeftBoxContent2">
                  India’s most trusted home interiors brand.
                </p>
              </div>
              <img className="img-head" src="images/BestBrands.svg" alt="" />
            </div>
            <button
              id="btn-1"
              type="button"
              className="footer-btn2 white-sectionn2"
            >
              Book Free Home Visit
            </button>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="d-lg-flex justify-content-lg-end pR40">
                {FormNow === 0 ? (
                  <Form1
                    setFormNow={setFormNow}
                    userMobile={userMobile}
                    setUserMobile={setUserMobile}
                  />
                ) : (
                  <div></div>
                )}
                {FormNow === 1 ? (
                  <SuccessLogin message={messageLabel} />
                ) : (
                  <div></div>
                )}
                {FormNow === 2 ? (
                  <Form3
                    setmessageLabel={setmessageLabel}
                    setFormNow={setFormNow}
                    userMobile={userMobile}
                    registrationRes={registrationRes}
                  />
                ) : (
                  <div></div>
                )}
                {FormNow === 3 ? <Form4 /> : <div></div>}
                {FormNow === 4 ? <Form5 /> : <div></div>}
                {FormNow === 5 ? (
                  <Form6
                    setFormNow={setFormNow}
                    userMobile={userMobile}
                    setmessageLabel={setmessageLabel}
                  />
                ) : (
                  <div></div>
                )}
                {FormNow === 6 ? (
                  <Form7
                    setmessageLabel={setmessageLabel}
                    setFormNow={setFormNow}
                    userMobile={userMobile}
                    setRegistrationRes={setRegistrationRes}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
      <Section6 />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home2;
