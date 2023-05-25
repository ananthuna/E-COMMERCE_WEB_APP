import { Typography } from '@mui/material'
import React from 'react'

function productPrice({ item }) {
    return (
        <Typography sx={{ fontSize: '1rem', color: '#dc142e' }} ><b>{'₹' + item.price.toFixed(2)}</b></Typography>
    )
}

export default productPrice