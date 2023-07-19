import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Avatar } from '@mui/material';

const CarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        {
            src: '/pool/4.jpg',
            alt: 'Image 1',
            // width: 100,
            // height: 174,
        },
        {
            src: '/pool/19.jpg',
            alt: 'Image 2',
            width: 450,
            // height: 174,
        },
        {
            src: '/pool/8.jpg',
            alt: 'Image 3',
            // width: 450,
            // height: 174,
        },
        // Add more image objects as needed
    ];

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <Link href="#">
                        <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={image.src} alt={image.alt} />
                    </Link>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselSlider;
