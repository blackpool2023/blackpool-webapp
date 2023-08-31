import { Box, Grid, List, ListItem } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import { images } from '/views/helpers/constants/ImageConstant';
import FontAwesomeIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const NavBar = () => {

    const data = [
        { id: 1, name: "Home", href: '/' },
        { id: 2, name: "Poolbau", href: 'pools' },
        { id: 3, name: "Wartung", href: 'Wartung' },
        // { id: 4, name: "Technology" },
        // { id: 5, name: "Network" },
        { id: 6, name: "About", href: 'aboutus' },
        { id: 7, name: "Kontakt", href: 'contact' },
        { id: 8, name: "Datenschutz", href: 'Datenschutzerklarung' },
        { id: 9, name: "Impressum", href: 'Impressum' },
    ]
    return (
        // <AppBar position="static">
        <Box className="footer-main">
            <Box className="container-fluid">
                <Box className="header-container">
                    <Grid container>
                        <Grid lg={1} md={1.5} sm={12} xs={12} item className='none-1140'>
                            <Box className="site-logo">
                                <Link href="/"
                                // target="_blank" rel="noopener"
                                >
                                    <Image src={images.logo} alt="logo" height={100} width={100} />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid lg={4} md={3.5} sm={12} xs={12} item>
                            <Box className="site-menu">
                                <List>
                                    {data.map((item) => (
                                        <ListItem key={item.id}>
                                            <Link href={item.href}> {item.name} </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid lg={7} md={7} sm={12} xs={12} item className='none-1140'>
                            <Box className="social-link">
                                <Link href="#" className="hexagon">
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                                </Link>
                                <Link href="https://www.instagram.com/blackpool_hannover/" target="_blank" className="hexagon">
                                    <InstagramIcon />
                                </Link>
                                <Link href="mailto:info@blackpool-hannover.de" className="hexagon">
                                    <PermContactCalendarIcon />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
        // </AppBar>
    );
};

export default NavBar;
