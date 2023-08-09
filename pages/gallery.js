// import Helmet from "views/component/UI/Helmet"
import LightGallery from 'views/component/UI/Gallery';

// const ImageGallery = () => {

//     return (<>
//         <Helmet title='Gallery - Blackpool' description='blackpool' />
//         <Gallery />
//     </>
//     );
// }
// export default ImageGallery;
import { Box, Typography } from '@mui/material';
import Head from 'next/head';

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
            <Box className="bg-black">
                <Box className="container">
                    <Box className="lightbox-gallery">
                        <LightGallery />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
