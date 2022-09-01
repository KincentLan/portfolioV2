import * as React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    CssBaseline,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar, Paper,
    useMediaQuery
} from "@mui/material";
import {blue, amber, blueGrey, grey} from "@mui/material/colors";
import darkmodeBlue from "./color-palletes/darkmodeBlue";
import Box from "@mui/material/Box";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {TypeAnimation} from "react-type-animation";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import DjangoIcon from './assets/django-icon.svg';
import JavaIcon from './assets/java.svg';
import PythonIcon from './assets/python.svg';
import SpringIcon from './assets/spring-icon.svg';
import JsIcon from './assets/javascript.svg';
import MySQLIcon from './assets/mysql-icon.svg';
import PostgresIcon from './assets/postgresql.svg';

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

const itemData = [
    {
        img: JavaIcon,
        title: 'Java',
    },
    {
        img: PythonIcon,
        title: 'Python',
    },
    {
        img: JsIcon,
        title: 'JavaScript',
    },
    {
        img: DjangoIcon,
        title: 'Django',
    },
    {
        img: SpringIcon,
        title: 'Spring',
    },
    {
        img: MySQLIcon,
        title: 'MySQL',
    },
    {
        img: PostgresIcon,
        title: 'PostgresQL',
    },
];

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
                <Grid sx={{minHeight: "100vh", minWidth: "320px"}}
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

                <Grid sx={{minHeight: "100vh", minWidth: "320px", backgroundColor: bgColors.background1}}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="stretch">
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex', alignItems: 'center', height: "100%"}}
                             justifyContent="center">
                            <Grid sx={{pt : 6, pb : 6}}>
                                <Typography> About Me </Typography>
                                <Divider />
                                <br />

                                <Box width="100%" sx={{ display: 'flex', alignItems: "center"}} justifyContent="center">
                                    <Typography>
                                        <TypeAnimation
                                            sequence={['Hello! My name is Kincent Lan :)',
                                                800, '你好! 我的名字是林健成 :) ', 1500]}
                                            //  Replacing previous Text
                                            repeat={Infinity}
                                        />
                                    </Typography>                                </Box>

                                <br/>
                                <Typography variant="aboutParagraph">
                                    I enjoy building new applications for people to use! I started my CS career around 2015
                                    when I made my first rock, paper, and scissors game with Python. I was hooked.
                                    Since then, I've spent my free time attending hackathons or doing other projects.
                                    One thing led to another and now I'm studying CS at Northeastern University. Some of my
                                    courses include algorithms, machine learning, software engineering, and natural language processing.
                                    Outside of my studies, I recently have had the privilege of working at Ambri and VMware.
                                </Typography>

                                <br/>
                                <br/>

                                <Box width="100%" sx={{ display: 'flex', alignItems: "center"}} justifyContent="center">
                                    <Typography variant="aboutParagraph"> Here are some technologies that I am familiar with:</Typography>
                                </Box>

                                <br/>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 128,
                                            height: 128,
                                        },
                                    }}
                                    justifyContent="center"
                                >
                                    {itemData.map((item) => (
                                        <Box sx={{display: 'flex',  alignItems: 'center', backgroundColor: "#fff", borderRadius: 5}} justifyContent="center"> <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{height: "92%", borderRadius: 10}}
                                        /> </Box>
                                    ))}
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    );
}

export default App;
