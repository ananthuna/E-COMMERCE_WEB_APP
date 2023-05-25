import { Box } from '@mui/material'
import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import LaptopMenu from './LaptopMenu/LaptopMenu'
import HeadphoneMenu from './HeadphoneMenu/HeadphoneMenu'
import SmartWatch from './SmartWatch/SmartWatch'

const home = [
    'Home',
    'Best Offers',
    'up-coming offers',
    'new products',
    'best sell',
    'Mobiles',
    'laptops',
    'smart watches'
]
const laptop = [
    'Dell laptops',
    'hp laptops',
    'lenova laptops',
    'thin & light laptops',
    '2-in-1 laptops',
    'Gaming laptops',
    'Budget laptops'
]

const headphones = [
    'boat',
    'sony',
    'samsung',
    'jabra',
    'Audio Technica',
    'Generic',
    'Panasonic',
    'Apple',
]

const watches = [
    'Noise',
    'boAt',
    'Realme',
    'Samsung',
    'Apple',
    'Honor',
    'Redmi',
]
function SubHeader() {

    return (
        <Box sx={{
            width: '100%',
            mt: 11.3,
            position: 'fixed',
            zIndex: '1000',
            bgcolor: 'white'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '3rem',
                gap: 4,
                ml: '6rem'
            }}>
                <HomeMenu prop={home} type={'Home'} />
                <LaptopMenu prop={laptop} type={'Laptops'} />
                <HeadphoneMenu prop={headphones} type={'headphones'} />
                <SmartWatch prop={watches} type={'Smart watches'} />
            </Box>
        </Box>
    )
}

export default SubHeader