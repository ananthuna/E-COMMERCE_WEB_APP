import { Box, Typography } from '@mui/material'
import React from 'react'
import Products from '../../productsView/Products'


function BestSellers({ items }) {


    return (
        <Box sx={{
            mt: '5rem'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'Space-between',
                width: '30%',
            }}>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Best Sellers</b></Typography>
            </Box>
            <Box sx={{

            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default BestSellers