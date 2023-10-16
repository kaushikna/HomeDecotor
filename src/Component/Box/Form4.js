import React from "react";

import TextField from "@mui/material/TextField";
const Form4 = () => {
  return (
    <div>
      <form className=" new-form">
        <p className="Talk w-100">Talk to a renovation expert</p>
        <div className="form-group w-100">
          <TextField
            type="tel"
            className="form-control icon-flag"
            style={{ textIndent: "17px" }}
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            label="    Mobile Number"
            size="small"
            required
          />
        </div>
        <div className="form-group w-100">
          <TextField
            type="text"
            className="form-control"
            size="small"
            id="usr"
            label="Name"
          />
        </div>
        <div className="form-group w-100" >
          <TextField
            type="email"
            size="small"
            className="form-control"
            label="Email"
          />
        </div>
        <div className="form-group w-100">
          <span className="glyphicon glyphicon-map-marker icon"></span>
          <TextField
            type="text"
            size="small"
            className="form-control"
            label="Pickup Location"
          />
        </div>
        <p className="btntext">
          <span>
            This service is currently only limited to Bangalore and is coming to
            your city soon. You will be notified once it does.
          </span>
        </p>

        <button type="submit" className="btn btn-primary" id="button1">
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
export default Form4;
