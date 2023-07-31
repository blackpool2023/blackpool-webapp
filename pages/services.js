
import { Box, Typography, Grid, Avatar, Link } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from 'views/helpers/constants/ImageConstant';
import Helmet from "views/component/UI/Helmet"

const Services = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };
    return (<>
        <Helmet title='Services - Blackpool' description='blackpool' />
        <Box className='pools-main'>
            <Box className="pool-banner">
                <Slider {...settings}>
                    <div key={1}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/9.jpg'} alt='banner image' />
                        </Link>
                    </div>
                    <div key={2}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/10.jpg'} alt='banner image' />
                        </Link>
                    </div>
                    <div key={3}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/23.jpg'} alt='banner image' />
                        </Link>
                    </div>
                    <div key={4}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/24.jpg'} alt='banner image' />
                        </Link>
                    </div>
                </Slider>

                {/* <Typography variant='h2'>Pools</Typography> */}
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    {/* about */}
                    <Box style={{ padding: '120px 0' }}>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                    </Box>
                    <Box className="about-main pool-facility">
                        <Grid container spacing={3}>
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.careMaintanance} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                            <Grid md={1} item></Grid>
                        </Grid>
                        <Grid container spacing={3} style={{ flexDirection: 'row-reverse' }} >
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.leakDetection} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'right' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                            <Grid md={1} item></Grid>
                        </Grid>
                    </Box>
                    {/* image */}
                    {/* <Gallery /> */}
                </Box>
            </Box>
        </Box>
    </>
    );
};

export default Services;
