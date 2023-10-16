import React, { Component } from "react";
import Slider from "react-slick";

export default class Section7 extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",  
      slidesToShow:1,
      dots: true,
      slidesToScroll: 1,
      variableWidth: true, 
      speed: 700,

      responsive: [
        {
          breakpoint: 1099,
          settings: {
            variableWidth: false, 
            slidesToShow:3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            variableWidth: false, 
            slidesToShow:3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            variableWidth: false, 
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

    };
    return (
      <div  className="sec7">
       
      <div className="sec6_head">Our Work</div>
      <div className="service-sec6">
        <Slider {...settings}>
          <div>
           <img className="img-fluid" src="images/slider/00.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/01.jpeg" alt="2" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/02.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/03.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/04.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/05.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/06.jpeg" alt="1" />
          </div>

          <div>
            <img className="img-fluid" src="images/slider/07.jpeg" alt="1" />
          </div>
         
        </Slider>
        </div>
      </div>
    );
  }
}



// import { React, useState } from "react";
// import ReactDOM from "react-dom";
// import Left from '../images/left.png';
// import Right from '../images/right.png';
// import { CarouselWrapper, prev, next } from 'react-pretty-carousel';
// const Section7 = () => {
 
//   return (
//     <div className="sec7">
//       <div className="sec6_head">Our Work</div>
//       <CarouselWrapper items={3} mode="gallery" showControls={false}>
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//         <img className="img-fluid" src="images/work_1.jpg" alt="1" />,
//       </CarouselWrapper>
//       <div className="carousal-btn">
//         <div className="arrow" onClick={() => {prev()}}>
//           <img src={Left} alt="left" />
//         </div>
//         <div className="arrow" onClick={() => {next()}}>
//           <img src={Right} alt="right" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section7;
