
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import PageSlider from '../Shared/PageSlider/PageSlider'
import './Home.css';
import { languagesData, servicesData, paymentData } from '../../fakeData/fakeData';
import CustomButton from '../Shared/CustomButton/CustomButton';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';
import PriceCard from '../Shared/PriceCard/PriceCard';
import { addToDb, getStoredCart, removeFromDb, clearTheCart } from '../../utilities/fakeDB'

const Home = () => {
    const numberOfPage = 3;
    const priceOfUx = 2000;
    const priceOfPerPage = 1000;
    const defaultPageNumber = 2;
    const [slideNumber, setSlideNumber] = useState(1);
    const [serviceClicked, setServiceClicked] = useState('');
    const [languageClicked, setLanguageClicked] = useState('');
    const [specificPackage, setSpecificPackage] = useState({});
    const [UX, setUX] = useState('');
    const [cart, setCart] = useState({});
    const [change, setChange] = useState(false);
    const [paymentTitle, setPaymentTitle] = useState('');
    const pricingObject = getStoredCart();



    //----------these are for pages slider----------//
    const [pageNumber, setPageNmber] = useState(defaultPageNumber);

    const onChange = (event, value) => {
        setPageNmber(value);
        const shalow = { ...specificPackage };
        shalow.pages = priceOfPerPage * value;
        setSpecificPackage(shalow);
        addToDb('pages', priceOfPerPage * value);
        setChange(!change);
    };

    //----------Handler for slide navigation----------//
    const handlePrevious = () => {
        if (slideNumber === 1) return;
        setSlideNumber(slideNumber - 1);
    }

    const handleNext = () => {
        if (slideNumber === numberOfPage) return;
        setSlideNumber(slideNumber + 1);
    }

    //----------Handler for storing price of every item depending on the click----------//
    const handleClicked = (givenTitle, type) => {

        if (type === 'language') {
            const { price } = languagesData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.language = price;
            setSpecificPackage(shalow);
            setLanguageClicked(givenTitle);
            addToDb('language', price);
            setChange(!change);
        }
        if (type === 'service') {
            const { price } = servicesData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.service = price;
            setSpecificPackage(shalow);
            setServiceClicked(givenTitle);
            addToDb('service', price);
            setChange(!change);
        }
        if (type === 'payment') {
            const { price } = paymentData.find(each => each.title === givenTitle);
            const shalow = { ...specificPackage };
            shalow.payment = price;
            setSpecificPackage(shalow);
            setPaymentTitle(givenTitle);
            addToDb('payment', price);
            setChange(!change);
        }

    }
    //----------Handler for UX----------//
    const handleUx = (response) => {
        setUX(response);
        if (response === 'Yes') {
            const shalow = { ...specificPackage };
            shalow.ux = priceOfUx;
            setSpecificPackage(shalow);
            addToDb('ux', priceOfUx);
            setChange(!change);
        } else {
            const shalow = { ...specificPackage };
            delete shalow.ux;
            setSpecificPackage(shalow);
            removeFromDb('ux');
            setChange(!change);
        }
    }
    useEffect(() => {
        setCart(pricingObject);
    }, [change, pricingObject])

    //----------calculating the total cost----------//

    let totalCost = Object.values(cart).reduce((acc, cur) => acc + cur, 0);
    return (
        <section className="home-section">
            <h1 className="top-heading">CALCULATE YOUR PRICE</h1>
            <Box className="home">
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
                                            clicked={languageClicked}
                                        />)
                                    }
                                    {/* Content of second Slider  */}
                                    {
                                        slideNumber === 2 && servicesData.map(service => <ServiceCard
                                            key={service.id}
                                            item={service}
                                            handleClicked={handleClicked}
                                            clicked={serviceClicked}
                                        />)
                                    }
                                    {/* Content of third Slider  */}
                                    {
                                        slideNumber === 3 && <>
                                            <h1 className="main-heading">
                                                DO YOU HAVE UX DESIGN READY?
                                            </h1>
                                            <Box className="button-container">
                                                <CustomButton handleUx={handleUx} ux={UX}>Yes</CustomButton>
                                                <CustomButton handleUx={handleUx} ux={UX}>No</CustomButton>
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
                                                        paymentTitle={paymentTitle}
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
                            {
                                slideNumber === 3 ? <>
                                    <PriceCard totalCost={totalCost} />
                                    <button className="start-button" onClick={clearTheCart}>START YOUR PROJECT NOW</button>
                                </> : <span>PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</span>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    );
};

export default Home;