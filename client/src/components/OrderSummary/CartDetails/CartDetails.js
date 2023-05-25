import React, { useContext } from 'react'
import { UserContext } from '../../../Context/Context'
import { Box, Typography } from '@mui/material'
import CartItems from './CartItems/CartItems'

function CartDetails({ Shippingmethod }) {
    // const [shipping, setShipping] = useState(40)
    const { cartitems } = useContext(UserContext)


    return (
        <Box sx={{ p: '2rem', width: '32rem' }}>
            <CartItems {...cartitems} />
            <hr />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography sx={{ fontSize: '0.97rem', color: '#6e8195' }}>Subtotal</Typography>
                <Typography sx={{ fontSize: '0.97rem', fontWeight: '600' }}>₹{parseFloat(cartitems.bill).toFixed(2)}</Typography>
            </Box>
            {/* <hr /> */}
            {Shippingmethod && <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.97rem'
            }}>
                <Typography sx={{ fontSize: '0.97rem', color: '#6e8195' }}>Shipping</Typography>
                <Typography sx={{ fontSize: '0.97rem', fontWeight: '600' }}>₹{Shippingmethod.toFixed(2)}</Typography>
            </Box>}
            <hr />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography>Total</Typography>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500' }}>₹{parseFloat(cartitems.bill + 40).toFixed(2)}</Typography>
            </Box>
        </Box>
    )
}

export default CartDetails