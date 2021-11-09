import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, earum. Alias asperiores suscipit non iure facilis quae molestiae, earum et!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;