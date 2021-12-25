import { Box } from '@mui/system';
import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ item, handleClicked, clicked }) => {
    const { title, desc, type } = item;
    return (
        <Box
            className={clicked === title ? 'service-card border-primary' : 'service-card'}
            onClick={() => handleClicked(title, type)}>
            <h3>{title} </h3>
            <p className="font-light"> {desc}</p>
        </Box>
    );
};


export default ServiceCard;