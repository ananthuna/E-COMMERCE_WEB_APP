import { Box, Typography, MenuItem } from '@mui/material'
import React, { useContext } from 'react'
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './SmartWatch.css'
import { UserContext } from '../../../Context/Context';

function SmartWatch({ prop, type }) {

    const {
        watch,
        setSearch
    } = useContext(UserContext)


    const handleSelect = (item) => {
        if (item === 'Noise') return setSearch({ items: [...watch], title: item })
        if (item === 'boAt') return setSearch({ items: [...watch], title: item })
        if (item === 'Realme') return setSearch({ items: [...watch], title: item })
        if (item === 'Samsung') return setSearch({ items: [...watch], title: item })
        if (item === 'Apple') return setSearch({ items: [...watch], title: item })
        if (item === 'Honor') return setSearch({ items: [...watch], title: item })
        if (item === 'Redmi') return setSearch({ items: [...watch], title: item })
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
                    <WatchOutlinedIcon />
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
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/Revamp_Dec26th_18/smartwatches_under1500_750x375._CB458301681_.jpg'
                            alt='img' width={600} height={300}></img>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SmartWatch