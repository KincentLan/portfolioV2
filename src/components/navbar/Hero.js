import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

export default function Hero() {
    return (
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
    );
}