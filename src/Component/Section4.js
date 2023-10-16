import React from "react";
import Slider from "react-slick";
const Section4 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",  
    slidesToShow:3,
      dots: true,
    slidesToScroll: 1,
   
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
        
          slidesToShow:1,
          slidesToScroll: 1,
          centerPadding: "0px",  

          
        }
      }
    ]

  };
  return (

    <div className="img-bg ">
      <div className="container new-service-container desktopServices">
        <h1 className="service-head">Our Service Offerings</h1>
        <div className="service-flex">
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_1.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Interior and Exterior Painting</h3>
                <p className="service-para">Beautify your home - both on the outside and inside - with a range of colours and styles.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_2.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Texture Painting</h3>
                <p className="service-para">Latest and trending texture designs to give your home the facelift of the future.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_3.png" alt="" />
              <div className="service-text-box">
              <h3 className="service-title">Stencil Painting</h3>
              <p className="service-para">Make your home and walls stand out with attractive patterns and vivid colours.</p>
            </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_4.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Waterproofing</h3>
                <p className="service-para">Durable and moisture-resistant solutions to make your dream home waterproof.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/new_sec_4.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Wooden Painting</h3>
                <p className="service-para">Coat your wooden furniture and interiors with special paints for wooden surfaces.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_6.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Metal Painting</h3>
                <p className="service-para">Add a touch of class to all metalworks with specially formulated paints for metals.</p>
              </div>
            </div>
        </div>
      </div>
    
      <div className="container new-service-container mobileServices">
        <h1 className="service-head">Our Service Offerings</h1>
        <div className="service-flex">

        <Slider {...settings}>
       
       <div className="single-service">
              <img className="sec4_2" src="images/sec4_1.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Interior and Exterior Painting</h3>
                <p className="service-para">Beautify your home - both on the outside and inside - with a range of colours and styles.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_2.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Texture Painting</h3>
                <p className="service-para">Latest and trending texture designs to give your home the facelift of the future.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_3.png" alt="" />
              <h3 className="service-title">Stencil Painting</h3>
              <p className="service-para">Make your home and walls stand out with attractive patterns and vivid colours.</p>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_4.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Waterproofing</h3>
                <p className="service-para">Durable and moisture-resistant solutions to make your dream home waterproof.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_1.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Wooden Painting</h3>
                <p className="service-para">Coat your wooden furniture and interiors with special paints for wooden surfaces.</p>
              </div>
            </div>
            <div className="single-service">
              <img className="sec4_2" src="images/sec4_6.png" alt="" />
              <div className="service-text-box">
                <h3 className="service-title">Metal Painting</h3>
                <p className="service-para">Add a touch of class to all metalworks with specially formulated paints for metals.</p>
              </div>
            </div>
      </Slider>




        </div>
      </div>

    </div>







    // <div className="img-bg">
    //   <div className="white-section container">
    //     <div className="sec4_1">Our Service Offerings </div>
    //     <div className="row ">
    //       <div className="col-lg-6 col-md-6 ">
    //         <img className="sec4_2" src="images/sec4_1.png" alt="" />
    //         <div className="sec4_3">Interior & Exterior Painting </div>
    //         <div className="sec4_4">
    //           Beautify your home - both on the outside and inside - with a range
    //           of colours and styles.
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-6">
    //         <img className="sec4_2" src="images/sec4_2.png" alt="" />
    //         <div className="sec4_3">Texture Painting</div>
    //         <div className="sec4_4">
    //           Latest and trending texture designs to give your home the facelift
    //           of the future.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-lg-6 col-md-6">
    //         <img className="sec4_2" src="images/sec4_3.png" alt="" />
    //         <div className="sec4_3">Stencil Painting</div>
    //         <div className="sec4_4">
    //           Make your home and walls stand out with attractive patterns and
    //           vivid colours.
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-6 ">
    //         <img className="sec4_2" src="images/sec4_4.png" alt="" />
    //         <div className="sec4_3">Waterproofing </div>
    //         <div className="sec4_4">
    //           Durable and moisture-resistant solutions to make your dream home
    //           waterproof.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-lg-6 col-md-6">
    //         <img className="sec4_2" src="images/sec4_5.png" alt="" />
    //         <div className="sec4_3">Wooden Painting</div>
    //         <div className="sec4_4">
    //           Coat your wooden furniture and interiors with special paints for
    //           wooden surfaces.
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-6">
    //         <img className="sec4_2" src="images/sec4_6.png" alt="" />
    //         <div className="sec4_3">Metal Painting</div>
    //         <div className="sec4_4">
    //           Add a touch of class to all metalworks with specially formulated
    //           paints for metals.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="white-section2">
    //     <div className="container">
    //       <InfiniteCarousel
    //         breakpoints={[
    //           {
    //             breakpoint: 500,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1,
    //             },
    //           },
    //           {
    //             breakpoint: 768,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1,
    //             },
    //           },
    //         ]}
    //         dots={true}
    //         showSides={true}
    //         sideSize={0.0}
    //         slidesToScroll={1}
    //         slidesToShow={1}
    //         scrollOnDevice={true}
    //         arrows={false}
    //       >
    //         <div>
    //           <img className="sec4_2" src="images/sec4_1.png" alt="" />
    //           <div className="sec4_3">Interior & Exterior Painting </div>
    //           <div className="sec4_4">
    //             Beautify your home - both on the outside and inside - with a
    //             range of colours and styles.
    //           </div>
    //         </div>
    //         <div>
    //           <img className="sec4_2" src="images/sec4_2.png" alt="" />
    //           <div className="sec4_3">Texture Painting</div>
    //           <div className="sec4_4">
    //             Latest and trending texture designs to give your home the
    //             facelift of the future.
    //           </div>
    //         </div>
    //         <div>
    //           <img className="sec4_2" src="images/sec4_3.png" alt="" />
    //           <div className="sec4_3">Stencil Painting</div>
    //           <div className="sec4_4">
    //             Make your home and walls stand out with attractive patterns and
    //             vivid colours.
    //           </div>
    //         </div>
    //         <div>
    //           <img className="sec4_2" src="images/sec4_4.png" alt="" />
    //           <div className="sec4_3">Waterproofing </div>
    //           <div className="sec4_4">
    //             Durable and moisture-resistant solutions to make your dream home
    //             waterproof.
    //           </div>
    //         </div>
    //         <div>
    //           <img className="sec4_2" src="images/sec4_5.png" alt="" />
    //           <div className="sec4_3">Wooden Painting</div>
    //           <div className="sec4_4">
    //             Coat your wooden furniture and interiors with special paints for
    //             wooden surfaces.
    //           </div>
    //         </div>
    //         <div>
    //           <img className="sec4_2" src="images/sec4_6.png" alt="" />
    //           <div className="sec4_3">Metal Painting</div>
    //           <div className="sec4_4">
    //             Add a touch of class to all metalworks with specially formulated
    //             paints for metals.
    //           </div>
    //         </div>
    //       </InfiniteCarousel>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Section4;
