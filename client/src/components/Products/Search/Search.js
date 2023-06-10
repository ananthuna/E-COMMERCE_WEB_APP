import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import Products from '../../productsView/Products'
import { UserContext } from '../../../Context/Context'


function Search() {
    const pageTopRef = useRef(null)
    const { search } = useContext(UserContext)
    const { items, title } = search

    useEffect(() => {
        pageTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [search])


    return (
        <Box  sx={{
            mt: '5rem'
        }}>
            <Box ref={pageTopRef} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'Space-between',
                width: '30%',
                gap: '2rem'
            }}>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>{title}</b></Typography>
            </Box>
            <Box sx={{

            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default Search