
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Helmet from "views/component/UI/Helmet"

const AboutUs = () => {

    return (
        <>
            <Helmet title='About Us - Blackpool' description='blackpool' />
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>About Us</Typography>
                </Box>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    <Typography variant='p' style={{ padding: '80px 0 30px' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 sthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 150, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                    <Box className='our-people'>
                        <Typography variant='h2' className='site-heading'>Our People</Typography>
                        <Grid container spacing={2} className="our-people-image">
                            <Grid md={2} item></Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5' >People Name</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5' >People Name</Typography>
                            </Grid>
                            <Grid md={2} item></Grid>
                        </Grid>
                        <Grid container spacing={2} className="our-people-image">
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5' >People Name</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5' >People Name</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5' >People Name</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="our-people-image">
                            <Grid md={2} item></Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5'>People Name</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Avatar src={'/pool/9.jpg'} alt='staff image' />
                                <Typography className='people-name' variant='h5'>People Name</Typography>
                            </Grid>
                            <Grid md={2} item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box >
        </>
    );
};
export default AboutUs;
