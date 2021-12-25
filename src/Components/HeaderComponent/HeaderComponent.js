import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <Box className="header-container">
            <Container maxWidth='lg' className="header">
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
                <span>
                    WANT TO DISCUSS YOUR PROJECT IN DETAIL?
                    <span className="color-primary font-bold ml-5">
                        SCHEDULE A CALL HERE
                    </span>
                </span>
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
            </Container>
        </Box>
    );
};

export default HeaderComponent;