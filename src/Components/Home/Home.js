
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import PageSlider from '../Shared/PageSlider/PageSlider'
import './Home.css';
import { languagesData, servicesData, paymentData } from '../../fakeData/fakeData';
import CustomButton from '../Shared/CustomButton/CustomButton';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';

const Home = () => {
    const numberOfPage = 3;
    const priceOfUx = 2000;
    const priceOfPerPage = 1000;
    const [slideNumber, setSlideNumber] = useState(1);
    const [clicked, setClicked] = useState('');
    const [specificPackage, setSpecificPackage] = useState({});

    // these are for pages slider 
    const defaultPageNumber = 2;
    const [pageNumber, setPageNmber] = useState(defaultPageNumber);
    const onChange = (event, value) => {
        setPageNmber(value);
        const shalow = { ...specificPackage };
        shalow.pages = pageNumber;
        setSpecificPackage(shalow);
        console.log(specificPackage);

    };

    const handlePrevious = () => {
        if (slideNumber === 1) return;
        setSlideNumber(slideNumber - 1);
    }

    const handleNext = () => {
        if (slideNumber === numberOfPage) return;
        setSlideNumber(slideNumber + 1);
    }

    const handleClicked = (givenTitle, type) => {
        setClicked(givenTitle);
        if (type === 'language') {
            const { price } = languagesData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.language = price;
            setSpecificPackage(shalow);
        }
        if (type === 'service') {
            const { price } = servicesData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.service = price;
            setSpecificPackage(shalow);
        }
        if (type === 'payment') {
            const { price } = paymentData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.payment = price;
            setSpecificPackage(shalow);
        }

    }
    const handleUx = (response) => {
        if (response !== 'Yes') return;
        const shalow = { ...specificPackage };
        shalow.ux = priceOfUx;
        setSpecificPackage(shalow);
        // console.log(specificPackage);
    }
    console.log(specificPackage);
    return (
        <section>
            <HeaderComponent />
            <Container maxWidth='lg' className="main-section mb-50">
                <Grid container>
                    <Grid item md={7} className="main-left">
                        {
                            slideNumber === 1 && <h1 className="main-heading">
                                I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)
                            </h1>
                        }
                        {
                            slideNumber === 2 && <h1 className="main-heading">
                                I WANT TO BUILD
                            </h1>
                        }

                        <Box className="services-container">
                            <Box className="services">
                                {/* Content of first Slider  */}
                                {
                                    slideNumber === 1 && languagesData.map(language => <ServiceCard
                                        key={language.id}
                                        item={language}
                                        handleClicked={handleClicked}
                                        clicked={clicked}
                                    />)
                                }

                                {/* Content of second Slider  */}
                                {
                                    slideNumber === 2 && servicesData.map(service => <ServiceCard
                                        key={service.id}
                                        item={service}
                                        handleClicked={handleClicked}
                                        clicked={clicked}
                                    />)
                                }

                                {/* Content of third Slider  */}
                                {
                                    slideNumber === 3 && <>
                                        <h1 className="main-heading">
                                            DO YOU HAVE UX DESIGN READY?
                                        </h1>
                                        <Box className="button-container">
                                            <CustomButton handleUx={handleUx} >Yes</CustomButton>
                                            <CustomButton handleUx={handleUx}>No</CustomButton>
                                        </Box>

                                        <h1 className="main-heading mt-50">
                                            HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?
                                        </h1>
                                        <Box className="page-slider-container">
                                            <PageSlider
                                                onChange={onChange}
                                                pageNumber={pageNumber}
                                                defaultPageNumber={defaultPageNumber}
                                            />
                                        </Box>

                                        <h1 className="main-heading mt-50">
                                            ANY PAYMENT GATEWAY INTEGRATION?
                                        </h1>

                                        <Box className="button-container">
                                            {
                                                paymentData.map(payment => <PaymentButton
                                                    key={payment.id}
                                                    payment={payment}
                                                    handleClicked={handleClicked} />)
                                            }
                                        </Box>
                                    </>
                                }

                                {/* Service footer section starts */}
                                <Box className="sevices-footer">
                                    <span onClick={handlePrevious} className={slideNumber > 1 ? 'color-primary' : ''}>
                                        Previous
                                    </span>
                                    <Box className="progress">
                                        <Box className="bar" style={{ width: slideNumber === 1 ? '33%' : slideNumber === 2 ? '66%' : '100%' }}></Box>
                                    </Box>
                                    <span onClick={handleNext} className={slideNumber < numberOfPage ? 'color-primary' : ''}>
                                        Next
                                    </span>
                                </Box>
                                {/* Service footer section ends */}

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={5} className="main-right">
                        Bpx 2
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Home;