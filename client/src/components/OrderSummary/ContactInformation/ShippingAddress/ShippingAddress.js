import { styled } from '@mui/material/styles';
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios';
import { baseUrl } from '../../../../url';



function ShippingAddress({ setPageNo, pageNo, setAddress, address, setSaveAddress, saveAddress }) {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const textField = {
        inputProps: {
            style: {
                height: "0.7rem",
            },
        }
    }

    const StyledTextField = styled(TextField)(({ theme }) => ({

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
                borderColor: '#e6e6e6',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#e6e6e6',
            },
        }
    }));



    const handleAddress = (data) => {


        let user = localStorage.getItem("user")
        user = JSON.parse(user)

        if (user.token && data.address && saveAddress) {
            console.log('add address');
            const Data = JSON.stringify(data)
            const customConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            }
            axios.post(`${baseUrl}/api/user/address`, Data, customConfig)
                .then((res) => {
                    console.log(res.data);
                })
        }
        setPageNo(1)

    }



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography sx={{ fontSize: '1.2rem' }}>Shipping Address</Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(handleAddress)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5
                }}>
                <StyledTextField
                    key={'country'}
                    defaultValue={address.country}
                    fullWidth
                    // autoFocus
                    {...textField}
                    id="outlined-basic-country"
                    label="Country/region"
                    // focused={address.country !== '' && true}
                    variant="outlined"
                    error={errors.country}
                    helperText={errors.country ? 'Enter a country' : ''}
                    {...register('country', { required: true })}
                />
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 1.5
                }}>
                    <StyledTextField
                        key={'fname'}
                        defaultValue={address.firstName}
                        // autoFocus
                        // value={address.firstName}
                        // onChange={(e) => setAddress(pre => ({ ...pre, firstName: e.target.value }))}
                        sx={{ width: '50%' }}
                        {...textField}
                        id="outlined-basic-fname"
                        label="First name"
                        variant="outlined"
                        {...register('firstName', { required: true })}
                    />
                    <StyledTextField
                        key={'lname'}
                        defaultValue={address.lastName}
                        // autoFocus
                        // value={address.lastName}
                        // onChange={(e) => setAddress(pre => ({ ...pre, lastName: e.target.value }))}
                        sx={{ width: '50%' }}
                        {...textField}
                        id="outlined-basic-lname"
                        label="Last name"
                        variant="outlined"
                        {...register('lastName', { required: true })}
                    />
                </Box>
                <StyledTextField
                    key={'address'}
                    defaultValue={address.address}
                    // value={address.address}
                    // onChange={(e) => setAddress(pre => ({ ...pre, address: e.target.value }))}
                    fullWidth
                    // autoFocus
                    {...textField}
                    id="outlined-basic-address"
                    label="Address"
                    variant="outlined"
                    error={errors.address}
                    helperText={errors.address ? 'Enter an address' : ''}
                    {...register('address', { required: true })}
                />
                <StyledTextField
                    key={'landmark'}
                    defaultValue={address.landMark}
                    // value={address.landMark}
                    // onChange={(e) => setAddress(pre => ({ ...pre, landMark: e.target.value }))}
                    fullWidth
                    {...textField}
                    id="outlined-basic-landMark"
                    label="Land mark"
                    variant="outlined"
                    // autoFocus
                    error={errors.landMark}
                    helperText={errors.landMark && 'add a landmark'}
                    {...register('landMark', { required: true })}
                />
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 1.5
                }}>
                    <StyledTextField
                        key={'city'}
                        defaultValue={address.city}
                        // value={address.city}
                        // onChange={(e) => setAddress(pre => ({ ...pre, city: e.target.value }))}
                        {...textField}
                        // autoFocus
                        id="outlined-basic-city"
                        label="City"
                        variant="outlined"
                        error={errors.city}
                        helperText={errors.city ? 'Enter a city' : ''}
                        {...register('city', { required: true })}
                    />
                    <StyledTextField
                        key={'state'}
                        defaultValue={address.state}
                        // value={address.state}
                        // onChange={(e) => setAddress(pre => ({ ...pre, state: e.target.value }))}
                        {...textField}
                        // autoFocus
                        id="outlined-basic-state"
                        label="State"
                        variant="outlined"
                        error={errors.state}
                        helperText={errors.state ? 'Enter a state' : ''}
                        {...register('state', { required: true })}
                    />
                    <StyledTextField
                        key={'ZipCode'}
                        defaultValue={address.ZipCode}
                        // focused={address.ZipCode && true}
                        // value={address.ZipCode}
                        // onChange={(e) => setAddress(pre => ({ ...pre, ZipCode: e.target.value }))}
                        {...textField}
                        // autoFocus
                        id="outlined-basic-ZipCode"
                        label="ZIP code"
                        variant="outlined"
                        error={errors.ZipCode}
                        helperText={errors.ZipCode ? 'Enter a ZipCode' : ''}
                        {...register('ZipCode', { required: true })}
                    />
                </Box>
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
                    }}
                        // checked={saveAddress}
                        onChange={() => setSaveAddress(!saveAddress)}
                    />
                    <Typography sx={{ fontSize: '0.9rem' }}>Save this information for next time</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: '4rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a6abb9',
                        cursor: 'pointer'
                    }}
                        onClick={() => navigate('/cart')}
                    >
                        <KeyboardArrowLeftIcon />
                        <Typography sx={{ fontSize: '0.9rem' }}>Return to cart</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#2c4462',
                            color: 'white',
                            '&:hover': {
                                bgcolor: '#2c4462'
                            },
                            textTransform: 'unset',
                            fontWeight: '700',
                            width: '12rem',
                            height: '3.5rem'
                        }}
                        onClick={handleAddress}
                        type="submit"
                    >Continue Shopping</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default ShippingAddress