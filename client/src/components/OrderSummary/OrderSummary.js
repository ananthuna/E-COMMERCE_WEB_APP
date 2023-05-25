import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../url';
// import { UserContext } from '../../Context/Context';
import NavBar from './NavigationBar/NavBar';
import ContactInformation from './ContactInformation/ContactInformation';
import CartDetails from './CartDetails/CartDetails';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment'


export default function VerticalLinearStepper() {
    const [pageNo, setPageNo] = useState(0)
    const props = { pageNo, setPageNo }
    // const { method, setUser } = React.useContext(UserContext)
    const [email, setEmail] = useState()
    const [address, setAddress] = useState({
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        landMark: '',
        city: '',
        state: '',
        ZipCode: null,
    })
    const [ShippingMethod, setShippingMethod] = useState('')
    // const [orderID, setOrderID] = useState('')
    // const navigate = useNavigate()
    // const { setValue } = React.useContext(UserContext)


    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        if (user.token) {
            setEmail(user.email)
            axios.get(`${baseUrl}/api/user/address`, customConfig)
                .then((res) => {
                    if (res.data.address.length > 0) {
                        setAddress({ ...res.data.address[0] })
                    }
                })
        }

    }, [])


    

    

    




    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     navigate('/')
    // };



    

    return (
        <Box sx={{
            display: 'flex',
            width: '100%'
        }}>
            <Box sx={{
                width: '57%',
                borderRight: 1,
                borderColor: '#e6e6e6',
                pl: 5
            }}>
                <NavBar {...props} />
                {pageNo === 0 && < ContactInformation pageNo={pageNo} setPageNo={setPageNo} setAddress={setAddress} address={address} email={email} setEmail={setEmail} Shippingmethod={ShippingMethod} />}
                {pageNo === 1 && <Shipping pageNo={pageNo} setShippingMethod={setShippingMethod} setPageNo={setPageNo} email={email} address={address} Shippingmethod={ShippingMethod} />}
                {pageNo === 2 && <Payment pageNo={pageNo} setShippingMethod={setShippingMethod} setPageNo={setPageNo} email={email} address={address} Shippingmethod={ShippingMethod} />}
            </Box>
            <Box sx={{
                width: '43%',
                p: 2,
                mt: 4
            }}>
                <CartDetails Shippingmethod={ShippingMethod} />
            </Box>
        </Box>
    );
}