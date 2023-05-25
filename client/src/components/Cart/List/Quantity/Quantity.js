import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UserContext } from '../../../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../../../url'

function Quantity({ item }) {
    const [numb, setNumb] = useState('')
    const [quant, setQuant] = useState(0)
    const { setCartitems } = useContext(UserContext)

    useEffect(() => {
        // console.log('hai');
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const data = {
            quantity: numb
        }
        console.log('patch start');
        axios.patch(`${baseUrl}/api/cart/cartitems/${item.itemId}`, data, customConfig)
            .then((res) => {
                setCartitems(res.data)
                console.log('patch-end');
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [quant])
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // mt: '1rem',
            border: 1,
            borderColor: '#ededed',
            width: '6rem',
            height: '2.5rem'
        }}>

            <Box sx={{
                borderRight: 1,
                borderColor: '#ededed',
                height: '2.5rem',
                bgcolor: '#efefef',
                pt: 0.8,
                "&:hover": { cursor: 'pointer' }
            }} onClick={() => {
                setNumb('+')
                setQuant(pre => pre + 1)
            }}>
                <AddIcon sx={{ color: '#9899b4' }} />
            </Box>

            <Box sx={{
                width: '2rem'
            }}>
                <Typography align='center' sx={{ color: '#9899b4' }} >{item.quantity}</Typography>
            </Box>

            <Box sx={{
                borderLeft: 1,
                borderColor: '#ededed',
                bgcolor: '#efefef',
                height: '2.5rem',
                pt: 0.8,
                "&:hover": { cursor: 'pointer' }
            }} onClick={() => {
                setNumb('-')
                setQuant(pre => pre - 1)
            }}>
                {numb === 1 ? (
                    <RemoveIcon sx={{ color: '#9899b4' }} />
                ) : (
                    <RemoveIcon
                        sx={{ color: '#9899b4' }}
                        onClick={() => {
                            setNumb('-')
                            setQuant(pre => pre - 1)
                        }} />
                )}
            </Box>

        </Box>
    )
}

export default Quantity