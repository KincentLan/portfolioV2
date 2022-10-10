import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/icons-material/Menu";
import { Link } from 'react-scroll';

export default function Navbar({ toggleDrawer, navItems }) {
    return (
        <AppBar position="sticky" sx={{ p: 1 }}>
            <Toolbar>

                <Typography variant="logo" component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
                    KL
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                    >
                        <Menu sx={{ fontSize: 30 }} />
                    </IconButton>
                </Box>


                <Typography variant="logo" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    Kincent Lan
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button variant="navbar" key={item.name}>
                            <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={500} offset={-100}>
                                <Typography variant="navbar"> {item.name} </Typography>
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}