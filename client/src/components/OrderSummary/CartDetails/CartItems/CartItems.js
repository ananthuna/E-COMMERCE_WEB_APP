import { Badge, Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { baseUrl } from '../../../../url'
import axios from 'axios'
import { UserContext } from '../../../../Context/Context'

function CartItems(props) {
    // const [cartitems, setCartitems] = useState()
    const { cartitems, setCartitems } = useContext(UserContext)

    useEffect(() => {
        // pageTopRef.current.scrollIntoView({ behavior: 'smooth' });
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        if (user.token) {
            axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
                .then((res) => {
                    // setCart(true)
                    setCartitems(res.data)

                })

        }

    }, [])
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            {cartitems.items && cartitems.items.map((item, i) =>
                < Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }} key={i}>
                    <Badge badgeContent={item.quantity} sx={{
                        color: 'white',
                        "& .MuiBadge-badge": {
                            backgroundColor: "#808080"
                        }
                    }}>
                        <Box sx={{
                            border: 1,
                            borderRadius: '0.5rem',
                            borderColor: '#c1c8d2'
                        }}>
                            <img src={baseUrl + '/' + item.url} alt='img' width={60} height={60}></img>
                        </Box>
                    </Badge>
                    <Box>
                        <Typography sx={{
                            width: '16rem',
                            whiteSpace: 'nowwrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: '0.97rem',
                            fontWeight: '600'
                        }}>{item.name}</Typography>
                        <Typography sx={{ color: '#9ba3b6', fontSize: '0.8rem' }}>S / White</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.97rem', fontWeight: '600' }}>₹{item.price.toFixed(2)}</Typography>
                </Box >)
            }
        </Box >
    )
}

export default CartItems