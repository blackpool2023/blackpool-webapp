import { Box, Typography, Grid, Avatar, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from 'views/helpers/constants/ImageConstant';
import Helmet from "views/component/UI/Helmet"

const IndoorPool = () => {

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
        <Helmet title='Pool - Blackpool' description='Bau und Planung von deinem Indoor-Pool in Niedersachsen ✓ Mithilfe qualifizierter Fachbetriebe ✓ Ideal für den Wintergarten' />
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
                    {/* <Box style={{ padding: '120px 0' }}>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                    </Box> */}
                    <Box className="about-main pool-facility">
                        <Typography variant='h1' className='site-heading'>Indoor-Pool für deinen Wintergarten</Typography>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>
                            Du kennst es aus dem Hotel – ein Indoor-Pool bedeutet <b>Wellness, Entspannung und Zufriedenheit</b> und das auch <b>unabhängig vom Wetter</b>. Hole dir zusammen mit <b>BlackPool</b> das einmalige Urlaubsfeeling nach Hause, um beispielsweise vor der Arbeit entspannt deine Bahnen zu schwimmen und Kraft für den Alltag zu gewinnen. Im Gegensatz zum Hotelpool nutzt du deine „Home SPA“ zu jeder Tageszeit und ohne die neugierigen Blicke anderer Badegäste.
                        </Typography>
                        <Typography variant='h2' className='site-sub-heading pt-20'>Indoor-Pool – ein Hallenbad im Haus</Typography>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text pt-20'>
                            Ein eigenes Schwimmbad bzw. einen Indoor-Pool im eigenen Haus ist ein <b>absolutes Highlight,</b> das nicht jeder sein Eigen nennen kann. Beliebt ist es, den Pool im Wintergarten zu platzieren, was <b>sehr praktisch</b> ist. Wind, Regen und Kälte bleiben draußen, während Sonnenstrahlen dir selbst im Winter schöne Momente bescheren.
                        </Typography>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text pt-20'>
                            Nebenbei steigerst du den Wert deines Hauses und erfreust dich über den schönen Anblick des Pools. Wochenend- oder Ferienhäuser wertest du mit einem Pool ebenfalls auf. Wir prüfen, inwieweit ein Einbau möglich ist und bauen dir deinen <b>Traum-Indoor-Pool!</b> Dabei sind verschiedene Formen, Größen und Extras wie ein gemauerter Lounge-Bereich möglich.
                        </Typography>
                        <Typography style={{ width: '70%', margin: '0 auto', textAlign: 'left' }} variant='p' className='site-text pt-20'>
                            BlackPool baut für dich und deine Familie einen individuellen Indoor-Pool. Dabei begegnest du diese
                        </Typography>
                        <Typography style={{ width: '70%', margin: '0 auto', textAlign: 'left' }} variant='p' className='site-text pt-20'>
                            <b>VORTEILE:</b>
                        </Typography>
                        <List
                            className='skill-items'
                            sx={{ width: '100%' }}
                            aria-label="contacts"
                            style={{ width: '70%', margin: '0 auto' }}
                        >
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Familiär:</b> Starte mit einer umfassenden und ehrlichen Beratung, die alle deine Fragen beantwortet. Und finde heraus, wie viel Pool in deinen Wintergarten passt. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Fachkundig:</b> Nach der Beratung folgt die Planung, Umsetzung und Wartung in Zusammenarbeit mit qualifizierten Fachbetrieben sowie Architekten. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Traumhaft:</b> Erhalte einen Indoor-Pool – ein massives Betonbecken mit folierter Oberfläche, mit dem du dir ein eigenes und haltbares Urlaubsparadies schaffst. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Individuell:</b> Verschiedene Maße, Formen und mehrere Folienfarben sind möglich. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Modern:</b> Dank kluger Technik, profitierst du von energiesparenden Lösungen, die bequem per Smartphone steuerbar sind. </ListItemText>
                            </ListItem>
                        </List>
                        <Typography variant='h3' className='site-sub-heading pt-20'>Ein paar Bilder zur Inspiration</Typography>
                        <Grid container spacing={3} style={{ paddingTop: '50px' }}>
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.gallery2} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.gallery1} alt='gallery image' />
                            </Grid>
                            {/* <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </Typography>
                            </Grid> */}
                            <Grid md={1} item></Grid>
                        </Grid>
                        <Typography variant='h2' className='site-sub-heading pt-40'>Gefällt dir, was du siehst? Jetzt informieren und ein Angebot erhalten! </Typography>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text pt-20'>
                            Träumst du schon davon, wie schön ein eigener Pool ist? Der erfolgreiche Poolbau beginnt mit einer <b>Beratung</b>. Erzähle uns von deinem Wunsch-Indoor-Pool.
                        </Typography>
                        {/* <Grid container spacing={3} style={{ flexDirection: 'row-reverse' }} >
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.gallery1} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'right' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                            </Grid>
                            <Grid md={1} item></Grid> */}
                        {/* </Grid> */}
                    </Box>
                    {/* <Box className="container">
                    {/* about */}
                    {/* <Box style={{ padding: '120px 0 60px' }}>
                        <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                    </Box>
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
                    </Box> */}
                    {/* image */}
                    {/* <Gallery /> */}
                </Box>
            </Box>
        </Box >
    </>
    );
};

export default IndoorPool;
