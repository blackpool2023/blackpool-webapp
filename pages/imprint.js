
import { Box, Typography, Link } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
import Helmet from "views/component/UI/Helmet";
// import { images } from 'views/helpers/constants/ImageConstant';

const Imprint = () => {

    return (
        <>
            <Helmet title='Imprint - Blackpool' description='' />
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>Impressum</Typography>
                </Box>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    <Box className="privacy-policy-main">
                        <Box className="w-50" style={{ margin: '0 auto' }}>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Angaben gemäß § 5 TMG:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>BlackPool e. K.</Typography>
                            <Typography variant='p' className='text-left site-text'>Elvis Gbenado</Typography>

                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Postanschrift:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>Geibelplatz 1</Typography>
                            <Typography variant='p' className='text-left site-text'>30173 Hannover</Typography>

                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Kontakt:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>Telefon: 0151 14330198</Typography>
                            <Typography variant='p' className='text-left site-text'>E-Mail: info@blackpool-hannover.de</Typography>

                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Vertreten durch:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>Elvis Gbenado8</Typography>

                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Eingetragen am
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>Amtsgericht Hannover</Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>HRA 206191</Typography>

                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Umsatzsteuer-Identifikationsnummer
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>DE361966879</Typography>

                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Hinweise zur Website
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-20 color-white'>
                                Urheberrechtliche Hinweise
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                <Link href=' https://www.istockphoto.com' className='color-white' style={{ textDecoration: 'underline' }} >
                                    https://www.istockphoto.com
                                </Link>
                            </Typography>

                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Information gemäß § 36 VSBG
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 pb-50'>
                                Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website: Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Das Impressum wurde mit dem <Link href='https://www.activemind.de/datenschutz/generatoren/impressum/' className='color-white' style={{ textDecoration: 'underline' }} >
                                    Impressums-Generator der activeMind AG
                                </Link> erstellt.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
};
export default Imprint;
