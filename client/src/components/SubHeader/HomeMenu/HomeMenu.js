import { Box, Typography, MenuItem } from '@mui/material'
import React, { useContext } from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './HomeMenu.css'
import { UserContext } from '../../../Context/Context';

function HomeMenu({ prop, type }) {
    const {
        watch,
        laptop,
        mobile,
        speaker,
        setSearch
    } = useContext(UserContext)

    const handleSelect = (item) => {
        if (item === 'Home') return setSearch({ items: [], title: '' })
        if (item === 'Best Offers') return setSearch({ items: [...watch], title: 'Best Offers' })
        if (item === 'up-coming offers') return setSearch({ items: [...laptop], title: 'up=coming offers' })
        if (item === 'new products') return setSearch({ items: [...mobile], title: 'new products' })
        if (item === 'best sell') return setSearch({ items: [...speaker], title: 'best sell' })
        if (item === 'Mobiles') return setSearch({ items: [...mobile], title: 'Mobiles' })
        if (item === 'laptops') return setSearch({ items: [...laptop], title: 'laptops' })
        if (item === 'Smart watches') return setSearch({ items: [...watch], title: 'Smart watches' })
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
                    <BusinessCenterOutlinedIcon />
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
                <Box sx={{ display: 'flex' }}>
                    <Box >
                        {prop && prop.map((item, index) =>
                            <MenuItem key={index} >
                                <Typography sx={{ fontSize: '0.9rem' }} textAlign="center" onClick={() => handleSelect(item)}>{item}</Typography>
                            </MenuItem>
                        )}
                    </Box>
                    <Box>
                        <img src='https://blogger.googleusercontent.com/img/a/AVvXsEjL_s7VK0Sm92PIMUxFDcYJpUhB03PtWsgWhC_sUA3Tr95uR7P-NfoodUw6iI60npqGsUHugWxHu6wUKpZAaHH7H13gzAaJ3KXVMhHbUk5tNifGZBVqJ5SzKil6LvBqNxgzutR3URe_lXqiWk0xAPaUwacOCH68-eSsdp8GT-HoV6DKhXodpZS6uET-Pw=s16000'
                            alt='img' width={600} height={300}></img>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeMenu