import { Box, Typography, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './RegionSelect.css'

function RegionSelect({ prop }) {
    
    const [select, setSelect] = useState(prop[0])

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
                        cursor: 'pointer',
                    }}>
                    <Typography sx={{
                        fontSize: '0.9rem',
                        width: '3rem',
                        borderLeft: 1,
                        borderColor: '#8386a7',
                        pl: 1
                    }}>{select.name}</Typography>
                    <img src={select.url}
                        alt='img' width={25} height={15}></img>
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '1rem', color: '#8386a7', ml: 1 }} />
                </Box>
            </Box>
            <Box
                className='dropdown_menu dropdown_menu--animated dropdown_menu-6'
                sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    borderTop: 4,
                    borderColor: '#fdd700',
                    p: 0.5
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <Box >
                        {prop && prop.map((item, index) =>
                            item.name !== select.name && <MenuItem key={index} onClick={() => setSelect(item)}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5
                                }}>
                                    <Typography sx={{ fontSize: '0.9rem' }} textAlign="center">{item.name}</Typography>
                                    <img src={item.url}
                                        alt='img' width={25} height={15}></img>
                                </Box>
                            </MenuItem>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default RegionSelect