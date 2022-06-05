import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Page1() {

    return (
    <React.Fragment>
        <Container 
        disableGutters    
        component="main"
        sx={{ pt: 8, pb: 6}}>
            <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                <Typography 
                variant="h1">
                    Page 3
                </Typography>
            </Grid>   
        </Container>
    </React.Fragment>
    );
}