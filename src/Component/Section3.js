import React from "react";

const Section3 = () => {
  return (
    // <div className="section_3">
    //   <div className="container">
    //     <div className="sec3_1">Zero Mess Process</div>
    //     <div className="row">
    //       <div className="col-lg-4 col-md-12 col-sm-12 col-12">
    //         <img
    //           className="sec3_3"
    //           src="images/furniture_Covering.svg"
    //           alt=""
    //         />
    //         <h3 className="heading sec3_2">Furniture and Floor Covering</h3>
    //       </div>
    //       <div className="col-lg-4 col-md-12 col-sm-12 col-12">
    //         <img className="sec3_3" src="images/Modern_Tool.svg" alt="" />
    //         <h3 className="heading sec3_2">Modern Automated Tools</h3>
    //       </div>
    //       <div className="col-lg-4 col-md-12 col-sm-12 col-12">
    //         <img className="sec3_3" src="images/sanitisation.svg" alt="" />
    //         <h3 className="heading sec3_2">Site Sanitisation</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="section_3">
        <div className="container zero-mess">
          <h1 className="zero-mess-txt">Zero Mess Process</h1>
          <div className="zero-container">
             <div className="single-zero">
               <img className="sec3_3" src="images/furniture_Covering.svg" alt="" />
               <h3 className="zero-text">Furniture and Floor Covering</h3>
             </div>
             <div className="single-zero">
               <img className="sec3_3" src="images/Modern_Tool.svg" alt="" />
               <h3 className="zero-text">Modern Automated Tools</h3>
             </div>
             <div className="single-zero">
               <img className="sec3_3" src="images/sanitisation.svg" alt="" />
               <h3 className="zero-text">Site Sanitisation</h3>
             </div>
          </div>
        </div>
    </div>
  );
};

export default Section3;
