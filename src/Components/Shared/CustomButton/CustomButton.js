import { Box } from '@mui/system';
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ children, handleUx, ux }) => {
    return (
        <Box className={ux === children ? 'custom-button border-primary-thin' : 'custom-button'} onClick={() => handleUx(children)}>
            {children}
        </Box>
    );
};

export default CustomButton;