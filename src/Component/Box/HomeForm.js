import React from "react";

const InputMobile = ({ FormNow, setFormNow }) => {
  const [number, setNumber] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form1" onSubmit={handleSubmit}>
        <p className="Talk">Talk to a Designer</p>
        <div className="form-group">
          <input
            type="tel"
            className="form-control icon-flag"
            style={{ "textIndent": "17px" }}
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Mobile Number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" checked />
          <label className="form-check-label " htmlFor="exampleCheck1">
            You can reach me on WhatsApp
          </label>
        </div>
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

export default InputMobile;
