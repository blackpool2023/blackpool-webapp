import { Box, Typography, Grid, Avatar, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from 'views/helpers/constants/ImageConstant';
import Helmet from "views/component/UI/Helmet"

const OutdoorPools = () => {

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
                        {/* <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/9.jpg'} alt='banner image' />
                        </Link> */}
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={images.gallery1} alt='banner image' />
                        </Link>
                    </div>
                    {/* <div key={2}>
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
                    </div> */}
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
                        <Typography variant='h1' className='site-heading'>Outdoor-Pool – ein Freibad im Garten</Typography>
                        <Typography style={{ margin: '0 auto' }} variant='p' className='site-text w-70'>
                            Es ist 30 Grad, die Sonne strahlt und du denkst „Eine Abkühlung wäre jetzt genau das Richtige!“. Du öffnest deine Terrassentür und vor dir siehst du einen <b>schicken Outdoor-Pool,</b> der sich optimal als Blickfang in deinen Garten einfügt. Mit einem Finger-Touch auf deinem Smartphone fährt die Abdeckung beiseite. Sonnenstrahlen treffen auf das kristallklare Wasser und du springst mit einem Grinsen ins kühle Nass.
                        </Typography>
                        <Typography style={{ margin: '0 auto' }} variant='p' className='site-text w-70'>
                            <b>
                                Kein Bademeister ruft „Nicht vom Beckenrand springen!“, denn mit BlackPool ist die oben beschriebene Situation keine Fata Morgana oder eine Tagträumerei. Statt ins überlaufende Freibad zu fahren, erhältst du mit uns eine bessere Option: deinen eigenen Outdoor-Pool, direkt in deinen Garten in Niedersachsen.
                            </b>
                        </Typography>
                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Ein Stück mehr Freiheit: Dein zukünftiger Outdoor-Pool
                        </Typography>
                        <Typography style={{ margin: '0 auto' }} variant='p' className='site-text pt-20 w-70'>
                            Wir planen deinen Pool und koordinieren auch den Bau des Pools durch fachkundige Handwerker. Wir installieren ebenso die Technik, sodass du <b>einen vollständigen und pflegeleichten</b> Outdoor-Pool erhältst. Freue dich auf einen eigenen Outdoor-Pool mit vielen Vorteilen:
                        </Typography>
                        <List
                            className='skill-items w-70'
                            sx={{ width: '100%' }}
                            aria-label="contacts"
                            style={{ margin: '0 auto' }}
                        >
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Freibad direkt im Garten:</b> spare Zeit und vermeide Stress, indem du statt zum nächsten Badesee einfach in den Garten gehst.</ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Mehr Ruhe:</b> Auch gibt es weniger neugierige Blicke, die dich anstarren. Erholung pur!</ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Fitnessstudio vor der Haustür:</b> Je nach Poolgröße ist dein Outdoor-Pool dein neues Fitnessstudio, denn Schwimmen fördert deine Gesundheit.</ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Ein sozialer Treffpunkt:</b> Lade deine Freunde ein oder genieße die Zeit mit deiner Familie am Pool. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Blickfang im Garten:</b> Mit BlackPool fügt sich der Pool optimal in die Umgebung ein. Passe die Form oder die Farbe der Poolwände nach deinem Geschmack an und erhalte ein Unikat für dein Zuhause. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding className='w-80' >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Wertsteigerung:</b> Ein Haus mit Pool ist mehr wert als ein Haus ohne Pool. </ListItemText>
                            </ListItem>
                        </List>
                        <Typography variant='h3' className='site-sub-heading pt-20'>Lass dich Inspirieren</Typography>
                        <Grid container spacing={3} style={{ paddingTop: '50px' }}>
                            <Grid lg={1} md={12} sm={12} xs={12} item></Grid>
                            <Grid lg={5} md={6} sm={12} xs={12} item>
                                <Avatar className='circle-image' src='/pool/outdoor-inspiration1.png' alt='outdoor inspiration image' />
                            </Grid>
                            <Grid lg={5} md={6} sm={12} xs={12} item>
                                <Avatar className='circle-image' src='/pool/outdoor-inspiration2.jpg' alt='outdoor inspiration image' />
                            </Grid>
                            {/* <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </Typography>
                            </Grid> */}
                            <Grid lg={1} md={12} sm={12} xs={12} item></Grid>
                        </Grid>
                        <Typography variant='h2' className='site-sub-heading pt-40'>Dir gefallen die Bilder? Perfekt! Lass dich beraten.</Typography>
                        <Typography style={{ margin: '0 auto' }} variant='p' className='site-text pt-20 w-70'>
                            Vereinbare einen Beratungstermin und springe schon bald in deinen eigenen Outdoor-Pool!
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

export default OutdoorPools;
