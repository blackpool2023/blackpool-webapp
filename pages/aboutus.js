
import { Avatar, Link, Box, Grid, Typography } from '@mui/material';
import Helmet from "views/component/UI/Helmet";
// import StarIcon from '@mui/icons-material/Star';
import { images } from 'views/helpers/constants/ImageConstant';
// import { AddBoxOutlined } from '@mui/icons-material';

const AboutUs = () => {

    return (
        <>
            <Helmet title='About Us - Blackpool' description='Wir planen & bauen In- und Outdoor-Pools ✓ Inklusive Technik ✓ Wartungsprogramm → Mehr über BlackPool e.K. erfahren! ' />
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>Über uns</Typography>
                </Box>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    {/* about */}
                    <Box>
                        <Typography variant='h1' className='site-heading'>Berufung statt nur ein Job</Typography>
                        {/* <Typography style={{ width: '70%', margin: '0 auto' }} variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography> */}
                    </Box>
                    <Box className="about-main pool-facility">
                        {/* <Typography variant='h2' className='site-heading'>Pool Facilities</Typography> */}
                        <Grid container spacing={3} style={{ paddingTop: '0px' }}>
                            <Grid md={1} item></Grid>
                            <Grid md={5} item>
                                <Avatar className='circle-image' src={images.gallery2} alt='gallery image' />
                            </Grid>
                            <Grid md={5} item style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                    Kennst du Menschen, die sich für eine bestimmte Sache extrem begeistern können? Sie sind voller Power und wahre Experten, weil sie <b>einfach lieben, was sie tun.</b>
                                    <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                        Ich – <b>Elvis</b> – könnte nun wie andere Poolbauer Ereignisse aus meinem Lebenslauf auflisten oder erzählen, wie viele Meister im Team sind. Denn mit meiner Branchenerfahrung im Großhandel lernte ich nahezu alle Materialien rund um den Poolbau kennen und auch bei einem Poolbauer lernte ich von der Pike auf, wie Pools in hoher Qualität geplant und gebaut werden.
                                    </Typography>
                                    <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                        Doch viel wichtiger als ein Titel ist das warum.
                                    </Typography>
                                    <Typography variant='p' style={{ textAlign: 'left' }} className='site-text'>
                                        Nach sieben Erfahrungsjahren kam der Wunsch nach Veränderung, um noch tiefer in die Materie abzutauchen. Ich gründete <b>BlackPool,</b> weil ich dafür verantwortlich sein will, <b>Familien den Traum von einem eigenen Pool zu ermöglichen.</b> Denn auch wenn es etwas kitschig klingt: die Emotionen zu erleben, die meine Kunden am ganzen Körper zeigen, wenn sie den fertigen Pool sehen, ist etwas Wunderbares.
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid md={1} item></Grid>
                            <Grid md={1} item></Grid>
                            <Grid md={10} item>
                                <Typography variant='p' style={{ textAlign: 'center' }} className='site-text'>
                                    Für diese <b>Momente der Freude und die schöne Zeit, die du an dem Pool verbringst,</b> baue ich mit meinem Team <b>genau den Pool, den du dir wünschst.</b> Ein Pool von BlackPool ist nämlich fast so wie Urlaub für zu Hause, nur besser. Du sparst die nervige Fahrt zum Wasser, wo du gefühlt Stunden im Stau im heißen Auto oder Zug sitzt. Auch erhältst du mehr Privatsphäre, denn andere Badegäste, die dich stören, sind weit entfernt. Immer wenn du willst schwimmst du deine Bahnen oder du siehst deine lachenden Kinder beim Planschen zu.
                                </Typography>
                                <Typography variant='p' style={{ textAlign: 'center' }} className='site-text'>
                                    Damit du solche Erlebnisse hautnah erlebst und sich die für viele Familien eher teure Anschaffung wirklich lohnt, kümmern wir uns zusammen mit <b>Architekten und qualifizierten Partnerbetrieben</b> um die <b>komplette Planung und den Bau des Pools.</b> Ist er fertig, hilft unser <b>Wartungs-Service</b> dabei, dass er Jahrzehnte lang gut aussieht. Genieße den Wasserspaß, während wir den Rest übernehmen.
                                </Typography>
                                <Typography variant='h2' className='site-sub-heading pt-20'>
                                    Begegne deine Vorteile und unsere Werte
                                </Typography>
                            </Grid>
                            <Grid md={1} item></Grid>
                        </Grid>
                        <Box className="site-benefit">
                            <Box>
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Maßgeschneidert</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Individuell auf deinen vorhandenen Platz und Bedürfnissen planen wir für dich einen einzigartigen Pool.
                                </Typography>
                            </Box>
                            <Box >
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Haltbar</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Statt Kunststoff bekommst du von BlackPool einen Pool aus massivem Beton, damit du lange Freude an ihm hast.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Menschlich</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Wir sind für dich da. Gemeinsam auf Augenhöhe gehen wir dein Projekt „Pool“ an. Am Ende bist du begeistert.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="site-benefit">
                            <Box className="plr-10">
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Familiär</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Wie eine große Familie sind wir multikulturell und international. Alle Menschen behandeln wir gleich.
                                </Typography>
                            </Box>
                            <Box className="plr-10">
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Sicher</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Mit einer ästhetisch ansprechenden Abdeckung fallen keine Tiere oder Einbrecher in deinen Pool.
                                </Typography>
                            </Box>
                            <Box className="plr-10">
                                <Typography variant='p' className='site-text color-white'>
                                    <b>Pflegeleicht</b>
                                </Typography>
                                <Typography variant='p' className='site-text'>
                                    Dank ausgeklügelter Filteranlagen und Technik bleibt dein Becken sauber. Die Wartung übernehmen wir.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="pb-50">
                    <Typography variant='h2' className='site-sub-heading'>
                        Erzähle uns, wie dein Traumpool aussieht
                    </Typography>
                    <Typography variant='p' className='site-text pt-10'>
                        Starte jetzt, damit du nicht mehr viele Kilometer bis zum Wasser fahren musst. Wir beraten dich persönlich. Hier vereinbarst du einen <Link href='/contact' className='color-white' style={{ textDecoration: 'underline' }} >Beratungstermin</Link>
                    </Typography>
                </Box>
                {/* <Box className="about-banner"></Box> */}
            </Box>
            {/* <Box className="bg-black">
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
            </Box> */}
        </>
    );
};
export default AboutUs;
