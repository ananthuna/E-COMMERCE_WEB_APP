import { Box, Typography, MenuItem } from '@mui/material'
import React from 'react'
// import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './SmartWatch.css'

function SmartWatch({ prop, type }) {
    // const [open, setOpen] = useState(false)


    return (
        <Box sx={{
            position: 'relative'
        }}
            className='dropdown dropdown-6'
        >
            <Box sx={{
                display: 'flex',
                gap: 1
            }}
            >
                <Box

                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.7
                    }}>
                    <Typography>{type}</Typography>
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '1rem' }} />
                </Box>
            </Box>
            <Box
                className='dropdown_menu dropdown_menu--animated dropdown_menu-6'
                sx={{
                    bgcolor: 'white',
                    mt: 1.3,
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
                                <Typography sx={{ fontSize: '0.9rem' }} textAlign="center">{item}</Typography>
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
                        {/* <img src='https://img.freepik.com/premium-psd/limited-offer-12-12-sale-social-media-post-template_122059-1021.jpg'
                            alt='img' width={300} height={300}></img> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SmartWatch