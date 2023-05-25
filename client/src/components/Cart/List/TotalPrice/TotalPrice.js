import { Typography } from '@mui/material'
import React from 'react'

function TotalPrice({ item }) {
    return (
        <Typography sx={{ fontSize: '1rem', color: '#dc142e' }}><b>{'₹' + (item.quantity * item.price).toFixed(2)}</b></Typography>
    )
}

export default TotalPrice