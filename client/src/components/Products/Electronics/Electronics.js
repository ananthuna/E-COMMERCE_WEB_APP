import { Box, Typography } from '@mui/material'
import React from 'react'
import Products from '../../productsView/Products'


function Electronics({ items }) {


    return (
        <Box sx={{
            mt: '5rem'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'Space-between',
                width: '30%',
                gap: '2rem'
            }}>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Laptops</b></Typography>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Mobiles</b></Typography>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Speakers</b></Typography>
            </Box>
            <Box sx={{

            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default Electronics