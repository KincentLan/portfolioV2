import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    return (
        <Box
            sx={{ minHeight: "50vh" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            name="contact"
        >
            <Stack direction="column" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">Contact me!</Typography>
                <Typography variant="aboutParagraph" align="center">I'm very excited to meet you and explore new
                    opportunities with you. Please, let's connect!</Typography>
                <br />
                <Button sx={{ textTransform: "none", margin: "2%" }}
                    variant="contained" size="small" endIcon={<SendIcon />}>Greet me!</Button>
            </Stack>

        </Box>
    );
}