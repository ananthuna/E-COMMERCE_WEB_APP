import { Box, Typography } from '@mui/material'
import React from 'react'
import Products from '../../productsView/Products'
import CountDown from './CountDown/CountDown'


function DealsOfDay({ items }) {


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
                }}><b>Deals of the day</b></Typography>
                <CountDown />
            </Box>
            <Box sx={{
                border: 2,
                borderColor: '#fdd700',
                pl: 1.5,
                pt: 1,
                pb: 7,
                m: 1,
                width: '99%'
            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default DealsOfDay