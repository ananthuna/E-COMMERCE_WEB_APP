import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';
import HeadsetIcon from '@mui/icons-material/Headset';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'

function Copyright(props) {


    return (
        <Typography variant="body2" sx={{ color: 'white' }} align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function footer() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '20rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            color: 'white',
            bgcolor: '#1c2a5e'
        }}>

            <Box>
                <Typography sx={{ fontSize: 18, ml: 1 }}><b>Contact Information</b></Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 2
                }}>
                    <HeadsetIcon sx={{
                        fontSize: 47
                    }} />
                    <Box >
                        <Typography sx={{ fontSize: 14 }}>Call on order? Call us 24/7</Typography>
                        <Typography sx={{
                            "&:hover": {
                                cursor: "pointer"
                            },
                            color: '#fbd009',
                            // fontSize: 22

                        }}><b>+91 7012031852</b></Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: 19 }} />
                    <Typography sx={{ fontSize: 14 }}>No. 1259 Freedom, Liberty, St , New York, 11111</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <MailOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                    <Typography sx={{ fontSize: 14 }}>sales@yourcpmpany.com</Typography>
                </Box>
                <Box sx={{ ml: -16, mt: 1 }}>
                    <Copyright />
                </Box>


            </Box>
            <Box sx={{ display: 'flex', gap: 5 }}>
                <Box>
                    <Typography sx={{ fontSize: 18 }}><b>Quick Links</b></Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
                        <Typography className='t1' sx={{ fontSize: 14 }}>About Us</Typography>
                        <Typography className='t2' sx={{ fontSize: 14 }}>Delivery</Typography>
                        <Typography className='t3' sx={{ fontSize: 14 }}>Compare</Typography>
                        <Typography className='t4' sx={{ fontSize: 14 }}>Legal Notice</Typography>
                        <Typography className='t5' sx={{ fontSize: 14 }}>Wishlist</Typography>
                        <Typography className='t6' sx={{ fontSize: 14 }}>Terms & Condition of Use</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: 18 }}><b>My Accounts</b></Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
                        <Typography className='t7' sx={{ fontSize: 14 }}>Contact Us</Typography>
                        <Typography className='t8' sx={{ fontSize: 14 }}>Wishlist</Typography>
                        <Typography className='t9' sx={{ fontSize: 14 }}>Terms & Condition of Use</Typography>
                        <Typography className='t10' sx={{ fontSize: 14 }}>Faq's</Typography>
                        <Typography className='t11' sx={{ fontSize: 14 }}>Compare</Typography>
                        <Typography className='t12' sx={{ fontSize: 14 }}>Shipping</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography sx={{ fontSize: 18, mb: 1, mt: -13 }}><b>Follow Us</b></Typography>
                <Typography sx={{ maxWidth: '23rem', fontSize: 14 }}>We make consolidating, marketing and tracking your social media website easy.</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                    <div className='logo1'><img width='32px' height='32px' src={process.env.PUBLIC_URL + '/facebook.png'} alt='logo1'></img></div>

                    <img className='logo2' width='32px' height='32px' src={process.env.PUBLIC_URL + '/pinterest.png'} alt='logo2'></img>
                    <img className='logo3' width='32px' height='32px' src={process.env.PUBLIC_URL + '/instagram.png'} alt='logo3'></img>
                    <img className='logo4' width='32px' height='32px' src={process.env.PUBLIC_URL + '/youtube.png'} alt='logo4'></img>
                </Box>
            </Box>
        </Box>
    )
}

export default footer