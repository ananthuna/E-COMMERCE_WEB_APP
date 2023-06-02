import { Box, Typography, MenuItem } from '@mui/material'
import React, { useState } from 'react'
// import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './Language.css'

function Language({ prop }) {
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
                        gap: 0.2,
                        cursor: 'pointer',

                    }}>
                    <Typography sx={{
                        fontSize: '0.9rem',
                        color: '#8386a7',
                        width: '3rem',
                        borderLeft: 1,
                        pl: 1
                    }}>{select}</Typography>
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
                            item !== select && <MenuItem key={index} onClick={() => setSelect(item)}>
                                <Typography sx={{ fontSize: '0.9rem' }} textAlign="center">{item}</Typography>
                            </MenuItem>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Language