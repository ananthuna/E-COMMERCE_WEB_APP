import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

function ProductDetails({ item }) {

    return (
        <Box>
            <Box sx={{
                pt: '1rem',
                // pl: '0rem',
                width: '18rem',
                // bgcolor: 'red'
            }}>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontFamily: 'sans-serif',
                        maxWidth: '17rem',
                        color: '#2c3060'
                    }}><b>OnePlus 8T 5G-Aquamarine Green, 8GB RAM, 128GB Storage</b></Typography>
                <Typography sx={{ fontSize: '0.8rem', color: '#c0bfc2' }} >size: S</Typography>
                <Typography sx={{ fontSize: '0.8rem', color: '#c0bfc2' }} >Color: White</Typography>
            </Box>
        </Box>
    )
}

export default ProductDetails