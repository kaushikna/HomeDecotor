import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import counter from '../../images/counter.png';
import kitchen from '../../images/kitchen.png';
import room from '../../images/room.png';
import AccordianWrap from './AccordianWrap';

const pageTitleData = ['Counter Tops', 'Kitchen Cabinets', 'Room Doors', 'TV Units', 'Wardrobes', 'Storage / Cabinetry', 'Tables', 'Shelving Units']
const pageNumber = ['01', '02', '03', '04', '05', '06', '07', '08']

const Wraps = () => {
    useEffect(() => {
        const first = document.getElementById("moveImg");

        const onScroll = (event) => {

            var element = document.querySelector('li.slick-active')
            var position = element.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                document.querySelector('.slick-vertical .slick-list').classList.remove("mystyle");
            }
            else {
                console.log('test')
                document.querySelector('.slick-vertical .slick-list').classList.add("mystyle");
            }
        };
        window.addEventListener("scroll", onScroll);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: "linear",
        appendDots: dots => (
            <div>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='pageWriter'>
                <p>{pageNumber[i]}</p>
                {pageTitleData[i]}
            </div>
        )
    };
    return (
        <div className='MainWrap' id="moveImg">
            <div>
                <div className='Slidedata'>
                    <h2>Wraps is for...</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={counter} alt='counter' />
                    </div>
                    <div>
                        <img src={kitchen} alt='kitchen' />
                    </div>
                    <div>
                        <img src={room} alt='room' />
                    </div>
                    <div>``
                        <img src={counter} alt='counter' />
                    </div>
                    <div>
                        <img src={kitchen} alt='kitchen' />
                    </div>
                    <div>
                        <img src={room} alt='room' />
                    </div>
                    <div>
                        <img src={counter} alt='counter' />
                    </div>
                    <div>
                        <img src={kitchen} alt='kitchen' />
                    </div>
                </Slider>
                <AccordianWrap />
            </div>
        </div>
    )
}

export default Wraps