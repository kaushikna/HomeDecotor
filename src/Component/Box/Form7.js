import React, { useEffect, useState } from "react";
import { checkCityFromPincode, checkUserExisting, registeredNewUser, updateAddressProfile } from "../../_services/userRegistration.service";
import TextField from "@mui/material/TextField";
import { usePlacesWidget } from "react-google-autocomplete";
import Whatapp from '../../images/whatsapp-sm.svg';
import { useUserDispatch } from "../../context/loginContext";
import { ContactPageSharp } from "@mui/icons-material";

const Form7 = ({
  setFormNow,
  setUserMobile,
  userMobile,
  setRegistrationRes,
  isChecked,
  setIschecked,
  setCity,
  loginRes,
  setProperty,
  expId,
  setPropertyMailError,
  propertyMailError
}) => {
  const [inputsValue, setInputsValue] = useState({});
  const [buttonStatus, setButtonStatus] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [propertyError, setPropertyError] = useState(null);
  const userDispatch = useUserDispatch();

  useEffect(async () => {
    if (loginRes) {
      await setInputsValue((prev) => ({ ...prev, full_name: loginRes?.first_name, email: loginRes?.email }))
      await setButtonStatus(true);
    }
  }, [])

  const { ref: materialRef } = usePlacesWidget({
    apiKey: 'AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is',
    onPlaceSelected: async (place) => {
      let api = 'AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is';
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      let pincodeArray = place.address_components.slice(-1);
      setPropertyError("");
      if (pincodeArray[0].types[0] == "postal_code") {
        setInputsValue((prev) => ({
          ...prev,
          pincode: pincodeArray[0].long_name
        }))
      } else {
        let cityPincode = await fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + api);
        cityPincode = await cityPincode.json();
        let apiPinCode = cityPincode.results;
        for (var i = 0; i < apiPinCode.length; i++) {
          if (apiPinCode[i].address_components[0].types[0] == "postal_code") {
            let cityPinCode = apiPinCode[i].address_components[0].long_name;
            setInputsValue((prev) => ({
              ...prev,
              pincode: cityPinCode
            }))
          }
        }
      }
      setInputsValue((prev) => ({
        ...prev,
        searched_address: place?.formatted_address,
        placeid: place?.place_id,
        latitude: lat,
        longitude: lng,
        map_url: place?.url
      }))
      setButtonStatus(false);
    },
    options: {
      types: [],
      fields: ["address_components", "place_id", "formatted_address", "url", "geometry"],
      componentRestrictions: { country: "IN" },
    },
  });

  /**This function is used for submit form  */
  const submitFormData = async (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setPropertyError("")

    if (
      !inputsValue.full_name ||
      !inputsValue.email ||
      !inputsValue.searched_address ||
      !userMobile
    ) {
      return;
    }
    if (userMobile.toString().length !== 10) {
      return;
    }
    e.target.innerHTML = `<img src='https://super.homelane.com/loading_dots.GIF' />`;
    let cityQuery = {
      pincode: inputsValue?.pincode
    };
    let cityData = await checkCityFromPincode(cityQuery);
    let { city } = cityData.data.output;
    setCity(city);
    setButtonStatus(true);
    if (!loginRes) {
      let reqBody = {
        full_name: inputsValue?.full_name,
        city: city,
        email: inputsValue?.email,
        phone_number: userMobile,
        signup_source: "Pronto Wraps",
        pincode: inputsValue?.pincode,
        flow: "otp",
        opt_whatsapp: isChecked,
        country_code: "91",
        property_name: inputsValue?.searched_address,
        placeid: inputsValue?.placeid,
        searched_address: inputsValue?.searched_address,
        map_url: inputsValue?.map_url,
        first_interaction: `|ExperimentID=${expId}`,
        client_id: "4e4g57_4875_ab99"
      };

      let reqResponse = await registeredNewUser(reqBody);

      // if (reqResponse?.data?.msg) {
      //   setErrorMessage(reqResponse?.data?.msg);
      // }
      if (reqResponse?.data?.status === 1) {
        setRegistrationRes(reqResponse?.data);
        window.dataLayer.push({
          'event': 'userSignUp',
          'input-phone': `91${userMobile}`,
          'input-email': `${inputsValue?.email}`,
          'input-name': `${inputsValue?.full_name}`,
          'property': `${inputsValue?.searched_address}`,
          'selected-whatsapp': `${isChecked}`,
          'pincode': `${inputsValue?.pincode}`,
          'city': `${city}`,
        });
        setFormNow(2);
      }
      setButtonStatus(false);
    }
    else {
      if (city.toLowerCase() === 'bengaluru') {
        let updateBody = {
          email: loginRes?.email,
          city: city,
          searched_address: inputsValue?.searched_address,
          placeid: inputsValue?.placeid,
          user_id: loginRes?.user_id,
          latitude: inputsValue?.latitude,
          longitude: inputsValue?.longitude,
          property_name: inputsValue?.searched_address,
          map_url: inputsValue?.map_url,
          leadId: loginRes?.pronto_lead
        }
        let updateProperty = await updateAddressProfile(updateBody);
        if (updateProperty.data?.status == 200 && !updateProperty.data?.error) {
          window.dataLayer.push({
            'event': 'Update-Property',
            'property': `${inputsValue?.searched_address}`
          });
          userDispatch({ type: 'LOGIN_SUCCESS' })
          await setFormNow(1);
        }
      }
      else {
        await setProperty(inputsValue?.searched_address);
        await setFormNow(4);
      }
    }
  };

  /**This Function used for handle mobile number validation */
  const handleMobileInputChange = (event) => {
    if (!event.target.value.toString().match("^[0-9]*$")) {
      return;
    }
    if (event.target.value.toString().length > 10) {
      return;
    }
    if (event.target.value.toString().match("^[0-9]*$")) {
      setUserMobile(event.target.value);
    }
  };

  const formCheck = async (e, name) => {
    switch (name) {
      case 'name':
        if (!inputsValue.full_name) {
          setNameError('Please enter your name.');
          return
        }
        if (inputsValue.full_name.length < 3 || !(/^[a-zA-Z'\s]+$/.test(inputsValue.full_name))) {
          setNameError('Allowed alphabets & space - min 3 characters');
          return
        }
        window.dataLayer.push({
          'event': 'NameOnBlur',
          'name': `${inputsValue.full_name}`
        });
        break;

      case 'email':
        if (!inputsValue.email) {
          setEmailError('Please enter your email address.');
          return
        }
        if ((!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputsValue.email)))) {
          setEmailError('Invalid Email Id')
          return
        }
        let reqQuery = {
          email: inputsValue.email
        };
        let formResponseData = await checkUserExisting(reqQuery);
        console.log("formResponseData", formResponseData)
        if (formResponseData?.data && formResponseData?.data.status) {
          document.getElementById('emailError').style.display = 'inline';
        } else {
          window.dataLayer.push({
            'event': 'EmailOnBlur',
            'email': `${inputsValue.email}`
          });
        }
        break;

      case 'property':
        if (!inputsValue.searched_address) {
          setPropertyError('Please enter your property');
        } else {
          window.dataLayer.push({
            'event': 'PropertyOnBlur',
            'property': `${inputsValue.searched_address}`
          });
        }
    }
  };

  const changeForm = () => {
    setFormNow(0);
    setUserMobile(null);
  }

  const handleWhatsAppOptIn = () => {
    setIschecked(!isChecked);
    window.dataLayer.push({ 'event': 'whatsappCheck', 'whatsappCheck': !isChecked });
  }

  return (
    <div>
      <style>{
        `#emailError{ display: none;}`
      }</style>

      <p className="Talk"> <span className="backArrow"> <img src="/images/left.png" onClick={e => setFormNow(0)}></img> </span>Review your details</p>

      <div className="form-group w-100">
        <TextField
          type="tel"
          size="small"
          className="form-control icon-flag"
          value={userMobile}
          style={{ textIndent: "17px" }}
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          label="Mobile Number"
          required
          inputProps={{ maxLength: 10 }}
          onChange={(e) => handleMobileInputChange(e)}
          disabled={true}
        />
      </div>
      <div className="form-group wtsapp new-form-2 new-form-3">
        <div>
          <label className="form-check-label " htmlFor="exampleCheck1">
            You can reach me on WhatsApp
          </label>
          <img className="whatap-sm" src={Whatapp} alt="whatap" />
        </div>
        <div>
          <input type="checkbox" id="switch"
            class="checkbox" defaultChecked={isChecked} onChange={handleWhatsAppOptIn} />
          <label for="switch" class="toggle" />
        </div>
      </div>

      <div className="form-group w-100">
        <TextField
          size="small"
          type="text"
          className="form-control"
          label="Name"
          required
          onChange={(e) => {
            setNameError("");
            setInputsValue((prev) => ({ ...prev, full_name: e.target.value }))
          }
          }
          onBlur={(e) => formCheck(e, 'name')}
          disabled={loginRes ? true : false}
          value={inputsValue?.full_name}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
          }}
        />
        {nameError && <span className="errorMessage">{nameError}</span>}
      </div>
      <div className="form-group w-100">
        <TextField
          size="small"
          type="email"
          className="form-control"
          label="Email"
          placeholder="Email"
          required
          onBlur={(e) => formCheck(e, 'email')}
          onChange={e => {
            setEmailError(""); document.getElementById('emailError').style.display = 'none';
            setInputsValue(prev => ({ ...prev, 'email': e.target.value }))
          }}
          disabled={loginRes ? true : false}
          value={inputsValue?.email}
        />
        {<span className="errorMessage" id='emailError'>This email address is already in use. Please use another email address to signup or <button className="errorMessageButton" onClick={e => changeForm()}>login</button> with the mobile number associated with this email address.</span>}
        {<span className="errorMessage">{emailError}</span>}
      </div>
      <div className="form-group w-100">
        <TextField
          inputRef={materialRef}
          size="small"
          type="text"
          className="form-control"
          label="Address"
          required
          placeholder="Enter Property / Society Name"
          onBlur={(e) => formCheck(e, 'property')}
          inputProps={{
            sx: {
              "&::placeholder": {
                opacity: 1
              }
            }
          }}
        />
        {<span className={"errorMessage"}>{propertyError}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        id="button1"
        disabled={buttonStatus}
        onClick={submitFormData}
      >
        Book free Home visit
      </button>
    </div>
  );
};

export default Form7;
