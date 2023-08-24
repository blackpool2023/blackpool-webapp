import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import Image from 'next/image';
// import ReactPlayer from 'react-player'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';

const CarouselSlider = () => {
    const videoRef = useRef(null);
    const videosRef = useRef(null);
    // const videoReference = useRef(null);
    useEffect(() => {
        // Once the component mounts, start playing the video
        videoRef.current.play(); videosRef.current.play();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
    };

    // const images = [
    //     {
    //         src: '/pool/4.jpg',
    //         alt: 'Image 1',
    //         // width: 100,
    //         // height: 174,
    //     },
    //     {
    //         src: '/pool/19.jpg',
    //         alt: 'Image 2',
    //         width: 450,
    //         // height: 174,
    //     },
    //     {
    //         src: '/pool/8.jpg',
    //         alt: 'Image 3',
    //         // width: 450,
    //         // height: 174,
    //     },
    //     // Add more image objects as needed
    // ];

    return (
        <Slider {...settings}>
            <div key={1}>
                {/* <Link href="#"> */}
                <Box className="slide-heading">
                    <Typography variant='h1'><span className='fw-800'>MEET YOURSELF</span></Typography>
                    {/* <Typography variant='h1'><span className='fw-800'>WHERE</span> <span>WATER MEETS EMOTIONS</span></Typography> */}
                </Box>
                <video ref={videoRef} autoPlay muted loop style={{
                    minHeight: '600px',
                    width: '100vw',
                }} >
                    <source src='/assets/images/banner/slidervdo2.mp4' />
                </video>
                {/* <video
                    className="slider-video"
                    src='/assets/images/banner/slidervdo2.mp4'
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{
                        minHeight: '600px',
                        width: '100vw',
                    }}
                ></video> */}
                {/* </Link> */}
            </div>
            <div key={2} >
                <Box className="slide-heading">
                    <Typography variant='h1'><span className='fw-800'>WATER MEETS EMOTIONS</span></Typography>
                    {/* <Typography variant='h1'><span className='fw-800'>WOMAN IN THE POOL</span> <span> LISTEN TO YOUR BODY</span></Typography> */}
                </Box>
                {/* <video
                    className="slider-video"
                    src='/assets/images/banner/slidervdo3.mp4'
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{
                        minHeight: '600px',
                        width: '100vw',
                    }}
                ></video> */}
                <video ref={videosRef} autoPlay muted loop style={{
                    minHeight: '600px',
                    width: '100vw',
                }} >
                    <source src='/assets/images/banner/slidervdo3.mp4' />
                </video>
            </div>
            {/* <div key={2}> */}
            {/* <Link href="#"> */}
            {/* <Box className="slide-heading">
                    <Typography variant='h1'><span className='fw-800'>WATER IS LIFE</span></Typography> */}
            {/* <Typography variant='h1'><span className='fw-800'>WATER</span> <span>WATER IS LIFE</span></Typography> */}
            {/* </Box> */}
            {/* <video
                    className="slider-video"
                    src='/assets/images/banner/slidervdo1.mp4'
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{
                        minHeight: '600px',
                        width: '100vw',
                    }}
                ></video> */}
            {/* </Link> */}
            {/* </div> */}

        </Slider>
    );
};

export default CarouselSlider;
