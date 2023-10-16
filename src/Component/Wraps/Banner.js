import React, { useState } from "react";
import {
  Switch,
  styled,
  Box,
} from "@mui/material";
import { checkUserExisting, checkIfPhoneValid } from "../../_services/userRegistration.service";
import { BannerStyle } from "./BannerStyle";
import Forms from '../Wraps/Forms'

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    color: "#fff !important",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Banner({
  // setFormNow,
  setUserMobile,
  userMobile,
  isChecked,
  setIschecked,
  FormNow,
  setFormNow
}) {
  const [erroMessage, setErrorMessage] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const submitFormData = async (e) => {
    setErrorMessage("");
    e.preventDefault();
    if (!userMobile) {
      setErrorMessage("Please provide mobile number");
      return;
    }
    if (userMobile.toString().length !== 10) {
      setErrorMessage("Please provide a valid mobile number");
      return;
    }
    let body = {
      phone: userMobile,
      country: "IN",
    };
    let res = await checkIfPhoneValid(body);
    try {
      if (!res?.data?.data?.valid) {
        await setErrorMessage("Invalid mobile number");
        return;
      } else {
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
      event: "MobileSubmit",
      phone: `${userMobile}`,
    });
    if (formResponseData?.data && formResponseData?.data.status) {
      setFormNow(5);
    } else {
      setFormNow(6);
    }
  };
  const handleMobileInputChange = (event) => {
    setErrorMessage("");
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
      event: "MobileOnBlur",
      "input-phone": `91${phone}`,
    });
  };

  const handleRedirection = (link) => {
    if (link === "term of use") {
      window.dataLayer.push({ event: "Terms-of-use-clicked" });
    } else {
      window.dataLayer.push({ event: "Privacy-Policy-Clicked" });
    }
  };

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      document.getElementById("submitMobileBtn")?.click();
    }
  };

  return (
    <BannerStyle>
      <Box className="main_banner">
        <Box className={`inner-sec1 ${FormNow === 6 ? "renovation" : ""} `}>
          <Box className="inner-sec2">
            <h2>
              Lightning fast surface transformation,<span>starting at ₹5,000.*</span>
            </h2>
          </Box>
        </Box>
      </Box>
    </BannerStyle>
  );
}

export default Banner;
