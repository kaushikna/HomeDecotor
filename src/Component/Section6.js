import { React, useState, useEffect } from "react";
// import Left from '../images/left.png';
// import Right from '../images/right.png';
import Slider from "react-slick";
const Section6 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isOpenTestimonialModal, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('')
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]

  };

  useEffect(async () => {
    const fetchTestimonial = async () => {
      let res = await fetch(`https://apis.homelane.com/api/v1/getTestimonials`, {
        method: 'GET'
      }).then(res => res.json());
      setTestimonials(res.response)
    }
    await fetchTestimonial()
  }, [])

  const openPopUp = (url) => {
    console.log("clicked", url)
    setOpen(true)
    setVideoUrl(url);
  }

  const closeTestimonialModal = () => {
    setOpen(false)
    setVideoUrl('')
  }

  return (
    <div className="sec6_main our-customer" id={'testimonial'}>
      <style>
        {`
          @media (min-width: 1200px) and (max-width: 1436px) {#testimonial .slick-prev{ left: 35% !important;} #testimonial .slick-next{ right : 35% !important}}
          @media (min-width: 992px)  and (max-width: 1200px) {#testimonial .slick-prev{ left: 37% !important;} #testimonial .slick-next {right: 37% !important}}
          @media (min-width: 1436px) {#testimonial .slick-prev{ left: 37% !important;} #testimonial .slick-next{ right : 37% !important}}

        `}
      </style>
      <div className="sec6_1">What our customers say</div>
      <Slider {...settings}>
        {testimonials.length > 0 && testimonials.map((data, index) => {
          return (
            <div key={`testimonial-${index}`}>
              <div className="iconContainer" onClick={() => openPopUp(data.video_url)} style={{ position: 'relative', paddingBottom: '56%' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                  <img className="sec6_2" src={data.video_banner_image} alt="" />
                </div>
                <svg viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>
              </div>
              <div className="sec-6-user">{data.customer_name} </div>
              <div className="sec-6-location">{data.property_config}</div>
              <div className="sec-6-para"><q>{data.testimonial}</q></div>
            </div>
          )
        })}
      </Slider>
      <div className={"testimonialPopup"} style={{ display: (isOpenTestimonialModal ? 'unset' : 'none') }} onClick={closeTestimonialModal}>
        <span className={"closeTestimonialPopup"} onClick={closeTestimonialModal}>x</span>
        <div className={"testimonialContent"}>
          {
            videoUrl ?
              (
                <iframe id="youtube_video_url" width="100%" height="100%" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              ) : ''
          }
        </div>
      </div>
    </div>
  );
};

export default Section6;
