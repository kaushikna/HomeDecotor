import React, { useState, useEffect } from "react";
import Form1 from "../../Component/Box/Form1";
import Form3 from "../../Component/Box/Form3";
import Form4 from "../../Component/Box/Form4";
import Form5 from "../../Component/Box/Form5";
import Form6 from "../../Component/Box/Form6";
import Form7 from "../../Component/Box/Form7";
import SuccessLogin from "../../Component/Box/SuccessMessage";

import { useUserState } from "../../context/loginContext";


const Forms = () => {
  var { isAuthenticated } = useUserState();

  const [FormNow, setFormNow] = useState(0);

  const [userMobile, setUserMobile] = useState(null);
  const [registrationRes, setRegistrationRes] = useState(null);
  const [messageLabel, setmessageLabel] = useState("");
  const [city, setCity] = useState("");
  const [loginRes, setLoginRes] = useState(null);
  const [property, setProperty] = useState("");
  const [variant, setVariant] = useState("");
  const [expId, setExpId] = useState("");

  /** WhatsApp checkbox */
  const [isChecked, setIschecked] = useState(true);
  /** UseEffect call */
  useEffect(() => {
    if (isAuthenticated) {
      setFormNow(1);
    } else {
      setFormNow(0);
      setUserMobile(null);
    }
    attachedEventListners();
  }, [isAuthenticated]);

  const scrollToForm = (e) => {
    document.getElementById('form').scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  const attachedEventListners = () => {
    window.addEventListener("VARIANT", (event) => {
      setVariant("VARIANT");
      setExpId("OT6drNwfRxCbuz1f1nrhxw:1");
    })
    window.addEventListener("DEFAULT", (event) => {
      setVariant("DEFAULT");
      setExpId("OT6drNwfRxCbuz1f1nrhxw:2");
    })
  }

  return (
    <>

      {/* {!isAuthenticated &&
        <button
          id="btn-1"
          type="button"
          className="footer-btn2 white-sectionn2"
          onClick={e => scrollToForm()}
        >
          Book Free Home Visit
        </button>
      } */}

      {FormNow === 0 ? (
        <Form1
          setFormNow={setFormNow}
          userMobile={userMobile}
          setUserMobile={setUserMobile}
          isChecked={isChecked}
          setIschecked={setIschecked}
        />
      ) : (
        <div></div>
      )}
      {FormNow === 1 ? (
        <SuccessLogin message={messageLabel} userMobile={userMobile} />
      ) : (
        <div></div>
      )}
      {FormNow === 2 ? (
        <Form3
          setmessageLabel={setmessageLabel}
          setFormNow={setFormNow}
          userMobile={userMobile}
          registrationRes={registrationRes}
          isChecked={isChecked}
          setIschecked={setIschecked}
          city={city}
        />
      ) : (
        <div></div>
      )}
      {FormNow === 3 ? <Form4 /> : <div></div>}
      {FormNow === 4 ? (
        <Form5
          city={city}
          setCity={setCity}
          setFormNow={setFormNow}
          registrationRes={registrationRes}
          loginRes={loginRes}
          property={property}
        />
      ) : <div></div>}
      {FormNow === 5 ? (
        <Form6
          setFormNow={setFormNow}
          userMobile={userMobile}
          setmessageLabel={setmessageLabel}
          setIschecked={setIschecked}
          setLoginRes={setLoginRes}
          expId={expId}
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
          isChecked={isChecked}
          setIschecked={setIschecked}
          setUserMobile={setUserMobile}
          setCity={setCity}
          loginRes={loginRes}
          setProperty={setProperty}
          expId={expId}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Forms;
