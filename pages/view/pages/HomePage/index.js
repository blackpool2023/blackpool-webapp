import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Link } from '@mui/material';
// import { Link } from '@mui/material';
import { images } from 'views/helpers/constants/ImageConstant';
// import Gallery from 'views/component/UI/Gallery';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CarouselSlider from 'views/component/UI/CarouselSlider';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MiscellaneousServicesSharpIcon from '@mui/icons-material/MiscellaneousServicesSharp';
import FontAwesomeIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}
const HomePage = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <CarouselSlider />
            <Box className="homepage-main">
                <Box className="slide-heading">
                    <Typography variant='h1'><span className='fw-800'>WHERE</span> <span>WATER MEETS EMOTIONS</span></Typography>
                </Box>
                <Box className="social-link">
                    <Link href="#" className="hexagon">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </Link>
                    <Link href="#" className="hexagon">
                        <InstagramIcon />
                    </Link>
                    <Link href="#" className="hexagon">
                        <PermContactCalendarIcon />
                    </Link>
                </Box>
                <button
                    className={`scrollButton ${showButton ? 'show' : ''}`}
                    onClick={handleScrollToTop}
                >
                    <KeyboardArrowUpIcon />
                </button>
                {/* banner */}
                {/* <Box style={{ backgroundColor: '#00000091' }}> */}

                {/* </Box> */}
                <Box className="bg-black">
                    <Box className="container">
                        {/* about */}
                        {/* <Box className="about-main"> */}

                        {/* <Grid container spacing={3}>
                                <Grid md={6} item>
                                    <Avatar style={{ width: '100%', height: 'auto', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </Grid>
                                <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                                </Grid>
                            </Grid> */}
                        <Box className="about-main pool-facility">
                            <Typography variant='h2' className='site-heading'>About Us</Typography>
                            <Grid container spacing={3} style={{ paddingTop: '50px' }}>
                                <Grid md={1} item></Grid>
                                <Grid md={5} item>
                                    <Avatar className='circle-image' src={images.gallery2} alt='gallery image' />
                                </Grid>
                                <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                                </Grid>
                                <Grid md={1} item></Grid>
                            </Grid>
                        </Box>
                        {/* </Box> */}
                        {/* image */}
                        {/* <Gallery /> */}
                    </Box>
                </Box>
                <Box className="services-main bg-black">
                    <Box className="container">
                        <Typography variant='h2' className='site-heading'>Services</Typography>
                        <Grid container spacing={3}>
                            <Grid md={4} item>
                                <Box className="service-item">
                                    <MiscellaneousServicesSharpIcon />
                                    <Typography variant='h3'>Heading</Typography>
                                    <Typography variant='p' className='site-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Typography>
                                </Box>
                            </Grid>
                            <Grid md={4} item>
                                <Box className="service-item">
                                    <MiscellaneousServicesSharpIcon />
                                    <Typography variant='h3'>Heading</Typography>
                                    <Typography variant='p' className='site-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Typography>
                                </Box>
                            </Grid>
                            <Grid md={4} item>
                                <Box className="service-item">
                                    <MiscellaneousServicesSharpIcon />
                                    <Typography variant='h3'>Heading</Typography>
                                    <Typography variant='p' className='site-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* gallery */}
                <Box className="bg-black">
                    <Box className="container">
                        <Typography variant='h2' className='site-heading'>Gallery</Typography>
                        <Box className="lightbox-main">
                            <div ref={sliderRef} className="keen-slider">
                                <div className="keen-slider__slide number-slide1">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide2">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide3">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery3} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide4">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery4} alt='gallery image' />
                                </div>
                            </div>

                            <div ref={thumbnailRef} className="keen-slider thumbnail">
                                <div className="keen-slider__slide number-slide1">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide2">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide3">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery3} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide4">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery4} alt='gallery image' />
                                </div>
                            </div>
                            {/* <Grid container spacing={3}>
                                <Grid md={6} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery1} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={5} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery2} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={1} item> </Grid>
                                <Grid md={1} item> </Grid>
                                <Grid md={8} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery1} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={3} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery2} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Grid> */}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HomePage;