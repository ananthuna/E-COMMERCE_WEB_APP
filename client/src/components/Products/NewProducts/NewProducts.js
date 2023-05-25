import { Box, Typography } from '@mui/material'
import React from 'react'
import Products from '../../productsView/Products'


function NewProducts({ items }) {


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
                }}><b>New Products</b></Typography>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Top Featured</b></Typography>
            </Box>
            <Box sx={{

            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default NewProducts