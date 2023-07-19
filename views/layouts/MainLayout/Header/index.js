import { AppBar, Box, List, ListItem } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import { images } from 'views/helpers/constants/ImageConstant';

const Header = () => {
    console.log('images', images)
    const data = [
        { id: 1, name: "Home" },
        { id: 2, name: "Pools" },
        { id: 3, name: "Wellness" },
        { id: 4, name: "Technology" },
        { id: 5, name: "Network" },
        { id: 6, name: "About" },
        { id: 7, name: "Contact" },
    ]
    console.log('images', images)
    return (
        <AppBar position="static">
            <Box className="header-main">
                <Box className="container-fluid">
                    <Box className="header-container">
                        <Box className="site-logo">
                            <Link href="#"
                            // target="_blank" rel="noopener"
                            >
                                {/* <Image src={images.logo} alt="logo" /> */}
                            </Link>
                        </Box>
                        <Box className="site-menu">
                            <List>
                                {data.map((item) => (
                                    <ListItem key={item.id}>
                                        <Link href="#"> {item.name} </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppBar>
    );
};

export default Header;
