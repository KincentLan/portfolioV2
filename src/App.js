import * as React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline, useMediaQuery} from "@mui/material";
import {amber, grey} from "@mui/material/colors";
import darkmodeBlue from "./color-palletes/darkmodeBlue";
import Box from "@mui/material/Box";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Hero from "./components/navbar/Hero";
import About from "./components/navbar/About";

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

        aboutParagraph : {
            fontSize : 25
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
                divider: darkmodeBlue[200],
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

const DARK_BGS = {
    background1 : "#4e4a8b",
    background2 : "#007d57",
    background3 : "#0079ae"
}

const LIGHT_BGS = {
    background1 : "#a58e65",
    background2 : "#fff8ee",
    background3 : "#ffc1b2"
}

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

    const bgColors = React.useMemo(() => {
        if (prefersDarkMode) return DARK_BGS;
        return LIGHT_BGS;
    }, [prefersDarkMode]);

    const theme = React.useMemo(
        () => createTheme(getTheme(prefersDarkMode)), [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box>
                <Navbar toggleDrawer={handleDrawerToggle} navItems={NAV_ITEMS}  />
                <MobileNavbar toggleDrawer={handleDrawerToggle} mobileOpen={mobileOpen} navItems={NAV_ITEMS}/>
                <Hero/>
                <About bgColor={bgColors.background1}/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
