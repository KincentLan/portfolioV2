import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import {TypeAnimation} from "react-type-animation";
import { BiCodeAlt } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

export default function Projects({bgColor}) {
    return (
        <Box sx={{ padding:"10vh", minWidth: "320px", backgroundColor: bgColor}}
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch">
            <Box sx={{ display: 'flex', alignItems: 'center', height: "90%"}}
                     justifyContent="center">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Item><Typography variant="h5" color="#A9A9A9"> <BiCodeAlt/> </Typography></Item>
                        <Item><Typography variant="h5"> Apps I've built </Typography></Item>
                    </Stack>

                        <br/>

            </Box>
        </Box>
    );
}