import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, IconButton } from '@mui/material';
import './WishList.css'

function WishList() {
    return (
        <Box sx={{
            borderLeft: 1,
            borderColor: '#8386a7',
            pl: 1,
            height: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <IconButton className='iconButton' sx={{
                '&:hover': {
                    backgroundColor: "white"
                }
            }}>
                <FavoriteBorderOutlinedIcon className='cartIcon' />
            </IconButton>
        </Box>
    )
}

export default WishList