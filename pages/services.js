
import { Box, Typography, Grid, Avatar, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
// import { images } from 'views/helpers/constants/ImageConstant';
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
        <Helmet title='Services - Blackpool' description='Pool warten lassen ✓ Fachkundige Poolwartung von Betonpools ✓ In Hannover & in ganz Niedersachsen → Jetzt Pool-Service anfragen!' />
        <Box className='pools-main'>
            <Box className="pool-banner">
                <Slider {...settings}>
                    <div key={1}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/wartung-banner.png'} alt='banner image' />
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
                <Typography variant='h1' className='site-heading'>Poolwartung – Pool-Service in Hannover & um zu beauftragen</Typography>
                <Box className="container">
                    {/* about */}
                    <Box className="w-70" style={{ margin: '0 auto' }}>
                        <Typography variant='p' className='site-text'>
                            Dein Pool in Niedersachsen, z. B. in Hannover beschert dir und deiner Familie ein Plus an Lebensqualität, solange er funktionstüchtig bleibt. Ein <b>Pool-Service</b> wie die <b>regelmäßige Poolwartung</b> gewährleistet eine <b>sichere Nutzung und sauberes Wasser.</b>
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            <b>BlackPool</b> hilft dir, deinen Pool zu warten. Mit unserem professionellen Pool-Service entscheidest du dich für <b>die bequeme Art deinen Pool in Schuss zu halten.</b> Du musst ihn weniger selbst pflegen und kannst dich somit in jeder Hinsicht auf den Wasserspaß freuen, den ein eigener Pool mit sich bringt.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Übergebe jetzt die Poolwartung in <b>fachkundige Hände,</b> damit du lange Freude an deinem Pool hast und Ausfälle vermeidest. Hier fragst du nach einem Termin: <Link href='/contact' className='color-white' style={{ textDecoration: 'underline' }} >Anfrage senden.</Link>
                        </Typography>

                        <Box className="site-benefit">
                            <Box>
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Technik-Check</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Lasse die Technik prüfen und bei Bedarf Verschleiß-Teile durch neue Komponenten ersetzen.
                                </Typography>
                            </Box>
                            <Box >
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Wasser-Check</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Erreiche mit der BlackPool-Kontrolle eine gesundheitlich unbedenkliche Wasserqualität.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='p' className='site-text color-white'>
                                    <b>In deiner Nähe</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Von Hannover fahren wir zu deinem Pool in Niedersachsen, um eine Wartung vorzunehmen.
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Pool warten – so geht es mit unserem Pool-Service aus Hannover!
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Das Herzstück eines Pools ist die Technik bestehend aus einem Filtersystem, der Wasserdesinfektion, der Verrohrung, die Beleuchtung, der Heizung, der Poolabdeckung und weitere Komponenten wie eine Gegenstromanlage.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Ähnlich wie bei deinem Auto, funktioniert die Technik nur ordnungsgemäß, wenn sie <b>regelmäßig kontrolliert</b> wird.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Läuft der Filter beispielsweise nicht richtig, würde Schmutz im Becken verbleiben, wodurch das Wasser nicht mehr kristallklar ist, sondern trüb. Ein Sprung ins sonst so angenehme Nass, kann mit der Zeit gesundheitlich bedenklich werden, wenn die Keimbelastung aufgrund fehlerhafter Aufbereitung des Wassers zunimmt.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Mit einer <b>fachkundigen Kontrolle und Wartung der Technik</b> sorgst du <b>für einwandfreies Poolwasser.</b> Beim Pool-Service prüfen wir alle Technik-Komponenten auf ihre Funktion. Sollte ein Defekt vorliegen, bringen wir passende Ersatzteile mit und bauen diese fachgerecht ein.
                        </Typography>

                        <Typography variant='h3' className='site-sub-heading pt-20'>Wie oft einen Pool warten?</Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Der Filter wälzt das gesamte Wasser um und hält es sauber. Gröbere Verschmutzungen wie Laub entfernst du mindestens einmal pro Woche. Hierfür eignen sich Poolroboter, die automatisch Verunreinigungen aufsammeln. Manuell funktioniert dies mit einem Kescher.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Die Technik wie die Umwälzpumpe läuft je nach Beckengröße mehrere Stunden pro Tag. Damit dies ordnungsgemäß möglich ist, ist eine Poolwartung <b>1-2-mal pro Jahr</b> anzustreben:
                        </Typography>

                        <List
                            className='skill-items w-100i'
                            sx={{ width: '100%' }}
                            aria-label="contacts"
                            style={{ width: '100%', margin: '0 auto' }}
                        >
                            <ListItem disablePadding>
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Inbetriebnahme im Frühjahr:</b> Empfehlenswert ist es, wenn du einen Pool-Service vor der Freibadwetter-Saison anfragst, damit du bei hohen Temperaturen deinen Pool ohne Ausfälle genießen kannst. </ListItemText>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemIcon style={{ minWidth: '35px' }} >
                                    <StarIcon className='icon-white' />
                                </ListItemIcon>
                                <ListItemText className='list-item'><b>Einwinterung deines Pools:</b> Zum Ende der Saison ist es wichtig den Pool winterfest zu machen, damit es zu keinen Schäden über den Winter kommt.</ListItemText>
                            </ListItem>
                        </List>

                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Dein neues Wartungs-Team
                        </Typography>
                    </Box>
                    <Box className="about-main pool-facility mt-40">
                        <Grid container spacing={3}>
                            <Grid lg={1} md={12} sm={12} xs={12} item></Grid>
                            <Grid lg={5} md={6} sm={12} xs={12} item>
                                <Avatar className='circle-image' src='/assets/images/banner/about-usimage.png' alt='gallery image' />
                            </Grid>
                            <Grid lg={5} md={6} sm={12} xs={12} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant='p' className='text-left site-text center-md'>
                                        „Hey, ich bin Elvis und der Kopf hinter BlackPool. Mein Team und ich planen individuelle Pools in Niedersachsen, insbesondere in und um Hannover für deinen Garten oder für den Indoor-Bereich.
                                    </Typography>
                                    <Typography variant='p' className='text-left site-text center-md'>
                                        Es sind moderne Betonpools, die der Umwelt zuliebe lange halten und auch noch richtig gut aussehen. Damit die sorgfältig ausgewählte Technik jahrelang funktioniert, übernehmen wir mit unserem Pool-Service deine Poolwartung.“
                                    </Typography>
                                    <Typography variant='p' className='text-left site-text pt-10 center-md'>
                                        Hier mehr über uns lesen: <Link href='/services' className='color-white' style={{ textDecoration: 'underline' }} >mehr über uns.</Link>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid lg={1} md={12} sm={12} xs={12} item></Grid>
                        </Grid>
                        <Typography variant='h2' className='site-sub-heading pt-40'>
                            Jetzt Poolwartung anfragen
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Sage uns, wo dein Pool in Hannover oder Niedersachsen steht, wir kommen vorbei und übernehmen mit dem Pool-Service die Poolwartung. Lasse uns deinen Pool warten, damit hygienische Bedingungen vorliegen, die Technik funktioniert und du bequem am Pool liegen kannst, statt ihn auseinanderzubauen.
                            <Typography variant='p' className='site-text pt-10'>
                                Hier nach einem freien Termin fragen:
                                <Link href='/services' className='color-white' style={{ textDecoration: 'underline' }}>
                                    Termin vereinbaren.
                                </Link>
                            </Typography>
                        </Typography>
                        {/* <Grid container spacing={3} style={{ flexDirection: 'row-reverse' }} className='mt-40' >
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.leakDetection} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'right' }} className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </Typography>
                            </Grid>
                            <Grid md={1} item></Grid>
                        </Grid> */}
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
