import { Box, Typography, MenuItem } from '@mui/material'
import React, { useContext } from 'react'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './HeadphoneMenu.css'
import { UserContext } from '../../../Context/Context';

function HeadphoneMenu({ prop, type }) {

    const {
        headset,
        setSearch
    } = useContext(UserContext)

   
    const handleSelect = (item) => {
        if (item === 'boat') return setSearch({ items: [...headset], title: item })
        if (item === 'sony') return setSearch({ items: [...headset], title: item })
        if (item === 'samsung') return setSearch({ items: [...headset], title: item })
        if (item === 'jabra') return setSearch({ items: [...headset], title: item })
        if (item === 'Audio Technica') return setSearch({ items: [...headset], title: item })
        if (item === 'Generic') return setSearch({ items: [...headset], title: item })
        if (item === 'Panasonic') return setSearch({ items: [...headset], title: item })
        if (item === 'Apple') return setSearch({ items: [...headset], title: item })
    }

    return (
        <Box sx={{
            position: 'relative'
        }}
            className='dropdown dropdown-6'
        >
            <Box sx={{
                display: 'flex',
                gap: 1,
                height: '3rem'
            }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.7,
                        cursor: 'pointer'
                    }}>
                    <HeadphonesOutlinedIcon />
                    <Typography sx={{ fontSize: '0.9rem' }}><b>{type}</b></Typography>
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '1rem' }} />
                </Box>
            </Box>
            <Box
                className='dropdown_menu dropdown_menu--animated dropdown_menu-6'
                sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    borderTop: 4,
                    borderColor: '#fdd700',
                    p: 2
                }}
            >
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{ width: '10rem' }}>
                        <Typography><b>Popular Categories</b></Typography>
                        <hr />
                        {prop && prop.map((item, index) =>
                            <MenuItem key={index} >
                                <Typography sx={{ fontSize: '0.9rem' }} textAlign="center" onClick={() => handleSelect(item)}>{item}</Typography>
                            </MenuItem>
                        )}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 1.5,
                        pl: 1.5
                    }}>
                        <img src='https://coreldrawdesign.com/resources/previews/preview-headphone-music-banner-template-design-free-vector-design-1636812612.jpg'
                            alt='img' width={300} height={300}></img>
                        <img src='https://cdn4.vectorstock.com/i/1000x1000/17/58/banner-design-of-gaming-headphones-vector-44891758.jpg'
                            alt='img' width={300} height={300}></img>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeadphoneMenu