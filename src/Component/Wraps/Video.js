import React, { useState } from 'react';
import videoImage from '../../images/videoImage.png';
import play from '../../images/PLAY.png'

const Video = () => {
    const [isOpenTestimonialModal, setOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/E3oPwC0hMWo')

    const openPopUp = (url) => {
        console.log("clicked", url)
        setOpen(true)
        setVideoUrl(url);
    }

    const closeTestimonialModal = () => {
        setOpen(false)
    }

    return (
        <div className='videoWrapper'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='videoImage' onClick={() => openPopUp(videoUrl)} >
                        <img className='Imagevd' src={videoImage} alt='videoImage' />
                        <img className='Imgplay' src={play} alt='play' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='videoData'>
                        <h1>
                            The magic of <br /><span>HomeLane Pronto Wraps</span>
                        </h1>
                        <p>As our tastes evolve, our interiors should too. HomeLane Pronto Wraps is the perfect solution to upgrade the look of your home or jazz it up for an occasion - or just a smooth cover-up for wear and tear. <span>With prices starting from just INR5,000,</span> there's a plethora of options to play with. So, go ahead, now your home is your canvas.</p>
                    </div>
                </div>
            </div>
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
    )
}

export default Video