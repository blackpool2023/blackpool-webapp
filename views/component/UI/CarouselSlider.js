import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import Image from 'next/image';
// import ReactPlayer from 'react-player'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Avatar } from '@mui/material';

const CarouselSlider = () => {
    const videoRef = useRef(null);
    const videoReference = useRef(null);
    useEffect(() => {
        // Once the component mounts, start playing the video
        videoRef.current.play(); videoReference.current.play();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                <Link href="#">
                    <Avatar style={{ width: '100%', height: '850px', borderRadius: '0' }} src={'/pool/8.jpg'} alt='banner image' />
                </Link>
            </div>
            <div key={2}>
                {/* <Link href="#"> */}
                <video ref={videoRef} autoPlay muted loop>
                    <source src='/assets/images/banner/bannervdo1.mp4' />
                </video>
                {/* </Link> */}
            </div>
            <div key={3}>
                {/* <Link href="#"> */}
                <video ref={videoReference} autoPlay muted loop style={{
                    minHeight: '600px',
                    width: 'auto',
                    // height: 'auto'
                }}>
                    <source src='/assets/images/banner/bannervdo2.mp4' />
                </video>
                {/* </Link> */}
            </div>
        </Slider>
    );
};

export default CarouselSlider;
