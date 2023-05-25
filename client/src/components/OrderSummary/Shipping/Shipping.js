import { Box, Button, Typography } from '@mui/material'
import React, {  useState } from 'react'
import ShippingMethod from './ShippingMethod/ShippingMethod';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../../Context/Context';
// import './style.css


function Shipping({ email, address, setPageNo, setShippingMethod, Shippingmethod }) {
    // const navigate = useNavigate()
    // const { user } = useContext(UserContext)
    const [error, setError] = useState(false)

    const handleContinue = () => {
        if (Shippingmethod) {
            setPageNo(2)
        } else {
            setError(true)
        }
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
                border: 1,
                borderColor: '#e6e6e6',
                borderRadius: 2,
                pl: 1.5,
                pr: 1.5
            }}>
                {email && <Box sx={{
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'centre',
                    justifyContent: 'space-between'

                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 4
                    }}>
                        <Typography sx={{ color: '#9ba3b6', fontSize: '0.9rem' }}>Contact</Typography>
                        <Typography sx={{ fontSize: '0.9rem', maxWidth: '23rem' }}>{email}</Typography>
                    </Box>
                    <Typography sx={{
                        color: '#9ba3b6',
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                    }}
                        onClick={() => setPageNo(0)}
                    >Change</Typography>
                </Box>}
                {address.address && <Box sx={{
                    borderTop: 1,
                    borderColor: '#e6e6e6',
                    display: 'flex',
                    alignItems: 'centre',
                    justifyContent: 'space-between',
                    p: 1.5
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 4
                    }}>
                        <Typography sx={{ color: '#9ba3b6', fontSize: '0.9rem' }}>Ship to</Typography>
                        <Typography sx={{ fontSize: '0.9rem', maxWidth: '23rem' }}>{address.address + ',' + address.landMark + ',' + address.city + ',' + address.state + ',' + address.ZipCode}</Typography>
                    </Box>
                    <Typography sx={{
                        color: '#9ba3b6',
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                    }}
                        onClick={() => setPageNo(0)}
                    >Change</Typography>
                </Box>}


            </Box>

            <Box>
                <ShippingMethod setShippingMethod={setShippingMethod} error={error} />
            </Box>
            <Box sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '4rem',
                mt: '2rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a6abb9',
                    cursor: 'pointer'
                }}
                    onClick={() => setPageNo(0)}
                >
                    <KeyboardArrowLeftIcon />
                    <Typography sx={{ fontSize: '0.9rem' }}>Return to information</Typography>
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
                    onClick={handleContinue}
                >Continue Shopping</Button>
            </Box>
        </Box>
    )
}

export default Shipping