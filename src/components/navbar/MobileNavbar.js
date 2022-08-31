import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Grid, useTheme} from "@mui/material";
import darkmodeBlue from "../../color-palletes/darkmodeBlue";
import {red} from "@mui/material/colors";

const drawerWidth = 240;


function MobileNavbar(props) {
    const { window, toggleDrawer, mobileOpen, navItems  } = props;

    const drawer = (
        <Box onClick={toggleDrawer} sx={{textAlign: 'center'}}>

        </Box>
    );

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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                <List justify="center" sx={{margin: "auto"}}>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
                                <ListItemText primary={item}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default MobileNavbar;