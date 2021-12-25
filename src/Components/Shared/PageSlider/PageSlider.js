import React from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import './PageSlider.css';

const PageSlider = ({ pageNumber, onChange, defaultPageNumber }) => {

    return (
        <Box>
            <span>{pageNumber} Pages</span>
            <Box width={300}>
                <Slider
                    onChange={onChange}
                    defaultValue={defaultPageNumber}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={1}
                    max={20} />
            </Box>
        </Box>
    );
}
export default PageSlider;