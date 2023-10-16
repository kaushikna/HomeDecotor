import React,{useEffect,useState} from 'react'

const ResendOtp = ({resend}) => {
    const [counter,setCounter] = useState(59);

    useEffect(()=>{
        let interval = setInterval(() =>{
          setCounter((timer)=>timer-1);
        }, 1000);
        setTimeout(() => {
          clearInterval(interval);
          setCounter(0);
      }, 59000);
    },[]);

    const resendOTP = ()=>{
      resend();
      setCounter(59);
      let interval = setInterval(() =>{
        setCounter((timer)=>timer-1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setCounter(0);
    }, 59000);

    }

  return (
    <p className="btntext form-para" style={{textAlign:'center'}}> 
    {
    counter === 0 ? (
    <a style={{textDecoration:'underline', color:'#212529'}} href='/' onClick={e=>{e.preventDefault();resendOTP()}} > Resend OTP</a>) : 
    'Resend OTP'} in
    <span> {counter}s </span>
    </p>
  )
}

export default ResendOtp