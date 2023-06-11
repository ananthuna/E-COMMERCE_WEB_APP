import { Box } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'


function Loading() {
    return (
        <Box sx={{
            pt: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '25rem'
        }}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </Box>
    )
}

export default Loading