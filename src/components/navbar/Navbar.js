import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function Navbar({toggleDrawer, navItems}) {
    return (
        <AppBar position="sticky" sx={{p: 1}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ mr: 2, display: { sm: 'none' }}}
                >
                    <Typography variant="logo" component="div" sx={{ flexGrow: 1 }}>
                        KL
                    </Typography>
                </IconButton>
                <Typography variant="logo" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    Kincent Lan
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button variant="navbar" key={item}>
                            <Typography variant="navbar"> {item} </Typography>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}