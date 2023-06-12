import { Box, Typography, MenuItem } from '@mui/material'
import React, { useContext } from 'react'
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './LaptopMenu.css'
import { UserContext } from '../../../Context/Context';

function LaptopMenu({ prop, type }) {

    const {
        laptop,
        setSearch
    } = useContext(UserContext)


    const handleSelect = (item) => {
        if (item === 'Dell laptops') return setSearch({ items: [...laptop], title: item })
        if (item === 'hp laptops') return setSearch({ items: [...laptop], title: item })
        if (item === 'lenova laptops') return setSearch({ items: [...laptop], title: item })
        if (item === 'thin & light laptops') return setSearch({ items: [...laptop], title: item })
        if (item === '2-in-1 laptops') return setSearch({ items: [...laptop], title: item })
        if (item === 'Gaming laptops') return setSearch({ items: [...laptop], title: item })
        if (item === 'Budget laptops') return setSearch({ items: [...laptop], title: item })
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
                    <LaptopMacOutlinedIcon />
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
                    <Box>
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
                        <img src='https://images.creatopy.com/public/templates/gallery/img/btuj0jjhb/Blue-Laptop-Flash-Sales-.jpg'
                            alt='img' width={300} height={300}></img>
                        <img src='https://img.freepik.com/premium-psd/limited-offer-12-12-sale-social-media-post-template_122059-1021.jpg'
                            alt='img' width={300} height={300}></img>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LaptopMenu