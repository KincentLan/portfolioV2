import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";
import Portrait from "../../assets/kincent.jpg";

export default function Hero() {
    return (
        <Box sx={{padding: 0, height: "100vh", minWidth: "320px"}}
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch">
                <Box sx={{ display: 'flex', alignItems: 'center', height: "100%", width: "80%", margin: "auto"}}
                     justifyContent="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center"
                           justify="center">
                        <Stack direction="column" spacing={2} sx={{padding: "40px"}}>
                            <Typography variant="subtitle1">Nice to meet you, my name is</Typography>
                            <Typography variant="heroName">Kincent Lan</Typography>
                            <Typography>I'm a fullstack/backend developer.</Typography>
                            <Typography sx={{width: "70%", minWidth: "320px", height: "auto"}} variant="subtitle2">
                                I am a software developer specializing in backend development.
                                Currently, I am seeking employment opportunities.
                            </Typography>
                        </Stack>
                        <img src={Portrait} style={{maxWidth: "320px",
                            width:"300px",
                            height:"300px",
                            objectFit:"cover",
                            borderRadius:"50%"}}/>
                    </Stack>
                </Box>
        </Box>
    );
}