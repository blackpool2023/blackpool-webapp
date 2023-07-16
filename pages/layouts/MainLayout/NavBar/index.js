import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    My Header
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
