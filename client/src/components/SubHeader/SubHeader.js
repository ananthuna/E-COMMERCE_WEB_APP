import { Box } from '@mui/material'
import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import LaptopMenu from './LaptopMenu/LaptopMenu'
import HeadphoneMenu from './HeadphoneMenu/HeadphoneMenu'
import SmartWatch from './SmartWatch/SmartWatch'
import Language from './Language/Language'
import RegionSelect from './RegionSelect/RegionSelect'
import WishList from './WishList/WishList'

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

const language = [
    'English',
    'Hindi',
    'Tamil',
    'Arabic'
]

const region = [
    {
        name: 'IND',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'
    },
    {
        name: 'USA',
        url: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'
    }, {
        name: 'EUR',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1024px-Flag_of_Europe.svg.png'
    }, {
        name: 'UAE',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png'
    }, {
        name: 'AUD',
        url: 'data:image/png;base64,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'
    }
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
                justifyContent: 'space-between',
                height: '3rem',
                gap: 4,
                ml: '6rem',
                mr: '2rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3
                }}>
                    <HomeMenu prop={home} type={'Home'} />
                    <LaptopMenu prop={laptop} type={'Laptops'} />
                    <HeadphoneMenu prop={headphones} type={'Headphones'} />
                    <SmartWatch prop={watches} type={'Smart watches'} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Language prop={language} />
                    <RegionSelect prop={region} />
                    <WishList />
                </Box>
            </Box>
        </Box>
    )
}

export default SubHeader