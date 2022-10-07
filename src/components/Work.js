import * as React from 'react';
import {Grid} from "@mui/material";


export default function Work({bgColor}) {
    return (
        <Grid sx={{minHeight: "100vh", minWidth: "320px", backgroundColor: bgColor}}
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch">
            <Grid item xs={10}>
            </Grid>
        </Grid>
    );
}