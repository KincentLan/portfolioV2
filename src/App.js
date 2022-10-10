import * as React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, useMediaQuery } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import darkmodeBlue from "./color-palletes/darkmodeBlue";
import Box from "@mui/material/Box";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from './components/Work';
import Contact from './components/Contact';


const NAV_ITEMS = [
    { name: 'Experience', to: "work" },
    { name: 'Projects', to: "projects" },
    { name: 'Contact', to: "contact" }];

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

        cardTitle: {
            fontSize: 30,
        },
        cardSubtitle: {
            fontSize: 25,
        },

        logo: {
            fontFamily: "Silkscreen",
            fontSize: 20,
        },

        navbar: {
            fontSize: 18
        },

        aboutParagraph: {
            fontSize: 25
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
        () => createTheme(getTheme(prefersDarkMode)), [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Navbar toggleDrawer={handleDrawerToggle} navItems={NAV_ITEMS} />
                <MobileNavbar toggleDrawer={handleDrawerToggle} mobileOpen={mobileOpen} navItems={NAV_ITEMS} />
                <Stack direction="column" justifyContent="space-between" alignItems="center">
                    <Hero />
                    <Work prefersDarkMode={prefersDarkMode} />
                    <Projects />
                    <Contact />
                </Stack>
            </Box>
        </ThemeProvider>
    );
}

export default App;
