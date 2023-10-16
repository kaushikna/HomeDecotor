import React from 'react'

import {Link} from 'react-router-dom';

const InputMobile = () => {
  return (
    <div>
        <form className="form1">
            <p className="Talk">Talk to a Designer</p>
            <div className="form-group">
            <input type="tel" className="form-control icon-flag" style={{"textIndent":"17px"}} id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="    Mobile Number" required/>    
            </div>
            <div className="form-group">
                <input type="checkbox"   className="form-check-input" id="exampleCheck1" checked />
                <label className="form-check-label " htmlFor="exampleCheck1">You can reach me on WhatsApp</label>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id="usr" placeholder="Name"/>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="input-group mb-3">
                  <input type="text" className="form-control icon-rtl" style={{"textIndent":"17px"}} placeholder="Location / Society Name"/>
                  <Link to="#" className="icon-gps gpstext">LOCATE ME</Link>
            </div>
            <button type="submit" className="btn btn-primary" id="button1">Book free Home visit</button>
            <p className="btntext">By submitting this form, you agree to the <span>privacy policy</span> and <span>terms of use</span></p>
        </form>

    </div>
  )
}

export default InputMobile