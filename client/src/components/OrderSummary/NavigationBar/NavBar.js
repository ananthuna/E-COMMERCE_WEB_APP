import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {

    const { pageNo, setPageNo } = props
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            gap: 1,
            color: '#928d99',
            pl: '5rem',
            pt: '4rem'
        }}>
            <Typography
                sx={{ fontSize: 13, cursor: 'pointer' }}
                // color={pageNo === 0 && '#42414a'}
                onClick={() => navigate('/cart')}
            >Cart</Typography>

            <KeyboardArrowRightIcon sx={{ fontSize: 18, color: '#42414a' }} />
            <Typography
                sx={{ fontSize: 13, cursor: 'pointer' }}
                color={pageNo === 0 && '#42414a'}
                onClick={() => setPageNo(0)}
            >Information</Typography>

            <KeyboardArrowRightIcon sx={{ fontSize: 18, color: '#42414a' }} />
            <Typography
                sx={{ fontSize: 13, cursor: 'pointer' }}
                color={pageNo === 1 && '#42414a'}
                onClick={() => setPageNo(1)}
            >Shipping</Typography>

            <KeyboardArrowRightIcon sx={{ fontSize: 18, color: '#42414a' }} />
            <Typography
                sx={{ fontSize: 13, cursor: 'pointer' }}
                color={pageNo === 2 && '#42414a'}
                onClick={() => setPageNo(2)}
            >Payment</Typography>
        </Box >
    )
}

export default NavBar