
import { Avatar, List, ListItemIcon, ListItem, ListItemText, Box, Grid, Typography } from '@mui/material';
import Helmet from "views/component/UI/Helmet";
import StarIcon from '@mui/icons-material/Star';
import { images } from 'views/helpers/constants/ImageConstant';

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
                    {/* about */}
                    <Box style={{ padding: '120px 0' }}>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                    </Box>
                    <Box className="about-main pool-facility">
                        {/* <Typography variant='h2' className='site-heading'>Pool Facilities</Typography> */}
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
                </Box>
                <Box className="about-banner"></Box>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    <Box className="about-main pool-facility">
                        <Grid container spacing={3} style={{ paddingTop: '50px' }}>
                            <Grid md={1} item></Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center', color: '#727272' }}>
                                <List
                                    className='skill-items'
                                    sx={{ width: '100%' }}
                                    aria-label="contacts"
                                >
                                    <ListItem disablePadding>
                                        <ListItemIcon style={{ minWidth: '35px' }} >
                                            <StarIcon className='icon-white' />
                                        </ListItemIcon>
                                        <ListItemText className='list-item' primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon style={{ minWidth: '35px' }} >
                                            <StarIcon className='icon-white' />
                                        </ListItemIcon>
                                        <ListItemText className='list-item' primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon style={{ minWidth: '35px' }} >
                                            <StarIcon className='icon-white' />
                                        </ListItemIcon>
                                        <ListItemText className='list-item' primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon style={{ minWidth: '35px' }} >
                                            <StarIcon className='icon-white' />
                                        </ListItemIcon>
                                        <ListItemText className='list-item' primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon style={{ minWidth: '35px' }} >
                                            <StarIcon className='icon-white' />
                                        </ListItemIcon>
                                        <ListItemText className='list-item' primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.gallery2} alt='gallery image' />
                            </Grid>
                            <Grid md={1} item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default AboutUs;
