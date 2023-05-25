import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Address.css'
import Changebtn from './ChangeAddress/ChangeAddressbtn'

function Address({ address, name, number, addressError, setAddressError }) {




    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            m: '1rem',
            border: 1,
            borderColor: '#ededed',
        }}>


            <Box sx={{
                width: '60rem',
                // height: '5rem',
                pl: '2rem',
                pr: '2rem',
                pt: '1rem',
                pb: 1

            }}
            >
                <Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 3
                    }}>
                        <Typography><b>Delivery to:</b></Typography>
                        {name && <Typography>{name}</Typography>}
                        {number && <Typography>{number}</Typography>}
                    </Box>
                    <Box>
                        <Typography>Shipping address</Typography>
                        {address && <Typography>{address.address + ',' + address.city + ' '}{'pin:' + address.pin}</Typography>}
                        {!address && !addressError && <Typography sx={{
                            color: '#c0bfc2'
                        }}>Add shipping address!</Typography>}

                        {addressError && <Typography sx={{
                            color: '#D0002D'
                        }}>Add shipping address!</Typography>}
                    </Box>
                </Box>

            </Box>
            <Changebtn oldAddress={address} setAddressError={setAddressError} />

        </Box>
    )
}

export default Address