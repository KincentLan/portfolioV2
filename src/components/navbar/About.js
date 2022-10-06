import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import {TypeAnimation} from "react-type-animation";
import JavaIcon from "../../assets/java.svg";
import PythonIcon from "../../assets/python.svg";
import JsIcon from "../../assets/javascript.svg";
import DjangoIcon from "../../assets/django-icon.svg";
import SpringIcon from "../../assets/spring-icon.svg";
import MySQLIcon from "../../assets/mysql-icon.svg";
import PostgresIcon from "../../assets/postgresql.svg";

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

export default function About({bgColor}) {
    return (
        <Grid sx={{ minHeight: "100vh", minWidth: "320px", backgroundColor: bgColor}}
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch">
            <Grid item xs={10}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: "100%"}}
                     justifyContent="center">
                    <Grid sx={{pt : 6, pb : 6}}>
                        <Typography variant="h5"> About Me </Typography>
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
                            </Typography>
                        </Box>
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
    );
}