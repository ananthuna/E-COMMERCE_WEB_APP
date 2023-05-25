import { Box, Radio, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: '#a6abb9',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#e6e6e6',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#e6e6e6',
        },
        '&:hover fieldset': {
            borderColor: '#e6e6e6',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#e6e6e6',
        },
    }
}));

function BillingAddress({ setShippingMethod }) {

    const [billingAddress, setBillingAddress] = useState(false)
    const [billAddress, setBillAddress] = useState({
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        landMark: '',
        city: '',
        state: '',
        ZipCode: null,
    })

    const textField = {
        inputProps: {
            style: {
                height: "0.7rem",
                backgroundColor: 'white'
            },
        }
    }

    useEffect(() => {
        console.log(billAddress);
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: '4rem'
        }}>
            <Typography>Billing address</Typography>
            <Typography sx={{ fontSize: '0.9rem', mt: 0.5 }}>Select the address that matches your card or payment method.</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                border: 1,
                borderColor: '#e6e6e6',
                borderRadius: 1.5,
                // pr: 2.5,
                // pl: 1.5,
                mt: 3
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 0.3
                }}>
                    <Radio
                        checked={!billingAddress}
                        onClick={() => setBillingAddress(false)}
                        value=""
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            color: '#999999',
                            '&.Mui-checked': {
                                color: '#999999',
                            },
                        }}
                    />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: '550' }}>Same as shipping address</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: 1,
                    borderColor: '#e6e6e6',
                    p: 0.3
                    // justifyContent: 'flex-start'
                }}>
                    <Radio
                        checked={billingAddress}
                        onClick={() => setBillingAddress(true)}
                        value=""
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            color: '#999999',
                            '&.Mui-checked': {
                                color: '#999999',
                            },
                        }}
                    />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: '550' }}>Use a different billing address</Typography>
                </Box>
                {billingAddress &&
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        p: 2,
                        borderTop: 1,
                        borderColor: '#e6e6e6',
                        bgcolor: '#fafafa'

                    }}>
                        <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, country: e.target.value }))} fullWidth {...textField} id="outlined-basic" label="Country/region" variant="outlined" />
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            gap: 1.5
                        }}>
                            <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, firstName: e.target.value }))} sx={{ width: '50%' }} {...textField} id="outlined-basic" label="First name" variant="outlined" />
                            <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, lastName: e.target.value }))} sx={{ width: '50%' }} {...textField} id="outlined-basic" label="Last name" variant="outlined" />
                        </Box>
                        <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, address: e.target.value }))} fullWidth {...textField} id="outlined-basic" label="Address" variant="outlined" />
                        <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, landMark: e.target.value }))} fullWidth {...textField} id="outlined-basic" label="Land mark" variant="outlined" />
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            gap: 1.5
                        }}>
                            <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, city: e.target.value }))} {...textField} id="outlined-basic" label="City" variant="outlined" />
                            <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, state: e.target.value }))} {...textField} id="outlined-basic" label="State" variant="outlined" />
                            <StyledTextField onChange={(e) => setBillAddress(pre => ({ ...pre, ZipCode: e.target.value }))} {...textField} id="outlined-basic" label="ZIP code" variant="outlined" />
                        </Box>
                    </Box>}
            </Box>
        </Box>
    )
}

export default BillingAddress