import React ,{useState,useEffect} from "react";
import { useUserDispatch } from "../../context/loginContext";

const Form5 = ({ message, userMobile }) => {
  var userDispatch = useUserDispatch();
  const [usersData, setUserData] = useState({});
  useEffect(() => {
    let userData = localStorage.getItem("loginResponse");
    if (userData) {
      let obj = JSON.parse(userData);
      setUserData(obj);
    }
  }, []);

  /**Logout from our application */
  const logoutFunction = (e) => {
    e.preventDefault();
    localStorage.clear();
    userDispatch({ type: "SIGN_OUT_SUCCESS" });
    window.location.href = "/wraps";
  };

  return (
    <>
     
        <div className="centerImage">
          <img src="images/success2.png" alt="success" />
        </div>
        <div>
          <p className="textSuccessLogin">Success !</p>
          
          <p className="textsuccessPText">{userMobile || usersData?.mobile ? `Thank you for sharing your details. You will receive a callback shortly from our team on your registered mobile number ${  userMobile && userMobile.slice(0,4) || usersData?.mobile && userMobile || usersData?.mobile.slice(0,4) }****** to setup a meeting with a colour consultant. ` : "You have successfully login"}</p>
          <div className="centerImage"  onClick={e=>{logoutFunction(e)}}>
            <a className="logoutBtn" href="#">
              <img className="logoutImg" src="images/logout.png" alt="logout" />
              <span className="logoutText">Logout</span>
            </a>
        </div>
        </div>
    </>
  );
};

export default Form5;
