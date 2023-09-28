
import React, { useState, useEffect } from 'react';
import { AppBar, Menu, MenuItem, Box, List, ListItem, Button } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import { images } from 'views/helpers/constants/ImageConstant';

const Header = () => {
    const router = useRouter();

    const [showButton, setShowButton] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEll, setAnchorEll] = useState(null);
    const [toggle, setToggle] = useState(false);
    const open = Boolean(anchorEl);
    const openI = Boolean(anchorEll);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClicked = (event) => {
        setAnchorEll(event.currentTarget);
    };
    const handleClosed = () => {
        setAnchorEll(null);
    };
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
    const data = [
        { id: 1, name: "Home", href: '/' },
        // { id: 2, name: "Pools", href: 'pools' },
        { id: 3, name: "Wartung", href: 'Wartung' },
        // { id: 4, name: "Technology" },
        // { id: 5, name: "Network" },
        // { id: 6, name: "Gallery", href: 'gallery' },
        { id: 7, name: "Contact", href: 'kontakt' },
    ]
    return (
        <AppBar position="static">
            <Box className={`header-main ${showButton ? 'sticky-header' : ''}`}>

                <Box className="container-fluid">
                    <Box className="header-container">
                        <Box className="site-logo">
                            <Link href="/"
                            // target="_blank" rel="noopener"
                            >
                                <Image src={images.logo} alt="logo" height={100} width={100} />
                            </Link>
                        </Box>
                        <Button className="toggle-button" onClick={() => setToggle(!toggle)} >
                            {toggle ? <ClearIcon /> : <DehazeIcon />}
                        </Button>
                        <Box className={toggle ? "d-block site-menu" : "site-menu"} >
                            <List>
                                {/* {data.map((item) => (
                                    <ListItem key={item.id}>
                                        <Link href={item.href}> {item.name} </Link>
                                    </ListItem>
                                ))} */}
                                <ListItem key={1}>
                                    <Link href='/'> Homee </Link>
                                </ListItem>
                                <ListItem
                                    id="basic-button"
                                    aria-controls={openI ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openI ? 'true' : undefined}
                                    onClick={handleClicked}
                                >
                                    <Link>Poolbau</Link>
                                </ListItem>
                                <ListItem key={2}>
                                    <Link href='Wartung'> Wartung</Link>
                                </ListItem>
                                <ListItem
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Link>About</Link>
                                </ListItem>
                                <ListItem key={3}>
                                    <Link href='kontakt'> Kontakt </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEll}
                        open={openI}
                        onClose={handleClosed}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => { router.push('/pools'); handleClosed() }}>Pool</MenuItem>
                        <MenuItem onClick={() => { router.push('/indoorpool'); handleClosed() }}>Indoor Pool</MenuItem>
                        <MenuItem onClick={() => { router.push('/outdoorpool'); handleClosed() }}>Outdoor Pool</MenuItem>
                    </Menu>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => { router.push('/aboutus'); handleClose() }}>About</MenuItem>
                        <MenuItem onClick={() => { router.push('/gallery'); handleClose() }}>Gallery</MenuItem>
                    </Menu>
                    {/* <Box className='contact-btn'>
                        <ListItem>
                            <Link href='contact'> Contact</Link>
                        </ListItem>
                    </Box> */}
                </Box>
            </Box>
        </AppBar >
    );
};

export default Header;
