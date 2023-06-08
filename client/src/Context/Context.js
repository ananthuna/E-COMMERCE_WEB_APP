import { createContext, useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import { baseUrl } from '../url'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [details, setDetails] = useState(null)
    const [value, setValue] = useState(0);
    const [user, setUser] = React.useState()
    const [cartitems, setCartitems] = useState({})
    const [address, setAddress] = React.useState()
    const [method, setMethod] = React.useState('');
    const [countDownTime, setCountDownTime] = useState()
    const [productLoading, setProductLoading] = useState(false)
    const [mobile, setMobile] = useState([])
    const [allItems, setAllItems] = useState()
    const [laptop, setLaptop] = useState([])
    const [camera, setCamera] = useState([])
    const [speaker, setSpeaker] = useState([])
    const [watch, setWatch] = useState([])
    const [headset, setHeadset] = useState([])
    const [search, setSearch] = useState([])


    useEffect(() => {
        setProductLoading(true)
        axios.get(`${baseUrl}/api/item/items`).then((doc) => {
            setAllItems([...doc.data])
            setMobile([...doc.data.filter((item) => item.category === 'Mobile')])
            setLaptop([...doc.data.filter((item) => item.category === 'Laptop')])
            setCamera([...doc.data.filter((item) => item.category === 'Camera')])
            setSpeaker([...doc.data.filter((item) => item.category === 'Speaker')])
            setWatch([...doc.data.filter((item) => item.category === 'SmartWatch')])
            setHeadset([...doc.data.filter((item) => item.category === 'Headset')])
            setProductLoading(false)
        })
    }, [])

    return (
        <UserContext.Provider value={{
            setSearch, search,
            setSpeaker,
            speaker,
            setWatch, watch,
            setHeadset, headset,
            setAllItems,
            allItems,
            setLaptop,
            laptop,
            setCamera,
            camera,
            productLoading,
            setProductLoading,
            mobile,
            setMobile,
            details,
            setDetails,
            value,
            setValue,
            user,
            setUser,
            cartitems,
            setCartitems,
            address,
            setAddress,
            method,
            setMethod,
            countDownTime,
            setCountDownTime
        }}>
            {children}
        </UserContext.Provider>
    )
}