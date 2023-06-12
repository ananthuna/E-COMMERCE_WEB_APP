import React from 'react'
import { useNavigate } from 'react-router-dom'
import './logo.css'

function logo() {
    const navigate = useNavigate()
    


    const handleHome = () => {
        navigate('/')
    }

    return (
        <div onClick={handleHome} className='logo-align' >
            <img className='logo' src={process.env.PUBLIC_URL + '/LOGO.png'} alt='logo'></img>
        </div>
    )
}

export default logo