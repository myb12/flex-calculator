import { Box } from '@mui/system';
import React from 'react';
import './PriceCard.css';

const PriceCard = ({ totalCost }) => {
    //----------Converting the total cost into USD currency----------//
    const totalInUSD = (totalCost).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    const totalInUSDExtra = (totalCost + 500).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return (
        <Box className="price-card">
            <p className="font-light color-primary">Est Cost</p>
            <h1 className="main-heading">
                {
                    totalCost ? `${totalInUSD} - ${totalInUSDExtra}` : '$00.00'
                }
            </h1>
            <p className="font-light">
                This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2 - 3 milestone payments."
            </p>
        </Box>
    );
};

export default PriceCard;