import { Box, Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';
// import Image from 'next/image';
// import { images } from 'pages/helpers/constants/ImageConstant';
import Gallery from 'pages/component/UI/Gallery';
import CarouselSlider from 'pages/component/UI/CarouselSlider';
import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HomePage = () => {
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
            <Box className="homepage-main">
                <button
                    className={`scrollButton ${showButton ? 'show' : ''}`}
                    onClick={handleScrollToTop}
                >
                    <KeyboardArrowUpIcon />
                </button>
                {/* banner */}
                <CarouselSlider />
                <Box className="container">
                    {/* about */}
                    <Box className="about-main">
                        <Typography variant='h2' className='site-heading color-black'>Heading</Typography>
                        <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Box>
                    {/* image */}
                    <Gallery />
                </Box>
                {/* gallery */}
                <Box className="bg-black">
                    <Box className="container">
                        <Typography variant='h2' className='site-heading'>Gallery</Typography>
                        <Box className="lightbox-main">
                            <Grid container spacing={3}>
                                <Grid md={6} item>
                                    <Link href="#" className='position-relative'>
                                        {/* <Image src={images.gallery1} alt="logo" /> */}
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
                                        {/* <Image src={images.gallery2} alt="logo" /> */}
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
                                        {/* <Image src={images.gallery1} alt="logo" /> */}
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
                                        {/* <Image src={images.gallery2} alt="logo" /> */}
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HomePage;