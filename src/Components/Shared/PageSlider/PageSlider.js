import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import './PageSlider.css';

const PageSlider = () => {
    const defaultPageNumber = 2;
    const [pageNumber, setPageNmber] = useState(defaultPageNumber);
    const onChange = (event, value) => {
        setPageNmber(value);
    };
    console.log(pageNumber);
    return (
        <>
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
        </>
    );
}
export default PageSlider;