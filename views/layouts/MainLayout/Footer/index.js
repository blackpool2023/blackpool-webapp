import { AppBar, Box, Grid, List, ListItem } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import { images } from '/views/helpers/constants/ImageConstant';
import FontAwesomeIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const NavBar = () => {

    const data = [
        { id: 1, name: "Home", href: '#' },
        { id: 2, name: "Pools", href: 'pools' },
        // { id: 3, name: "Wellness" },
        // { id: 4, name: "Technology" },
        // { id: 5, name: "Network" },
        { id: 6, name: "About", href: '#' },
        { id: 7, name: "Contact", href: '#' },
    ]
    return (
        // <AppBar position="static">
        <Box className="header-main footer-main">
            <Box className="container-fluid">
                <Box className="header-container">
                    <Grid container>
                        <Grid md={1.5} item>
                            <Box className="site-logo">
                                <Link href="#"
                                // target="_blank" rel="noopener"
                                >
                                    <Image src={images.logo} alt="logo" height={100} width={100} />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid md={3.5} item>
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
                        <Grid md={7} item>
                            <Box className="social-link">
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
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
        // </AppBar>
    );
};

export default NavBar;
