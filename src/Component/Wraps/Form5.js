import React, { useEffect, useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { usePlacesWidget } from "react-google-autocomplete";
import { checkCityFromPincode, updateAddressProfile } from "../../_services/userRegistration.service";
import { useUserDispatch } from "../../context/loginContext";

const Form5 = ({ city, setCity, setFormNow, registrationRes, loginRes, property }) => {

  useEffect(() => {
    materialRef.current.value = registrationRes?.searched_address || property;
  }, [])

  const [inputsValue, setInputsValue] = useState({});
  const [show, setShow] = useState(true);
  const [submitBFC, setSubmitBFC] = useState(false);
  const [fetchedCity, setFetchedCity] = useState('')
  const userDispatch = useUserDispatch();

  useEffect(async()=> {
    if(inputsValue?.pincode)
      await checkCity()
  },[inputsValue?.pincode])

  const { ref: materialRef } = usePlacesWidget({
    apiKey: 'AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is',
    onPlaceSelected: async (place) => {
      let api = 'AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is';
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      let pincodeArray = place.address_components.slice(-1);
      setSubmitBFC(false);
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
    },
    options: {
      types: [],
      fields: ["address_components", "place_id", "formatted_address", "url", "geometry"],
      componentRestrictions: { country: "IN" },
    },
  });

  const submitFormData = async (e) => {
    e.preventDefault();
    if (!inputsValue?.searched_address) {
      return;
    }
    setShow(true);
    e.target.innerHTML = `<img src='https://super.homelane.com/loading_dots.GIF' />`
    if (fetchedCity.toLowerCase() === 'bengaluru') {
      let updateBody = {
        email: registrationRes?.email || loginRes?.email,
        city: fetchedCity,
        searched_address: inputsValue?.searched_address,
        placeid: inputsValue?.placeid,
        user_id: registrationRes?.user_id || loginRes?.user_id,
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
          'property':`${inputsValue?.searched_address}`
        });
        userDispatch({type: 'LOGIN_SUCCESS'})
        await setFormNow(1);
      }
    }
    await setCity(fetchedCity);
  }

  const handleEdit = (e) => {
    materialRef.current.value = "";
    setShow(false);
    setSubmitBFC(false);
    setInputsValue((prev) => ({
      ...prev,
      pincode: ''
    }))
}

 const handleBFC = async() => {
  await checkCity();
}

const checkCity = async() => {
  let cityQuery = {
    pincode: inputsValue?.pincode
  };
  let cityData = await checkCityFromPincode(cityQuery);
  let fetchedCity = cityData.data.output.city;
  setFetchedCity(fetchedCity);
  if(fetchedCity.toLowerCase() === 'bengaluru'){
    setSubmitBFC(true)
  }
  else{
    setSubmitBFC(false);
  }
}

  return (
    <div>
      <form className="new-form" >
        <p className="Talk w-100">
          <Link to="#" style={{ color: "Black" }}>
            <span className="backArrow"> <img src="/images/left.png"></img></span>
          </Link>{" "}
          We're not there yet!
        </p>
        <div className="input-group">
          <TextField
            inputRef={materialRef}
            size="small"
            type="text"
            className="form-control editButton"
            placeholder="Enter Property / Society Name"
            disabled={show}
            onBlur={handleBFC}
          />
          <Link to="#" className="gpstext2" onClick={e => handleEdit(e)}>
            edit
          </Link>
        </div>
        {!submitBFC &&
          <p className="btntext">
            <span>
              This service is currently only limited to Bangalore and is coming to your city soon.
              You will be notified once it does. You can switch to a property in Bangalore to complete booking your home visit..
            </span>
          </p>
        }
        <br />

        <button type="submit" className="btn btn-primary" id="button1" disabled={!submitBFC} onClick={submitFormData}>
          Book free Home visit
        </button>
        <p className="btntext">
          By submitting this form, you agree to the <span>privacy policy</span>{" "}
          and <span>terms of use</span>
        </p>
      </form>
    </div>
  );
};

export default Form5;