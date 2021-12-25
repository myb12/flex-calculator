import { Box } from '@mui/system';
import React from 'react';
import './PaymentButton.css';

const PaymentButton = ({ payment, handleClicked }) => {
    const { title, type } = payment;
    return (
        <Box className="custom-button" onClick={() => handleClicked(title, type)} >
            {title}
        </Box>
    );
};

export default PaymentButton;