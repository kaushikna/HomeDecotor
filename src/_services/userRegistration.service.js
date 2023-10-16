import apiPath from "../_constants/apiPath";
import baseUrl from "../_constants/apiBaseUrl";
import axios from "axios";

/** This function used for check user existing in our system */
export async function checkUserExisting(query) {
  const res =  await axios.get(baseUrl.BASE_URL + apiPath.USER_EXISTING,{
    params:query
  });
  return {
    data: res.data
  };
};

/**This function is used for registered a new user in our system */
export async function registeredNewUser(body) {
    const res =  await axios.post(baseUrl.BASE_URL + apiPath.USER_REGISTRATION,body);
    return {
        data: res.data
    };
};

/** This function is used for sending a OTP to a new user from our system */
export async function sendOTPToUser(body) {
    const res =  await axios.post(baseUrl.BASE_URL + apiPath.GET_OTP,body);
    return {
        data: res.data
    };
};

/** This function is used for sending a OTP to a existing user from our system */
export async function sendLoginOTPToUser(body) {
  const res =  await axios.post(baseUrl.BASE_URL + apiPath.LOGIN_OTP,body);
  return {
      data: res.data
  };
};

/** This function is used for verify a OTP of user from our system */
export async function verifyOTP(body) {
  const res =  await axios.post(baseUrl.BASE_URL + apiPath.VERIFY_OTP,body);
  return {
      data: res.data
  };
};

export async function checkCityFromPincode(query) {
  const res =  await axios.get(baseUrl.BASE_URL + apiPath.GET_CITY_BOOKINGS,{
    params:query
  });
  return {
      data: res.data
  };
}

export async function updateAddressProfile(body) {
  const res =  await axios.post(baseUrl.BASE_URL + apiPath.UPDATE_ADDRESS,body);
  return {
      data: res.data
  };
};

export async function checkIfPhoneValid(body) {
  const res = await axios.post(baseUrl.BASE_URL + apiPath.VALIDATE_PHONE,body);
  return {
      data: res.data
  };
}