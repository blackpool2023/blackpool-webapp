// import { Gallery } from "react-grid-gallery";

// const GalleryGrid = () => {
//     const images = [
//         {
//             src: "/pool/1.jpg",
//             width: 450,
//             height: 174,
//             tags: [
//                 { value: "Nature", title: "Nature" },
//                 { value: "Flora", title: "Flora" },
//             ],
//             caption: "After Rain (Jeshu John - designerspics.com)",
//         },
//         {
//             src: "/pool/2.jpg",
//             width: 520,
//             height: 212,
//             caption: "Boats (Jeshu John - designerspics.com)",
//         },
//         {
//             src: "/pool/3.jpg",
//             width: 220,
//             height: 212,
//             caption: "Color Pencils (Jeshu John - designerspics.com)",
//         },
//         {
//             src: "/pool/4.jpg",
//             width: 620,
//             height: 213,
//             caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
//         },
//         {
//             src: "/pool/5.jpg",
//             width: 320,
//             height: 183,
//             caption: "37H (gratispgraphy.com)",
//         },
//         {
//             src: "/pool/6.jpg",
//             width: 540,
//             height: 420,
//             tags: [{ value: "Nature", title: "Nature" }],
//             caption: "8H (gratisography.com)",
//         },
//         {
//             src: "/pool/7.jpg",
//             width: 220,
//             height: 190,
//             caption: "286H (gratisography.com)",
//         },
//         {
//             src: "/pool/8.jpg",
//             width: 520,
//             height: 248,
//             tags: [{ value: "People", title: "People" }],
//             caption: "315H (gratisography.com)",
//         },
//         {
//             src: "/pool/9.jpg",
//             width: 520,
//             height: 513,
//             caption: "201H (gratisography.com)",
//         },
//         {
//             src: "/pool/10.jpg",
//             alt: "Big Ben - London",
//             width: 448,
//             height: 520,
//             caption: "Big Ben (Tom Eversley - isorepublic.com)",
//         }
//     ];
//     return (
//         <Gallery images={images} />
//     );
// }
// export default GalleryGrid;
import Head from 'next/head';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
// import { Box } from '@mui/material';
import Helmet from "views/component/UI/Helmet";

// import styles from '../styles/Home.module.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

export default function Gallery() {
    return (
        <div>
            <Helmet title='Gallery - Blackpool' />

            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                {/* <Grid container spacing={2}> */}
                {/* <Grid md={3} item> */}
                {/* <Box className="d-flex"> */}
                <a
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src="/pool/indoor-inspiration1.jpg"
                // data-sub-html="<h4>Photo by Fushimi Ward, Kyoto, Japan</h4>"
                >
                    <img
                        className="img-responsive"
                        src="/pool/indoor-inspiration1.jpg"
                    />
                </a>
                {/* </Grid> */}
                {/* <Grid md={3} item> */}
                <a
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src="/pool/outdoor-inspiration1.png"
                // data-sub-html="<h4>Photo by Fushimi Ward, Kyoto, Japan</h4>"
                >
                    <img
                        className="img-responsive"
                        src="/pool/outdoor-inspiration1.png"
                    />
                </a>
                {/* </Grid> */}
                {/* <Grid md={3} item> */}
                <a
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src="/pool/outdoor-inspiration2.jpg"
                // data-sub-html="<h4>Photo by Fushimi Ward, Kyoto, Japan</h4>"
                >
                    <img
                        className="img-responsive"
                        src="/pool/outdoor-inspiration2.jpg"
                    />
                </a>
                {/* </Box> */}

                {/* </Grid> */}
                {/* </Grid> */}
            </LightGallery>
        </div>
    );
}
