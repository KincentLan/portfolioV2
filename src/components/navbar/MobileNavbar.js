import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from "@mui/material";

import { Link } from 'react-scroll'

const drawerWidth = 240;

function MobileNavbar(props) {
    const { window, toggleDrawer, mobileOpen, navItems } = props;

    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();

    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.primary[900],
                        opacity: 30
                    }
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <List justify="center" sx={{ margin: "auto" }}>
                    {navItems.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={500} offset={-100}
                                    onClick={toggleDrawer}>
                                    <ListItemText primary={item.name} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default MobileNavbar;