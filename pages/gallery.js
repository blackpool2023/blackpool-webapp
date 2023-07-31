// import Helmet from "views/component/UI/Helmet"
// import Gallery from 'views/component/UI/Gallery';

// const ImageGallery = () => {

//     return (<>
//         <Helmet title='Gallery - Blackpool' description='blackpool' />
//         <Gallery />
//     </>
//     );
// }
// export default ImageGallery;
import { Box, Typography, Grid } from '@mui/material';
import Head from 'next/head';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
// import styles from '../styles/Home.module.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>Gallery</Typography>
                </Box>
            </Box>
            <Box className="bg-carbonblack">
                <Box className="container">
                    <Box className="lightbox-gallery">
                        <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                            <Grid container spacing={2}>
                                <Grid md={3} item>
                                    <a
                                        data-lg-size="1406-1390"
                                        className="gallery-item"
                                        data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
                                    // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                                    >
                                        <img
                                            className="img-responsive"
                                            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                                        />
                                    </a>
                                </Grid>
                                <Grid md={3} item>
                                    <a
                                        data-lg-size="1400-1400"
                                        data-pinterest-text="Shinimamiya, Osaka, Japan"
                                        data-tweet-text="Shinimamiya, Osaka, Japan"
                                        className="gallery-item"
                                        data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                                    // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
                                    >
                                        <img
                                            className="img-responsive"
                                            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                                        />
                                    </a>
                                </Grid>
                                <Grid md={3} item>
                                    <a
                                        data-lg-size="1400-1400"
                                        className="gallery-item"
                                        data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                                    // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
                                    >
                                        <img
                                            className="img-responsive"
                                            src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                                        />
                                    </a>
                                </Grid>
                                <Grid md={3} item>
                                    <a
                                        data-lg-size="1400-1400"
                                        className="gallery-item"
                                        data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                                    // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
                                    >
                                        <img
                                            className="img-responsive"
                                            src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                                        />
                                    </a>
                                </Grid>
                            </Grid>
                        </LightGallery>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
