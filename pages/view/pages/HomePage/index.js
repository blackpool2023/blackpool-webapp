import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Link } from '@mui/material';
// import { Link } from '@mui/material';
import { images } from 'views/helpers/constants/ImageConstant';
// import Gallery from 'views/component/UI/Gallery';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CarouselSlider from 'views/component/UI/CarouselSlider';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import MiscellaneousServicesSharpIcon from '@mui/icons-material/MiscellaneousServicesSharp';
import FontAwesomeIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}
const HomePage = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <CarouselSlider />
            <Box className="homepage-main">
                {/* <Box className="slide-heading">
                    <Typography variant='h1'><span className='fw-800'>WHERE</span> <span>WATER MEETS EMOTIONS</span></Typography>
                </Box> */}
                <Box className={`social-link ${showButton ? 'sticky-link' : ''}`}>
                    <Link href="#" className="hexagon">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </Link>
                    <Link href="#" className="hexagon">
                        <InstagramIcon />
                    </Link>
                    <Link href="#" className="hexagon">
                        <PermContactCalendarIcon />
                    </Link>
                </Box>
                <button
                    className={`scrollButton ${showButton ? 'show' : ''}`}
                    onClick={handleScrollToTop}
                >
                    <KeyboardArrowUpIcon />
                </button>
                {/* banner */}
                {/* <Box style={{ backgroundColor: '#00000091' }}> */}

                {/* </Box> */}
                <Box className="bg-black">
                    <Box className="container">
                        {/* about */}
                        {/* <Box className="about-main"> */}

                        {/* <Grid container spacing={3}>
                                <Grid md={6} item>
                                    <Avatar style={{ width: '100%', height: 'auto', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </Grid>
                                <Grid md={6} item style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='p' className='site-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                                </Grid>
                            </Grid> */}
                        <Box className="about-main pool-facility pt-50">
                            {/* <Typography variant='h2' className='site-heading'>Über uns</Typography> */}
                            <Grid container spacing={3} >
                                {/* <Grid md={2} item></Grid> */}
                                {/* <Grid md={8} item>
                                    <Typography variant='p' className='site-text'>
                                        „Hey, ich bin Elvis, Poolbauer aus Hannover und Inhaber von BlackPool. Wir alle sollten mehr lachen und schöne Erlebnisse schaffen! Deshalb baue ich für deine Familie aus Niedersachsen, einen maßgefertigten, lange haltbaren Pool aus Beton.
                                    </Typography>
                                    <Typography variant='p' className='site-text pt-10'>
                                        Ein eigener Pool ist ein idealer Ort für Grillabende mit Freunden oder um mit der Familie Zeit zu verbringen. Es ist eine kleine Oase an denen du dich erholst, entspannst, Erinnerungen an eine angenehme Zeit mit deinen Kindern schaffst oder deinen Körper mit Schwimmbewegungen etwas Gutes tust.
                                    </Typography>
                                    <Typography variant='p' className='site-text pt-10'>
                                        Damit du mehr Zeit hast, die Sonne zu genießen, fügen wir deinem neuen Pool moderne Technik hinzu, die Aufgaben wie die Poolpflege automatisieren. Erhalte einen Pool mit allem Drum und Dran in dem du entspannen kannst und der für deine Familie für ordentlich Badespaß sorgt.“
                                    </Typography>
                                    <Typography variant='p' className='site-text pt-10'>
                                        Mehr über BlackPool: <Link href='/pools' className='color-white' style={{ textDecoration: 'underline' }}>deine zukünftigen Poolprofis.</Link>
                                    </Typography>
                                </Grid> */}
                                {/* <Grid md={2} item></Grid> */}
                                <Grid md={1} item></Grid>
                                <Grid md={5} item>
                                    <Avatar className='circle-image' src={images.gallery2} alt='gallery image' />
                                </Grid>
                                <Grid md={5} item style={{ alignItems: 'center', display: 'flex' }}>
                                    <Box>
                                        <Typography variant='p' className='site-text text-left' >
                                            „Hey, ich bin Elvis, Poolbauer aus Hannover und Inhaber von BlackPool. Nichts in der Welt wirkt so ansteckend wie Lachen und gute Laune - Wir alle sollten mehr lachen und schöne Erlebnisse schaffen! Deshalb baue ich für deine Familie aus Niedersachsen, einen maßgefertigten, lange haltbaren Pool aus Beton.
                                            {/* „Hey, ich bin Elvis, Poolbauer aus Hannover und Inhaber von BlackPool. Nicht in der welt wirkt so ansteckend Wir Lachen und gute Lachen und gute Laune - Wir alle sollten mehr lachen und schöne Erlebnisse schaffen! Deshalb baue ich für deine Familie aus Niedersachsen, einen maßgefertigten, lange haltbaren Pool aus Beton. */}
                                        </Typography>
                                        <Typography variant='p' className='site-text pt-10 text-left'>
                                            Ein eigener Pool ist ein idealer Ort für Grillabende mit Freunden oder um <b>mit der Familie Zeit zu verbringen.</b> Es ist eine kleine Oase an denen du dich erholst, entspannst, Erinnerungen an eine angenehme Zeit mit deinen Kindern schaffst oder deinen Körper mit Schwimmbewegungen etwas Gutes tust.
                                        </Typography>
                                        <Typography variant='p' className='site-text pt-10 text-left'>
                                            Damit du mehr Zeit hast, die Sonne zu genießen, fügen wir deinem neuen Pool moderne Technik hinzu, die Aufgaben wie die Poolpflege automatisieren. Erhalte einen Pool mit allem Drum und Dran in dem du entspannen kannst und der für deine Familie für ordentlich Badespaß sorgt.“
                                        </Typography>
                                        <Typography variant='p' className='site-text pt-10 text-left'>
                                            Mehr über BlackPool: <Link href='/pools' className='color-white' style={{ textDecoration: 'underline' }}>deine zukünftigen Poolprofis.</Link>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid md={1} item></Grid>
                                <Grid container spacing={3} style={{ paddingTop: '30px' }}>
                                    <Grid md={2} item></Grid>
                                    <Grid md={8} item>
                                        <Typography variant='h2' style={{ textTransform: 'uppercase' }} className='site-text'>
                                            Endlich ein eigener Pool für die ganze Familie
                                        </Typography>
                                    </Grid>
                                    <Grid md={2} item></Grid>
                                    <Grid md={2} item></Grid>
                                    <Grid md={8} item>
                                        <Typography variant='p' className='site-text'>
                                            Die Idee ist da. Seit einiger Zeit denkst du über dein Vorhaben nach und in deinem Kopf malst du dir bereits aus, wie du und deine Liebsten eine schöne Zeit am eigenen Pool verbringen. Du schwimmst entspannt deine Bahnen, während warme Sonnenstrahlen auf deine Haut treffen. Deine Kinder planschen, springen vom Beckenrand in deine Arme und spielen Wasserball. Es wird viel gelacht. Es ist wie Urlaub, nur ohne das nervige Gedrängel an den Touristenorten und die lange Anfahrt spart ihr euch ebenfalls.
                                        </Typography>
                                        <Typography variant='p' className='site-text'>
                                            Vielleicht hast du dir zur Inspiration ein paar Poolbilder angeschaut und denkst nun: Ich will auf jeden Fall einen Pool! Doch gleichzeitig fragst du dich, wie teuer das Ganze wird und wer überhaupt einen Pool in Niedersachsen baut. Du fängst an Informationen zu suchen und bist dabei heute auf BlackPool gestoßen. Toll!
                                        </Typography>
                                        <Typography variant='p' className='site-text'>
                                            Wir, die Poolbauer aus Hannover, planen und bauen moderne Pools in Niedersachsen. Vereinbare ein unverbindliches Beratungsgespräch, damit du Klarheit über offene Fragen erhältst und damit du schon bald am eigenen Pool liegst: <Link href='/' className='color-white' style={{ textDecoration: 'underline' }} >Ja, ich will Urlaub für zu Hause!</Link>
                                        </Typography>
                                    </Grid>
                                    <Grid md={2} item></Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* </Box> */}
                        {/* image */}
                        {/* <Gallery /> */}
                    </Box>
                </Box>
                <Box className="services-main bg-black">
                    <Box className="container">
                        <Typography variant='h2' className='site-heading'>
                            Das bekommst du von BlackPool, dem Poolbauer aus Hannover!
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid md={2} item></Grid>
                            <Grid md={4} item>
                                <Box className="service-item">
                                    {/* <MiscellaneousServicesSharpIcon /> */}
                                    <Typography variant='h3'>Out- und Indoor-Pools</Typography>
                                    <Typography variant='p' className='site-text'>
                                        Du planst mit uns einen wetterunabhängigen <b><u>Indoor-Pool</u></b> oder einen <b><u>Outdoor-Pool</u></b> für den Sommer. Im Anschluss bauen wir ihn, installieren die Technik und übergeben dir den fertigen Pool.
                                        <Typography variant='p' className='site-text'>
                                            <Link href='/pools' className='color-white' style={{ textDecoration: 'underline' }} >Mehr zum Poolbau</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid md={4} item>
                                <Box className="service-item">
                                    {/* <MiscellaneousServicesSharpIcon /> */}
                                    <Typography variant='h3'>Poolwartung</Typography>
                                    <Typography variant='p' className='site-text'>
                                        Ein Pool ist ein Freizeitvergnügen und du willst in der Freizeit Technik prüfen? Gib dies einfach ab! Mit unserem <b><u>Wartungs-Service</u></b> prüfen wir die Technik, damit dein Pool immer einsatzbereit ist.
                                        <Typography variant='p' className='site-text'>
                                            <Link href='/pools' className='color-white' style={{ textDecoration: 'underline' }} >Mehr zum Poolbau</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid md={2} item></Grid>
                            {/* <Grid md={4} item>
                                <Box className="service-item">
                                    <MiscellaneousServicesSharpIcon />
                                    <Typography variant='h3'>Heading</Typography>

                                    <Typography variant='p' className='site-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Typography>
                                </Box>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
                {/* gallery */}
                <Box className="bg-black">
                    <Box className="container">
                        <Typography variant='h2' className='site-heading'>Pools, die Emotionen auslösen: Ein Einblick, wie es bei dir aussehen könnte</Typography>
                        <Box className="lightbox-main">
                            <div ref={sliderRef} className="keen-slider">
                                <div className="keen-slider__slide number-slide1">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide2">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide3">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery3} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide4">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery4} alt='gallery image' />
                                </div>
                            </div>

                            <div ref={thumbnailRef} className="keen-slider thumbnail">
                                <div className="keen-slider__slide number-slide1">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery1} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide2">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery2} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide3">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery3} alt='gallery image' />
                                </div>
                                <div className="keen-slider__slide number-slide4">
                                    <Avatar style={{ width: '100%', height: '600px', borderRadius: '0' }} src={images.gallery4} alt='gallery image' />
                                </div>
                            </div>
                            {/* <Grid container spacing={3}>
                                <Grid md={6} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery1} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={5} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery2} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={1} item> </Grid>
                                <Grid md={1} item> </Grid>
                                <Grid md={8} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery1} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid md={3} item>
                                    <Link href="#" className='position-relative'>
                                        <Image src={images.gallery2} alt="pool image" width='100' height='100' />
                                        <Box className="img-content">
                                            <Box className="content-inner">
                                                <Typography variant='h3' className='lightbox-heading'>Heading</Typography>
                                                <Typography variant='p' className='lightbox-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Grid> */}
                        </Box>
                        <Box className="pt-40 pb-50">
                            <Grid container spacing={3}>
                                <Grid md={2} item></Grid>
                                <Grid md={8} item>
                                    <Typography variant='p' className='site-text'>
                                        Noch mehr Inspirationen in unserer Galerie. Schaue nach, was die Poolbauer aus Hannover für dich bauen:   <Link href='/gallery' className='color-white' style={{ textDecoration: 'underline' }} >zur Galerie.</Link>
                                    </Typography>
                                    <Typography variant='p' style={{ textTransform: 'uppercase' }} className='site-text'>
                                        Du willst dich und deine Familie glücklich machen?
                                    </Typography>
                                    <Typography variant='p' className='site-text'>
                                        Kaufe einen <b>hochwertigen Pool</b> direkt bei BlackPool. Das Fundament von unseren <b>Betonpool hält Jahrzehnte</b>, sodass vielleicht noch deine Enkelkinder in deinem Pool schwimmen lernen.
                                    </Typography>
                                    <Typography variant='p' className='site-text'>
                                        Bespreche unverbindlich die nächsten Schritte, um schon bald im eigenen Pool die warmen Sonnenstrahlen auf deiner Haut zu genießen. <b>Jetzt starten</b> und endlich zusammen mit einem Poolbauer aus Hannover mit der Umsetzung beginnen: Jetzt einen
                                        <Link href='/contact' className='color-white' style={{ textDecoration: 'underline' }} > Beratungstermin vereinbaren.</Link>
                                    </Typography>
                                </Grid>
                                <Grid md={2} item></Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default HomePage;