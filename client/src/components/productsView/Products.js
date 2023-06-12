import { Alert, AlertTitle, Grid, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './product.css'
import { baseUrl } from '../../url'
import axios from 'axios'
// import { green, white } from '@mui/material/colors';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-lazy-load-image-component/src/effects/blur.css';




function Products({ tab, items }) {
    const navigate = useNavigate()
    const { setCartitems, setWishlist, wishlist } = useContext(UserContext)
    const [loading, setLoading] = useState('')
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (!user) return navigate('/')
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/wishlist/list`, customConfig)
            .then((res) => {
                setWishlist([...res.data.items])
            }).catch((err) => {
                if (err) return navigate('/login')
                // if (err.response.data.error === 'Authentication required') {
                // console.log('product card wishlist get axios error..');
                // return navigate('/login')
                // }
            })
    }, [])


    const handleView = (item) => () => {
        if (!item) return console.log('item null');
        // console.log('click view');
        // console.log(item);
        localStorage.setItem("myObject", JSON.stringify(item));
        // setDetails({ ...item })
        navigate('/view')
    }

    const handleIcon = (id) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            itemId: id
        }
        axios.post(`${baseUrl}/api/wishlist/list`, Data, customConfig)
            .then((res) => {
                setWishlist([...res.data.items])
                // console.log(res.data.items);
            }).catch((err) => {
                // console.log(err);
                navigate('/')
            })
    }

    const handleCart = (product) => {
        setLoading(product._id)
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        // console.log(user.token);
        let data = {
            itemId: product._id,
            quantity: 1,
            price: product.price - (product.price * product.offer) / 100
        }
        const Data = JSON.stringify(data)


        axios.post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
            .then((res) => {
                setCartitems(res.data)
                setAlert(true)
                setLoading('')
                const timeId = setTimeout(() => {
                    // After 3 seconds set the show value to false
                    setAlert(false)
                }, 3000)
                return () => {
                    clearTimeout(timeId)
                }

            })
    }



    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#415e6b' }}>
            {alert && <Alert
                sx={{
                    position: 'fixed',
                    zIndex: 10000,
                    top: '10rem',
                    bgcolor: '#1c2a5e',
                    color: 'white'
                }}
                severity="success">
                <AlertTitle >Just added to cart</AlertTitle>
                The product added to cart list— <strong>check it out!</strong>
            </Alert>}
            <Grid container spacing={0} sx={{ bgcolor: '#F6F3F3', pr: 1.5 }}>
                {items.map((item, index) =>
                    <Grid item xs={6} sm={3} md={2} key={item._id} sx={{ mt: 4 }}>
                        <Box key={item._id} sx={{
                            width: '100%',
                            // position: 'relative'
                        }}>
                            <Box sx={{
                                position: 'relative',
                                ml: '0.1%'
                            }}>
                                {wishlist && wishlist.map((wish, index) =>
                                    wish._id === item._id &&

                                    <FavoriteIcon key={index} onClick={() => handleIcon(item._id)} className='like_btn1' style={{ color: "#d0012e" }} />
                                )}

                                <FavoriteIcon onClick={() => handleIcon(item._id)} className='like_btn2' />
                            </Box>
                            <Box className='box' sx={{
                                width: '100%',
                                height: '17rem',
                                position: 'relative',
                                mt: '0.5rem',
                                pt: '1rem',
                                mb: '5rem',
                                // pl: '1rem',
                                // pr: '1.7rem',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: '#F6F3F3',
                                // gap:-5
                            }} >
                                <Box className='boxitems' sx={{
                                    bgcolor: 'white',
                                    width: '100%',
                                    border: 1,
                                    borderColor: 'lightgrey',
                                    '&:hover': {
                                        color: 'blue',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // gap:-10
                                }} >
                                    <Box sx={{
                                        width: '100%',
                                        height: '12rem',
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pb: 1.5,
                                        pt: 3,
                                        mb: 1
                                    }}
                                        onClick={handleView(item)}
                                    >
                                        <LazyLoadImage
                                            // effect='blur'
                                            alt='img'
                                            src={baseUrl + '/' + item.url}
                                            width={150}
                                            height={180}
                                        ></LazyLoadImage>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: '1rem',
                                        gap: 0.5,
                                        // position: 'relative',
                                        pt: '12rem'
                                    }}
                                        onClick={handleView(item)}
                                    >
                                        <Typography className='boxZoom' sx={{
                                            fontSize: '1rem',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            color: 'lightgrey'

                                        }}>
                                            {item.brant}
                                        </Typography>
                                        <Typography className='boxZoom' sx={{
                                            fontSize: '1rem',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            display: 'inline',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                        >
                                            {item.name + item.description}
                                        </Typography>
                                        <Rating name="read-only" defaultValue={item.rating} precision={0.1} size='small' readOnly />
                                        <Typography sx={{ color: '#d0012e', fontSize: '1.3rem' }} ><b>Rs.{(item.price - (item.price * item.offer) / 100).toFixed(2)}</b></Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1
                                        }}>
                                            <Typography color='black'>{'-' + item.offer + '%'}</Typography>
                                            <Typography color='lightgrey'><s>{'Rs.' + item.price}</s></Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        mt: -1.5,
                                        pl: 2.3,
                                        mb: 1,
                                        position: 'relative'
                                    }}>
                                        <button className={loading + '' === item._id + '' ? 'add_to_cart_button_disabled' : 'add_to_cart_button'}
                                            disabled={loading + '' === item._id + ''}
                                            onClick={() => handleCart(item)}
                                        >+ ADD TO CART</button>
                                        {loading + '' === item._id + '' && (
                                            <CircularProgress
                                                size={24}
                                                sx={{
                                                    color: 'white',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    marginTop: '-12px',
                                                    marginLeft: '-12px',
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

export default Products