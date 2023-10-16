import React, { useState } from "react";
import { checkUserExisting, checkIfPhoneValid } from "../../_services/userRegistration.service";
import Whatapp from '../../images/whatsapp-sm.svg';

import TextField from "@mui/material/TextField";

import "./forms.css";
const InputMobile = ({ setFormNow, setUserMobile, userMobile, isChecked, setIschecked }) => {

  /**Field validation error */
  const [erroMessage, setErrorMessage] = useState('');

  /**This function is used for submit form  */
  const submitFormData = async (e) => {
    setErrorMessage("")
    e.preventDefault();
    if (!userMobile) {
      setErrorMessage("Please provide mobile number")
      return;

    }
    if (userMobile.toString().length !== 10) {
      setErrorMessage("Please provide a valid mobile number")
      return;
    }
    let body = {
      phone: userMobile,
      country: "IN"
    }
    let res = await checkIfPhoneValid(body);
    try {
      if (!res?.data?.data?.valid) {
        await setErrorMessage("Invalid mobile number")
        return;
      }
      else {
        await setErrorMessage("");
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }

    e.target.innerHTML = `<img src='https://super.homelane.com/loading_dots.GIF' />`;
    let reqQuery = {
      mobile: userMobile,
    };
    let formResponseData = await checkUserExisting(reqQuery);
    window.dataLayer.push({
      'event': 'MobileSubmit',
      'phone': `${userMobile}`
    });
    if (formResponseData?.data && formResponseData?.data.status) {
      setFormNow(5);
    } else {
      setFormNow(6);
    }
  };

  /**This Function used for handle mobile number validation */
  const handleMobileInputChange = (event) => {
    setErrorMessage("")
    if (!event.target.value.toString().match("^[0-9]*$")) {
      return;
    }

    if (event.target.value.toString().length > 10) {
      return;
    }
    setUserMobile(event.target.value);
  };

  const handleMobileOnBlur = (event) => {
    let phone = event.target.value;
    if (!phone) return;
    window.dataLayer.push({
      'event': 'MobileOnBlur',
      'input-phone': `91${phone}`
    });
  };

  const handleWhatsAppOptIn = () => {
    setIschecked(!isChecked);
    window.dataLayer.push({ 'event': 'whatsappCheck', 'whatsappCheck': !isChecked });
  }

  const handleRedirection = (link) => {
    if (link === 'term of use') {
      window.dataLayer.push({ 'event': 'Terms-of-use-clicked' });
    } else {
      window.dataLayer.push({ 'event': 'Privacy-Policy-Clicked' });
    }

  }

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      document.getElementById("submitMobileBtn")?.click();
    }
  }

  return (
      <>
        <h3>Talk to a renovation expert</h3>
        <div className="form-group" >
          <TextField
            type="text"
            className="form-control icon-flag"
            style={{ textIndent: "22px", marginTop: "20px" }}
            id="phone"
            name="phone"
            label="Mobile Number"
            size="small"
            fullWidth
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 10);
            }}
            onChange={(e) => handleMobileInputChange(e)}
            defaultValue={userMobile}
            onBlur={(e) => handleMobileOnBlur(e)}
            onKeyPress={handleKeyPress}
          />
          <p className="errorMessage" style={{marginTop:"10px"}}>{erroMessage}</p>
        </div>
        <div className="form-group wtsapp new-form-2">
          <div>
            <label className="form-check-label " htmlFor="exampleCheck1"  >
              You can reach me on WhatsApp
            </label>
            <img className="whatap-sm" src={Whatapp} alt="whatap" />
          </div>
          <div>
            <input type="checkbox" id="switch"
              class="checkbox" defaultChecked={isChecked} onChange={handleWhatsAppOptIn} />
            <label htmlFor="switch" class="toggle" />
          </div>
        </div>
        
        <div class="form-red-btn" id="submitMobileBtn" onClick={submitFormData}>
          Book Free Home Visit
        </div>
        <p className="form-para submitting">By submitting this form, you agree to the
          <a className="form-red-text" href="/privacypolicy" target="_blank" rel="noreferrer" onClick={(e) => handleRedirection('privacy policy')}> privacy policy</a> and
          <a href="/termsofuse" className="form-red-text" onClick={(e) => handleRedirection('term of use')} target="_blank"> terms of use</a>
        </p>
      </>
  );
};

export default InputMobile;
