import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { baseUrl } from '../../../../url';
import { UserContext } from '../../../../Context/Context';
import { Box } from '@mui/material';

function RemoveButton({ item }) {
    const { setCartitems } = useContext(UserContext)

    const handleRemove = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.delete(`${baseUrl}/api/cart/cartitems/?itemId=${item.itemId}`, customConfig)
            .then((res) => {
                setCartitems(res.data)
            })

    }
    return (
        <Box>
            <DeleteIcon sx={{
                color: '#777777',
                fontSize: '1.2rem',
                "&:hover": { cursor: 'pointer' }
            }} onClick={handleRemove} />
        </Box>
    )
}

export default RemoveButton