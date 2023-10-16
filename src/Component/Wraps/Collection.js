import React, { Component, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useWindowSize } from "react-use";
import { useTrail, animated } from "react-spring";
import wdnImage1 from '../../images/wdnImage1.png'
import wdnImage2 from '../../images/wdnImage2.png'
import wdnImage3 from '../../images/wdnImage3.png'
import wdnImage4 from '../../images/wdnImage4.png'
import wdnImage5 from '../../images/wdnImage5.png'
import impImage1 from '../../images/impImage1.png'
import impImage2 from '../../images/impImage2.png'
import impImage3 from '../../images/impImage3.png'
import impImage4 from '../../images/impImage4.png'
import impImage5 from '../../images/impImage5.png'
import sldImage1 from '../../images/sldImage1.png'
import sldImage2 from '../../images/sldImage2.png'
import sldImage3 from '../../images/sldImage3.png'
import sldImage4 from '../../images/sldImage4.png'
import sldImage5 from '../../images/sldImage5.png'
import download from "../../images/download1.png";
import Slider from "react-slick";
import './Wraps.scss';

const settings = {
    dots: false,
    infinite: false,
    nav: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1600
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1600
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1600
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1600
            }
        }
    ]
}

const myStyle = {
    width: '5000px',
    height: '100%',
    // '@media (max-width: 1600px)': {
    //     width: '4500px',
    // },
    // '@media (max-width: 1500px)': {
    //     width: '4000px',
    // },
};

const items = ["Will Adobe XD", "kill Sketch", "and InVision"];
const config = { mass: 2, tension: 2000, friction: 200 };

function Collection() {
    const size = useWindowSize();
    const sideRef = React.useRef(null);
    const controllerRef = React.useRef(null);

    const [scrollWidth, setScrollWidth] = React.useState(0);
    const [toggle, set] = React.useState(true);
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 40 : 0,
        from: { opacity: 0, x: 20, height: 0 }
    });

    React.useLayoutEffect(() => {
        if (sideRef.current) {
            let boxWidth = 0;

            [...sideRef.current.children].forEach(c => {
                const childBox = c.getBoundingClientRect();
                boxWidth = boxWidth + childBox.width;
            });

            const w =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;

            const totalScrollWidth = boxWidth > w ? boxWidth - w : 0;

            setScrollWidth(totalScrollWidth);
        }
    }, [size.height, size.width]);

    return (
        <ParallaxProvider>
            <div className="main-collection">
                <div className="content-block">
                    <Parallax tagOuter="div" y={[0, 70]} className="intro-text title">
                        <h3>Check out <span>our collection</span></h3>
                    </Parallax>
                </div>

                <Controller ref={controllerRef}>
                    <Scene
                        duration={scrollWidth}
                        pin
                        triggerHook={0.25}
                        enabled={size.width > 768}
                    >
                        {progress => {
                            return (
                                <div>
                                    <div
                                        className="cnt"
                                        style={{
                                            transform: `translate3d(-${scrollWidth *
                                                progress}px, 0, 0)`
                                        }}
                                    >
                                        <div
                                            className="content"
                                            ref={sideRef}
                                            style={{ width: scrollWidth }}
                                        >
                                            <div className="downloadImgBox" style={myStyle}>
                                                <img src={download} alt="t" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </Scene>
                </Controller>
                <Slider {...settings}>
                    {console.log("settings ==================", settings)}
                    <div>
                        <div className='collection1 mb-sm-3 mb-3 position-relative'>
                            <div>
                                <img src={wdnImage1} alt="" className='image-shadow' />
                            </div>
                            <div className="d-flex my-sm-3 my-3 justify-content-around">
                                <div>
                                    <img src={wdnImage2} alt="" className='image-shadow' />
                                </div>
                                <div>
                                    <img src={wdnImage3} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="d-flex my-sm-3 my-3">
                                <div className='justify-content-end d-flex w-100'>
                                    <img src={wdnImage4} alt="" className='image-shadow' />
                                </div>
                                <div className='justify-content-end d-flex w-100'>
                                    <img src={wdnImage5} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="text-center text-position">
                                <h2>WOODEN</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='collection1 mb-sm-3 mb-3 position-relative'>
                            <div className="d-flex justify-content-end">
                                <img src={impImage1} alt="" className='image-shadow' />
                            </div>
                            <div className="d-flex my-sm-3 my-3 justify-content-around">
                                <div>
                                    <img src={impImage2} alt="" className='image-shadow' />
                                </div>
                                <div>
                                    <img src={impImage3} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="d-flex my-sm-3 my-3">
                                <div className='justify-content-start d-flex w-100'>
                                    <img src={impImage4} alt="" className='image-shadow' />
                                </div>
                                <div className='justify-content-start d-flex w-100'>
                                    <img src={impImage5} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="text-center text-position">
                                <h2>IMPRESSIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='collection1 mb-sm-3 mb-3 position-relative'>
                            <div>
                                <img src={sldImage1} alt="" className='image-shadow' />
                            </div>
                            <div className="d-flex my-sm-3 my-3 justify-content-around">
                                <div>
                                    <img src={sldImage2} alt="" className='image-shadow' />
                                </div>
                                <div>
                                    <img src={sldImage3} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="d-flex my-sm-3 my-3">
                                <div className='justify-content-end d-flex w-100'>
                                    <img src={sldImage4} alt="" className='image-shadow' />
                                </div>
                                <div className='justify-content-end d-flex w-100'>
                                    <img src={sldImage5} alt="" className='image-shadow' />
                                </div>
                            </div>
                            <div className="text-center text-position">
                                <h2>SOLIDS</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </ParallaxProvider>
    );
}

export default Collection