
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import './Home.css';

const Home = () => {
    const numberOfPage = 3;
    const [slideNumber, setSlideNumber] = useState(1);

    const handlePrevious = () => {
        if (slideNumber === 1) return;
        setSlideNumber(slideNumber - 1);
    }
    const handleNext = () => {
        if (slideNumber === numberOfPage) return;
        setSlideNumber(slideNumber + 1);
    }
    console.log(slideNumber);
    return (
        <section>
            <HeaderComponent />

            <Container maxWidth='lg' className="main-section">
                <Grid container>
                    <Grid md={7} className="main-left">
                        <h1 className="main-heading">
                            I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)
                        </h1>
                        <Box className="services-container">
                            <Box className="services">
                                <ServiceCard />
                                <ServiceCard />
                                <ServiceCard />
                                <ServiceCard />
                                <ServiceCard />

                                {/* Service footer section starts */}
                                <Box className="sevices-footer">
                                    <span onClick={handlePrevious} className={slideNumber > 1 && 'color-primary'}>
                                        Previous
                                    </span>
                                    <Box className="progress">
                                        <Box className="bar" style={{ width: slideNumber === 1 ? '33%' : slideNumber === 2 ? '66%' : '100%' }}></Box>
                                    </Box>
                                    <span onClick={handleNext} className={slideNumber < numberOfPage && 'color-primary'}>
                                        Next
                                    </span>
                                </Box>
                                {/* Service footer section ends */}

                            </Box>
                        </Box>
                    </Grid>
                    <Grid md={5} className="main-right">
                        Bpx 2
                    </Grid>
                </Grid>
            </Container>
            <Box style={{ marginTop: 200 }}>
            </Box>
        </section>
    );
};

export default Home;