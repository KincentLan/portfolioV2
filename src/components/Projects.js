import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { BiCodeAlt } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HackMIT from '../assets/HackMIT.png';
import Ivyhacks from '../assets/ivyhacks.png';
import Polidex from '../assets/polidex.png';
import Chakrathon from '../assets/Chakrathon.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const itemData = [
    {
        img: HackMIT,
        title: 'Avid',
        description: "An AI-based program that automatically adds background music to a video."
    },
    {
        img: Ivyhacks,
        title: 'SimpleProof',
        description: "An office-hours tool to facilitate communication between students and teaching assistants."
    },
    {
        img: Polidex,
        title: 'Polidex',
        description: "A political wiki to help citizens hold their congressional representatives accountable. "
    },
    {
        img: Chakrathon,
        title: 'Chakra UI Select',
        description: "A custom select component that offers hook support for customized functionality."
    },
]
const Item = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

export default function Projects() {
    return (
        <Box sx={{ minWidth: "320px", width: "80%", paddingTop: "5vh" }}
            name="projects"
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Box sx={{ display: 'flex', alignItems: 'center', height: "90%", width: "100%" }}
                justifyContent="center">
                <Stack direction="column" width="100%">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Item><Typography variant="h5" color="#A9A9A9"> <BiCodeAlt /> </Typography></Item>
                        <Item><Typography variant="h5"> Apps I've built </Typography></Item>
                    </Stack>
                    <Divider />
                    <Box sx={{ width: "100%", paddingTop: "5vh", paddingBottom: "5vh", minWidth: "320px" }}>
                        <Grid container spacing={3} columns={{ xs: 4, sm: 6, md: 12 }}>
                            {itemData.map(item =>
                                <Grid item xs={6}>
                                    <CardActionArea sx={{ margin: "auto", height: "100%", minWidth: "300px" }}>
                                        <Card sx={{ height: "100%", minWidth: "300px" }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={item.img}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="cardTitle" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="cardSubtitle" sx={{ height: "100%" }} color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}