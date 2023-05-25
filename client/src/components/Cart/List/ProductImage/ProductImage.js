import { Box } from '@mui/material'
import React from 'react'
import { baseUrl } from '../../../../url'

function ProductImage({ item }) {
    return (
        <Box sx={{
            mt: '0.5rem',
            mb: '0.5rem',
            ml: '1rem',
            border: 1,
            borderColor: '#ededed',
        }}>
            <img src={baseUrl + '/' + item.url} alt='img' width={110} height={130}></img>
        </Box>
    )
}

export default ProductImage