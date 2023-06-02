import * as React from 'react';
import Logo from './logo/logo';
import Cart from './cartIcon/cartIcon';
import Account from './accountIcon/accountIcon';
import SearchBar from './SearchBar/SearchBar'
import './header.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Adminicon from './adminicon/AdminIcon';
import { UserContext } from '../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../url';
import HeadsetIcon from '@mui/icons-material/Headset';


export default function PrimarySearchAppBar() {
    const { user, setUser } = React.useContext(UserContext)
    const navigate = useNavigate()


    React.useEffect(() => {
        // const loginData = {
        //     email: 'kashi@gmail.com',
        //     password: 'Kashi@123',
        //     token: ''
        // }
        // const Data = JSON.stringify(loginData);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let User = JSON.parse(localStorage.getItem("user"))
        if (User) {
            setUser(User)
        } else {
            navigate('/login')
        }

        // if (!User) {
        //     axios.post(`${baseUrl}/api/user/login`, Data, customConfig).then((response) => {
        //         if (!response.data.err) {
        //             localStorage.setItem("user", JSON.stringify(response.data));
        //             setUser(User)
        //         } else {
        //             console.log('header login err');
        //             console.log(response.data.err);
        //         }
        //     })
        // }

    }, [])


    return (
        <Box className='header'
            sx={{
                backgroundColor: "#1c2a5e",
            }}
        >
            <Box sx={{
                position: 'relative',
                width: '12rem',
                height: '4rem',
                display: { xs: 'none', sm: 'block' }
            }}>
                <Logo />
            </Box>
            <Box sx={{
                bgcolor: 'white',
                borderRadius: 1
            }}>
                <SearchBar />
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 4
            }}>
                <Box sx={{
                    color: 'white',
                    display: 'flex',
                    gap: 1,
                }}
                    className='contact'
                >
                    <HeadsetIcon sx={{
                        fontSize: 50
                    }} className='contactIcon' />
                    <Box >
                        <Typography className='number'><b>(+91)7012031852</b></Typography>
                        <Typography>Call us now</Typography>
                    </Box>
                </Box>
                {user ? (
                    <Box className='right-items'>
                        {user.isAdmin ? (
                            <Box>
                                <IconButton>
                                    <Adminicon />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box sx={{
                                display: 'flex',
                                gap: '10px'
                            }}>
                                <Cart />
                                <Account />
                            </Box>
                        )}
                    </Box>
                ) : (
                    <Box className='right-items'>
                        <Typography className='selection' onClick={() => navigate('/login')}>Login</Typography>
                        <Typography color='white' >/</Typography>
                        <Typography className='selection' color='white' onClick={() => navigate('/signup')}>Signup</Typography>
                    </Box>
                )}
            </Box >
        </Box >
    );
}

