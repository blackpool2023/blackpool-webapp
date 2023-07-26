import { Box, Typography, Grid, Avatar } from '@mui/material';
import { images } from 'views/helpers/constants/ImageConstant';

const Pools = () => {
    return (
        <Box className='pools-main'>
            <Box className="pool-banner">
                <Typography variant='h2'>Pools</Typography>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    {/* about */}
                    <Box className="about-main pool-facility">
                        <Typography variant='h2' className='site-heading'>Pool Facilities</Typography>

                        <Grid container spacing={3}>
                            <Grid md={6} item>
                                <Avatar style={{ width: '100%', height: '350px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                            </Grid>
                            <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} style={{ flexDirection: 'row-reverse' }} >
                            <Grid md={6} item>
                                <Avatar style={{ width: '100%', height: '350px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                            </Grid>
                            <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid md={6} item>
                                <Avatar style={{ width: '100%', height: '350px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                            </Grid>
                            <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} style={{ flexDirection: 'row-reverse' }} >
                            <Grid md={6} item>
                                <Avatar style={{ width: '100%', height: '350px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                            </Grid>
                            <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* image */}
                    {/* <Gallery /> */}
                </Box>
            </Box>
        </Box>
    );
};

export default Pools;
