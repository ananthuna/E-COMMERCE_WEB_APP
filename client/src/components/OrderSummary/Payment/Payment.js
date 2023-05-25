import {  Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/Context';
import Methods from './Methods/Methods';
import BillingAddress from './BillingAddress/BillingAddress';
import axios from 'axios';
import { baseUrl } from '../../../url';


function Payment({ email, address, setPageNo, setShippingMethod, Shippingmethod }) {
  const navigate = useNavigate()
  const { method, setValue } = useContext(UserContext)
  const [orderID, setOrderID] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [progress, setProgress] = useState(false)

  const handleOrderNavigate = () => {
    setShowAlert(false);
    navigate('/account')
    setValue(2)
  };

  const handleContinueShoping = () => {
    setShowAlert(false);
    navigate('/')
  }

  useEffect(() => {
    // if (address.address) setPageNo(1)
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    const customConfig = {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }

    axios.get(`${baseUrl}/api/order/placeOrder`, customConfig)
      .then((res) => {
        setOrderID(res.data.orderId)
      })
  }, [])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const handleOrder = async () => {
    // console.log(method);
    setProgress(true)
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    }
    const Data = {
      payment: method,
      orderId: orderID
    }

    axios.post(`${baseUrl}/api/order/checkout`, Data, customConfig)
      .then((res) => {
        // console.log('checkout');
        // console.log(method);
        // console.log(res.data.order);
        if (res.data.order === 'placed') {
          setProgress(false)
          setShowAlert(true)
          return
        }
        const amount = res.data.order.amount
        const orderId = res.data.order.id
        // console.log(orderId);
        const currency = res.data.order.currency
        var options = {
          "key": "rzp_test_urWhsnXVh5JJ6f", // Enter the Key ID generated from the Dashboard
          "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": currency,
          "name": "pickle hut",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
          "handler": function (res) {
            // alert(res.razorpay_payment_id)
            // alert(res.razorpay_order_id)
            // alert(res.razorpay_signature)
            const Data = {
              res,
              orderId: orderID
            }

            // console.log(res);
            axios.post(`${baseUrl}/api/order/verify-payment`, Data, customConfig)
              .then((res) => {
                // console.log(res.data);
                setProgress(false)
                setShowAlert(true)
              })


          },
          "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
          },
          "notes": {
            "address": "Razorpay Corporate Office"
          },
          "theme": {
            "color": "#3399cc"
          }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();

      })
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

        {Shippingmethod && <Box sx={{
          borderTop: 1,
          borderColor: '#e6e6e6',
          display: 'flex',
          alignItems: 'centre',
          justifyContent: 'space-between',
          p: 1.5,
        }}>
          <Box sx={{
            display: 'flex',
            gap: 4
          }}>
            <Typography sx={{ color: '#9ba3b6', fontSize: '0.9rem' }}>Method</Typography>
            <Typography sx={{ fontSize: '0.9rem', maxWidth: '23rem' }}>Standard . ₹{Shippingmethod.toFixed(2)}</Typography>
          </Box>
          {/* <Typography sx={{
                        color: '#9ba3b6',
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                    }}>Change</Typography> */}
        </Box>}
      </Box>

      <Box>
        <Methods />
        <BillingAddress />
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
          onClick={() => setPageNo(1)}
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
          onClick={handleOrder}
        > {progress ? <CircularProgress color="inherit" /> : 'Complete order'}</Button>
      </Box>
      {/* {showAlert && <Alert
        sx={{
          position: 'fixed',
          top: '0.5rem'
        }}
        onClose={() => {
          setShowAlert(false)
          navigate('/account')
          setValue(2)
        }}
      >Your order placed Successfuly</Alert>} */}

      {
        <Dialog
          open={showAlert}
          onClose={() => { setShowAlert(!showAlert) }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ bgcolor: '#eaf9ed' }}
        >
          <DialogTitle sx={{ color: 'green' }} id="alert-dialog-title">
            {"Your order placed successfuly"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              you can visit the order list to track the order by click the order view button or click the continue shopping button to continue shopping
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleOrderNavigate}
              sx={{
                boxShadow: 0,
                borderRadius: 0,
                bgcolor: '#fdd700',
                "&:hover": {
                  backgroundColor: "#1c2a5e",
                  boxShadow: 0,
                },
                height: '2.5rem',
              }}
            >view order</Button>
            <Button sx={{
              boxShadow: 0,
              borderRadius: 0,
              bgcolor: '#1c2a5e',
              "&:hover": { backgroundColor: "#fdd700", boxShadow: 0 },
              height: '2.5rem',
            }}
              onClick={handleContinueShoping}
              autoFocus
              variant="contained"
            >
              continue shopping
            </Button>
          </DialogActions>
        </Dialog>
      }
    </Box>
  )
}

export default Payment