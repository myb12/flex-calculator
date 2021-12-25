import { Box } from '@mui/system';
import React from 'react';

const PaymentButton = ({ payment, handleClicked, paymentTitle }) => {
    const { title, type } = payment;
    return (
        <Box className={paymentTitle === title ? 'custom-button border-primary-thin' : 'custom-button'} onClick={() => handleClicked(title, type)} >
            {title}
        </Box>
    );
};

export default PaymentButton;