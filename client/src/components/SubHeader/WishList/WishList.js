import React, { useContext } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge, Box, IconButton } from '@mui/material';
import './WishList.css'
import { UserContext } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';

function WishList() {
    const { setValue, wishlist } = useContext(UserContext)
    const navigate = useNavigate()

    const handleWishlist = () => {
        setValue(3)
        navigate('/account')
    }
    return (
        <Box sx={{
            borderLeft: 1,
            borderColor: '#8386a7',
            pl: 1,
            height: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <IconButton className='iconButton' sx={{
                '&:hover': {
                    backgroundColor: "white"
                }
            }} onClick={handleWishlist}>
                <Badge badgeContent={wishlist && wishlist.length}
                    sx={{
                        color: 'black',
                        // "& .MuiBadge-badge": {
                        //     backgroundColor: "#fdd700"
                        // },
                    }}>
                    <FavoriteBorderOutlinedIcon className='cartIcon' />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default WishList