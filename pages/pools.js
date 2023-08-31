
import { Box, Typography, Grid, Avatar, Link } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from 'views/helpers/constants/ImageConstant';
import Helmet from "views/component/UI/Helmet"

const Pools = () => {

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
        <Helmet title='Pools - Blackpool' description='Poolbau aus Hannover für ganz Niedersachsen ✓ Betonpool bauen lassen ✓ In- und outdoor ✓ Beratung – Planung – Bau → Jetzt Poolbau anfragen!' />
        <Box className='pools-main'>
            <Box className="pool-banner">
                <Slider {...settings}>
                    <div key={1}>
                        <Link href="#">
                            <Avatar style={{ width: '100%', height: '650px', borderRadius: '0' }} src={'/pool/9.jpg'} alt='banner image' />
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
                <Typography variant='h1' className='site-heading'>Deinen Traum vom Pool wahr werden lassen</Typography>
                <Box className="container">
                    {/* about */}
                    <Box className='w-70' style={{ margin: '0 auto' }}>
                        <Typography variant='p' className='site-text'>
                            <b>Stelle dir vor,</b> wie du dank des professionellen <b>Poolbaus aus Hannover</b> bald eine Bahn im eigenen Betonpool schwimmst. Die Sonne scheint, die Sonnenstrahlen bringen die Wasseroberfläche zum Glitzern, du tauchst unter und mit einem Grinsen wieder auf. Keine nervigen Badegäste stören. Es ist ruhig. Du hörst nur das <b>Lachen deiner Kinder,</b> die mit einem Einhorn-Schwimmring im Wasser planschen. Sie sind entspannt, da ihr nicht im Stau gestanden habt, sondern nur wenige Meter zum Wasser gelaufen seid. Du steigst aus dem Wasser und betrachtest den Pool. Wie ein letztes Puzzleteil fügt er sich perfekt in dein Zuhause ein – es ist <b>eine Traumkulisse.</b>
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Umwerfend, oder? Gewinne mit uns ein Stück <b>Lebensqualität.</b> Blackpool baut deinen Betonpool in Niedersachsen, so wie du ihn willst.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            <Link href='/contact' className='color-white' style={{ textDecoration: 'underline' }} >Jetzt Termin vereinbaren </Link>
                        </Typography>

                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Dank professionellen Poolbau aus Hannover perfekt auf dein Zuhause abgestimmt
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Sicherlich kennst du die vielen Bilder von Poolanlagen auf Instagram oder Pinterest, die, wenn du ehrlich bist, schon ein Stückchen neidisch machen. Stelle dir vor, du kannst nun selbst ein so <b>tolles Bild von deinem Zuhause</b> machen und es deinen Freundinnen zeigen. Genau! Das wäre Wahnsinn und deshalb nehmen wir uns während der Planung genügend Zeit für das Design des Betonpools.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Mit dir zusammen stimmen wir die Größe, Form des Pools und die Farbe und Art der Poolwände ab, sodass ein <b>wunderbar harmonisches Ambiente</b> entsteht, das zu dir und deinem Zuhause passt! Hörst du deine Nachbarn auch schon reden? „Die von nebenan haben jetzt einen so geilen Pool!“
                        </Typography>

                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Mit dem Naturprodukt Salz den Pool desinfizieren statt mit Chlor
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Ein Betonpool ist <b>dank moderner Technik sparsam im Verbrauch, pflegeleicht und sicher.</b> Wir wählen passende Komponenten für deinen Pool und kümmern uns auch um deren Installation. Auf Wunsch nehmen wir für das fertige Becken eine regelmäßige Poolwartung vor. Du musst dich somit überhaupt nicht mit dem Thema Wasseraufbereitung und den ganzen Technikkram beschäftigen.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Wenn du es trotzdem willst, verraten wir dir gerne im Verlauf des Poolbaus weitere Details. Beispielsweise verwenden viele Poolbesitzer Chlortabletten, um Keime abzutöten. Du musst somit manuell die „Chemie“ dosieren. In den Betonpools von Blackpool kommt die <b>Salzelektrolyse</b> zum Einsatz, wodurch du keine Zusätze wie Chlor mehr hinzufügen musst. Die Zugabe von Salz ins Poolwasser und ein geringer Stromfluss (7,5V) in der Elektrolysezelle bilden Natriumhypochlorit, das wiederum eine unterchlorige Säure sowie Natron ergibt. Diese unterchlorige Säure ist ein Oxidationsmittel das das Poolwasser vollständig desinfiziert. Der Aufwand für eine <b>hohe Wasserqualität</b> ist somit gering.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Ein solcher Salzwasserpool schafft <b>automatisch weiches, keimfreies und hautverträgliches Badewasser.</b> Es brennt nicht in den Augen und auch der typische Chlorgeruch ist weniger penetrant.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Falls du hier ein paar mehr Informationen hören willst, rede mit uns. Gerne erläutern wir, wofür welche Technik notwendig ist.
                        </Typography>

                        <Typography variant='h2' className='site-sub-heading pt-20'>
                            Mit Abdeckung und weiteren Extras zu mehr Komfort und Sicherheit
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Im Rahmen des Poolbaus in Niedersachsen gestalten wir deinen neuen Pool nach deinen Wünschen. Wähle aus verschiedenen Poolwand-Farben und Formen des Beckens.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Ferner gibt es viel <b>Pool-Zubehör</b> wie eine Beleuchtung, eine Gegenstromanlage, Wärmepumpe, eine gemauerte Treppe oder Lounge-Bank zum Chillen. Inwieweit du dies alles benötigst, besprechen wir persönlich, da dies von deinen individuellen Bedürfnissen abhängt.
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Sicherlich sinnvoll und empfehlenswert ist eine <b>ordentliche Poolabdeckung.</b> Eine Unterflur-Rolladenabdeckung ist architektonisch so gestaltet, dass du dich auch bei geschlossener Abdeckung an der Poollandschaft erfreuen kannst. Es gibt keine störenden Behälter, in der die Abdeckung aufbewahrt wird, da sie im Boden integriert ist. Ein Rollschutz liegt glatt auf der Wasseroberfläche auf, sieht gut aus und schützt vor gröberen Verschmutzungen.
                        </Typography>

                        <Typography variant='h2' className='site-sub-heading pt-40'>
                            Mit Herzblut dabei – Deine Poolprofis aus Hannover
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
                                        „Hey, ich bin Elvis und Gründer von BlackPool. Mit einem „Poolbau auf Augenhöhe“ planen und bauen wir deinen Pool. Wir hören dir zu, wir erfahren deine Wünsche und gestalten deinen einzigartigen Pool, der dich begeistert.“
                                    </Typography>
                                    <Typography variant='p' className='text-left site-text pt-10 center-md'>
                                        Erfahre mehr über uns: <Link href='/Wartung' className='color-white' style={{ textDecoration: 'underline' }} >die Poolbauer</Link>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid lg={1} md={12} sm={12} xs={12} item></Grid>
                        </Grid>
                        <Typography variant='h2' className='site-sub-heading pt-40'>
                            Jetzt mit deinem Pool-Projekt in Niedersachsen starten?
                        </Typography>
                        <Typography variant='p' className='site-text pt-10'>
                            Nimm mit uns Kontakt auf, lasse dich fachkundig beraten und erfahre die nächsten Schritte des Poolbaus in Hannover und ganz Niedersachsen.
                            <Typography variant='p' className='site-text pt-10'>
                                <Link href='/Wartung' className='color-white' style={{ textDecoration: 'underline' }}>
                                    Pool anfragen
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

export default Pools;
