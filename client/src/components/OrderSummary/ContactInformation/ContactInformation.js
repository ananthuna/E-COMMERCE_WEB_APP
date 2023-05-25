import { Box, Checkbox, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShippingAddress from './ShippingAddress/ShippingAddress';

// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { baseUrl } from '../../../url';
// import { UserContext } from '../../../Context/Context';



function ContactInformation({ setAddress, address, email, setEmail, setPageNo, pageNo }) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    // const navigate = useNavigate()
    const [saveAddress, setSaveAddress] = useState(false)

    const handlechange = (e) => {
        setEmail(e.target.value)
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            pl: '5rem',
            pt: '2rem',
            gap: '1rem'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1
            }}>
                <Typography sx={{ fontSize: '1.2rem' }}>Contact information</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: '0.9rem' }}>Already have an account?</Typography>
                    <Typography
                        sx={{
                            fontSize: '0.9rem',
                            color: '#928d99',
                            ml: 0.7,
                            cursor: 'pointer'
                        }}>Log in</Typography>
                </Box>
            </Box>

            <Box>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email or Mobile phone number"
                    variant="outlined"
                    value={email}
                    error={email === ''}
                    helperText={email === '' ? "Enter email or phone number" : ''}
                    focused={email && true}
                    onChange={handlechange}
                    inputProps={{
                        style: {
                            height: "0.8rem",
                        },
                    }}
                    sx={{
                        "& .MuiFormLabel-root.Mui-error": {
                            color: "#928d99 !important"
                        },
                        '& label.Mui-focused': {
                            color: '#928d99',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#e6e6e6',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#e6e6e6',
                            },
                            '&:hover fieldset': {
                                borderColor: 'red',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#e6e6e6',
                            },
                        }
                    }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <Checkbox {...label} sx={{
                        color: "#e6e6e6",
                        '&.Mui-checked': {
                            color: "#999999",
                        }
                    }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>Email me with news and offers</Typography>
                </Box>
            </Box>

            <Box>
                {address.address !== '' && < ShippingAddress pageNo={pageNo} setPageNo={setPageNo} setAddress={setAddress} address={address} setSaveAddress={setSaveAddress} saveAddress={saveAddress} />}
            </Box>

        </Box>
    )
}

export default ContactInformation