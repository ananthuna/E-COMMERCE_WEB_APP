import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import Products from '../../productsView/Products'
import { UserContext } from '../../../Context/Context'


function Search({ items }) {
    const pageTopRef = useRef(null)
    const { search } = useContext(UserContext)

    useEffect(() => {
        pageTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [search])


    return (
        <Box ref={pageTopRef} sx={{
            mt: '5rem'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'Space-between',
                width: '30%',
                gap: '2rem'
            }}>
                <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Search result</b></Typography>
                {/* <Typography sx={{
                    fontSize: '1.5rem'
                }}><b>Top Featured</b></Typography> */}
            </Box>
            <Box sx={{

            }}>
                <Products items={items} />
            </Box>
        </Box>
    )
}

export default Search