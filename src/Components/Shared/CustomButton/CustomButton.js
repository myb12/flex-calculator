import { Box } from '@mui/system';
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ children, handleUx }) => {
    return (
        <Box className="custom-button" onClick={() => handleUx(children)}>
            {children}
        </Box>
    );
};

export default CustomButton;