import React from "react";

const Section5 = () => {
  return (
    <div className="sec5_head">
      <div className="container zero-mess">
        {/* <div className="sec5_1">3 steps to Pronto </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <img className="img_sec5" src="images/01_Illustration.svg" alt="" />
            <div className="d-flex sec5_btm">
              <img src="images/steps_1.png" alt="" />
              <p className="sec5_btxt">Book a site visit consultation</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <img
              className="img_sec5_new"
              src="images/03_Illustration.svg"
              style={{ "margin-top": "20px" }}
              alt=""
            />
            <div className="d-flex sec5_btm">
              <img src="images/steps_2.png" alt="" />
              <p className="sec5_btxt">
                Get instant quotations during site visit
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <img
              className="img_sec5"
              style={{ "margin-top": "16px" }}
              src="images/04_Illustration.svg"
              alt=""
            />
            <div className="d-flex sec5_btm">
              <img src="images/steps_3.png" alt="" />
              <p className="sec5_btxt">Pronto! Your paint team is on its way</p>
            </div>
          </div>
        </div> */}
        <div className="sec5_1">3 steps to Pronto </div>
          <div className="zero-container pronto-container">
             <div className="single-zero">
               <img className="" style={{ maxWidth:"213px" }} src="images/01_Illustration.svg"  alt="" />
               <div className="pronto-div">
                <div className="numb-div">1</div>
                <p className="sec5_btxt pronto-txt">Book a home consultation</p>
               </div>
             </div>
             <div className="single-zero single-pronto">
                <img className="pronto-img2" src="images/03_Illustration.svg" alt="" />
               <div className="pronto-div">
               <div className="numb-div">2</div>
                <p className="sec5_btxt pronto-txt-2">Get instant quotation to book your painting service</p>
               </div>
             </div>
             <div className="single-zero single-pronto">
             <img
              className="" 
              style={{ maxWidth:"210px" }}
              src="images/04_Illustration.svg"
              alt=""
            />
               <div className="pronto-div">
               <div className="numb-div">3</div>
                 <p className="sec5_btxt pronto-txt-3">Pronto! Your paint team is on its way</p>
               </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Section5;
