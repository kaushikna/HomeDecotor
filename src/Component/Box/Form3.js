import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useUserDispatch } from "../../context/loginContext";
import { Link } from "react-router-dom";
import {
  sendOTPToUser,
  verifyOTP,
} from "../../_services/userRegistration.service";
import ResendOtp from '../resendotp';
import TextField from "@mui/material/TextField";
const Form3 = ({
  userMobile,
  setFormNow,
  registrationRes,
  setmessageLabel,
  city
}) => {
  const [OTP, setOTP] = useState('');
  const [errorMessage,seterrorMessage] = useState('');
  
  var userDispatch = useUserDispatch();

  async function fetchApi(params) {
    let decodeUser = decodeURIComponent(registrationRes?.user_id);
    let reqObj = {
      "flag":"1",
      "user_id":decodeUser,
      "otp":"",
      "phone":userMobile,
      "email":registrationRes?.email,
      "signup_source":"Pronto Wraps",
      "type":"text",
      "isEditNum":"true",
      "isResendOtpClick":"no"
    }
    await sendOTPToUser(reqObj);
  }
  /**Here we call generateLoginOTP for user before render the component*/
  useEffect(()=>{
    
    if(userMobile && registrationRes){
      fetchApi()
    }
  },[userMobile,registrationRes]);

  /**Submit otp form and verify otp */
  const submitOTPForm = async(e)=>{
    e.preventDefault();
    seterrorMessage('');
    if(OTP && OTP.toString().length>4){
      seterrorMessage('Value should be a length of 4 digit.');
      return
    }

    if(OTP && userMobile){
      /**
       * Here we call api to verify otp signup
       */
       let decodeUser = decodeURIComponent(registrationRes?.user_id);
       let reqObj = {
         "flag":"3",
         "user_id":decodeUser,
         "otp":OTP,
         "phone":userMobile,
         "email":registrationRes?.email,
         "signup_source":"Pronto Wraps",
         "type":"text",
         "isEditNum":"true",
         "isResendOtpClick":"no"
       }
      e.target.innerHTML = `<img src='https://super.homelane.com/loading_dots.GIF' />`;
      let responseObj = await sendOTPToUser(reqObj);
      e.target.innerHTML = 'Verify'
      /**Show msg of response */
      if(responseObj?.data && responseObj?.data?.status === 0){
        seterrorMessage("Wrong or Expired OTP! Use resend to send OTP")
      };
      if(responseObj?.data && responseObj?.data?.status){
        setmessageLabel('You have successfully registered.')
        window.dataLayer.push({
          'event': 'OtpSubmit',
          'otp':`${OTP}`
        });
        //localStorage.setItem('loginResponse',JSON.stringify(responseObj?.data));
        //localStorage.setItem('accessToken',responseObj?.data?.accessToken);
        if(city && city.toLocaleLowerCase() === 'bengaluru'){
          userDispatch({type: 'LOGIN_SUCCESS'})
          setFormNow(1);
        }
        else{
          setFormNow(4);
        }
        /**
         * 
         
        setTimeout(() => {
          userDispatch({ type: "LOGIN_SUCCESS" });
        }, 1000);
        */
      }
    }
  };

  const handleKeyPress = (target) => {
    if(target.charCode==13){
      document.getElementById("submitOtpBtn")?.click();
    } 
  }

  return (
    <div>
      <h3 className="form-head"><span className="backArrow"> <img src="/images/left.png" onClick={e=>setFormNow(0)}></img> </span>{" "}Talk to a renovation expert</h3>
      
      <p className="">
      Please enter verification code (OTP) sent to <span className="bold">{userMobile}</span>{" "}
      <Link to="#" style={{ color: "#E71C24", textDecoration: "none", marginLeft: '5px' }} onClick={e=>{e.preventDefault();setFormNow(0)}}>
        Change
      </Link>
    </p>
      <div className="form-group" style={{ "margin-right": "48px", "width": "100%" }}>
       <TextField
         type="text"
         className="form-control"
         id="phone"
         name="phone"
         label="Enter OTP Number"
         required
         size="small"
         onChange={(e) => { seterrorMessage('');setOTP(e.target.value)}}
         onInput = {(e) =>{
          e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0,4);
        }} 
        onBlur={(e)=>{window?.dataLayer?.push({'event': 'OtpOnBlur','otp':`${e?.target?.value}`})}}  
        onKeyPress={handleKeyPress}         
       />
       <span className='errorMessage'>{errorMessage}</span>
     </div>
     <div class="form-red-btn" id="submitOtpBtn" onClick={(e) => submitOTPForm(e)}>
       Verify
     </div>
    <span className="form-red-text"> <ResendOtp resend={fetchApi}/></span>
    </div>

  );
};

export default Form3;
