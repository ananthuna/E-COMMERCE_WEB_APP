import { Box, Radio, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../Context/Context'

function Methods() {
    const { setMethod } = useContext(UserContext)
    const [paymentMethod, setPaymentMethod] = useState(false)

    useEffect(() => {
        if (paymentMethod) {
            setMethod('COD')
        } else {
            setMethod('')
        }
    }, [paymentMethod])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            <Typography>Payment</Typography>
            <Typography sx={{ fontSize: '0.9rem' }}>All transactions are secure and encrypted.</Typography>
            {/* <Alert sx={{ mt: '1rem', border: 1, borderColor: '#fcdddd' }} severity="warning">
                <Typography
                    sx={{
                        maxWidth: '32rem',
                        fontSize: '0.9rem',
                        color: '#6e8195'
                    }}
                >To place a test order, you’ll need to use a test payment gateway. Learn more about testing orders in development stores.</Typography>
            </Alert> */}
            <Box sx={{
                border: 1,
                borderColor: '#e6e6e6',
                borderRadius: 1,
                // p: 1,
                mt: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1
                }}>
                    <Typography sx={{
                        fontSize: '0.9rem',
                        fontWeight: '550'
                    }}>Credit Card / Debit Card / Net Banking / UPI</Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.4
                    }}>
                        <img width={45} height={30} src='data:image/png;base64,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' alt='img'></img>
                        <img width={40} height={25} src='data:image/png;base64,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' alt='img'></img>
                        <img width={38} height={24} src='data:image/png;base64,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' alt='img'></img>
                        <img width={38} height={30} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtKgTPvmesbVeeeBAdjkAp-dw9enamT8uFQ-hNlEsA2k1Mj6VrD8Ok4Ucb0b9xJ1w6n0&usqp=CAU' alt='img'></img>
                        <Typography sx={{
                            fontSize: '0.8rem',
                            color: '#9ba3b6'
                        }}>and more...</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: '100%',
                    height: '15rem',
                    borderTop: 1,
                    borderColor: '#e6e6e6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#fafafa'
                }}>
                    <Typography sx={{
                        maxWidth: '28rem',
                        fontSize: '0.9rem'
                    }}>After clicking “Complete order”, you will be redirected to Credit Card / Debit Card / Net Banking / UPI to complete your purchase securely.</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: 1,
                borderColor: '#e6e6e6',
                borderRadius: 2,
                pr: 2.5,
                pl: 1.5,
                mt: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Radio
                        checked={paymentMethod}
                        onClick={() => {
                            setPaymentMethod(!paymentMethod)
                        }}
                        // value=""
                        name="method-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            color: '#999999',
                            '&.Mui-checked': {
                                color: '#999999',
                            },
                        }}
                    />
                    <Typography>Cash on delivery</Typography>
                </Box>
                {/* <Typography>₹{shippingFee.toFixed(2)}</Typography> */}
            </Box>
        </Box>
    )
}

export default Methods