import * as React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline, Grid, Paper, useMediaQuery} from "@mui/material";
import {blue, amber, blueGrey, grey} from "@mui/material/colors";
import darkmodeBlue from "./color-palletes/darkmodeBlue";
import Box from "@mui/material/Box";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

const NAV_ITEMS = ['About', 'Resume', 'Contact'];

const BASE_THEME = {
    typography: {
        subtitle1: {
            fontSize: 20,
        },
        heroName: {
            fontSize: 100,
            lineHeight: 1,
        },
        subtitle2: {
            fontSize: 25,
        },

        logo: {
            fontFamily: "Silkscreen",
            fontSize: 20,
        },

        navbar: {
            fontSize: 18
        },
        fontSize: 30,
        fontFamily: "Jost"
    },

};

const getPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[900],
                },
            }
            : {
                // palette values for dark mode
                primary: darkmodeBlue,
                divider: darkmodeBlue[700],
                background: {
                    default: darkmodeBlue[900],
                    paper: darkmodeBlue[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});


const getTheme = (prefersDarkMode) => {
    const mode = prefersDarkMode ? "dark" : "light";
    return {
        ...BASE_THEME,
        ...getPalette(mode)
    };
}

function App() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme(getTheme(prefersDarkMode)), [prefersDarkMode]
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box>
                <Navbar toggleDrawer={handleDrawerToggle} navItems={NAV_ITEMS}  />
                <MobileNavbar toggleDrawer={handleDrawerToggle} mobileOpen={mobileOpen} navItems={NAV_ITEMS}/>
                <Grid sx={{height: "100vh"}}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="stretch">
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', height: "100%"}}
                        justifyContent="center">
                            <Box>
                                <Typography variant="subtitle1" sx={{mb: 3}}>Nice to meet you, my name is</Typography>
                                <Typography variant="heroName">Kincent Lan</Typography>
                                <Typography sx={{mt: 3, mb: 3}}>I'm a fullstack/backend developer.</Typography>
                                <Typography sx={{width: "70%", minWidth: "320px"}} variant="subtitle2">
                                    I am a software developer specializing in backend development.
                                    Currently, I am seeking employment opportunities.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'center', height: "90vh", backgroundColor: "#000000"}}>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
