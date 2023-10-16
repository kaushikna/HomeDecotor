import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Link } from "react-router-dom";
import {
  sendLoginOTPToUser,
  verifyOTP,
} from "../../_services/userRegistration.service";
import { useUserDispatch } from "../../context/loginContext";
import ResendOtp from '../resendotp'
//Exiting user Login OTP component

import TextField from "@mui/material/TextField";
const Form6 = ({ userMobile, setFormNow, setmessageLabel, setLoginRes, expId }) => {
  const [OTP, setOTP] = useState('');
  var userDispatch = useUserDispatch();
  const [errorMessage,seterrorMessage] = useState('');
  
  async function fetchApi(params) {
    await sendLoginOTPToUser({phone:userMobile,flag:"1",type:"text"});
  }

  /**Here we call generateLoginOTP for user before render the component*/
  useEffect(()=>{
    
    if(userMobile){
      fetchApi()
    }
  },[userMobile]);

  /**Submit otp form and verify otp */
  const submitOTPForm = async(e)=>{
    seterrorMessage('');
    e.preventDefault();
    if(OTP && OTP.toString().length>4){
      seterrorMessage('Value should be a length of 4 digit.');
      return
    }

    if(OTP && userMobile){
      e.target.innerHTML = `<img src='https://super.homelane.com/loading_dots.GIF' />`;
      let responseObj = await verifyOTP({phone:userMobile,otpLogin:'true',otp:OTP,pronto_login:'true',ajax_mode:'1',pronto_source:"Pronto Wraps",first_interaction:`|ExperimentID=${expId}`});
      /**Show msg of response */
      e.target.innerHTML = "Verify";
      if(responseObj?.data?.error){
        seterrorMessage("Wrong or Expired OTP! Use resend to send OTP");
      };
      if(responseObj?.data && responseObj?.data?.accessToken){
        setmessageLabel('You have successfully login.')
        localStorage.setItem('loginResponse', JSON.stringify(responseObj?.data));
        localStorage.setItem('accessToken', responseObj?.data?.accessToken);
        setLoginRes(responseObj?.data);
        if (responseObj?.data?.pronto_user === "false") {
          setFormNow(6);
          window.dataLayer.push({
            'event': 'Pronto-Lead-SignIn',
            'input-phone' : responseObj?.data?.mobile,
            'input-email' : responseObj?.data?.email,
            'input-name'  : responseObj?.data?.first_name,
            'customerId'  : responseObj?.data?.customer_id
          })
        } else {
          setFormNow(1);
          window.dataLayer.push({
            'event': 'userSignIn',
            'input-phone': `91${userMobile}`
          });
        }
      }
    }
  };
  
  return (
 
        <div >
          <h3><span className="backArrow"> <img src="/images/left.png" onClick={e=>{e.preventDefault();setFormNow(0)}}></img></span>{" "}Talk to a renovation expert</h3>
          <p className="">
          Please enter verification code (OTP) sent to <span className="bold">{userMobile}</span>{" "}
          <Link to="#" style={{ color: "red", textDecoration: "none", marginLeft: '5px' }} onClick={e=>{e.preventDefault();setFormNow(0)}}>
            Change
          </Link>
        </p>
          <div className="form-group" style={{ "margin-right": "48px", "width": "100%" }}>
           <TextField
             type="text"
             className="form-control"
             style={{marginLeft:"10px"}}
             id="phone"
             name="phone"
             label="Enter OTP Number"
             required
             size="small"
             onChange={(e) => { seterrorMessage('');setOTP(e.target.value)}}
             onInput = {(e) =>{
              e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0,4);
            }}            
           />
           <span className='errorMessage' style={{marginTop:'10px'}}>{errorMessage}</span>
         </div>
         <div class="form-red-btn" onClick={(e) => submitOTPForm(e)}>
           Verify
         </div>
         <ResendOtp resend={fetchApi}/>
        </div>
  );
};

export default Form6;
