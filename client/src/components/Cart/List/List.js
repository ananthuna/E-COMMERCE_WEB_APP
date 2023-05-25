import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Quantity from './Quantity/Quantity'
import ProductDetails from './ProductDetails/ProductDetails';
import RemoveButton from './RemoveButton/RemoveButton';
import ProductImage from './ProductImage/ProductImage';
import ProductPrice from './ProductPrice/productPrice';
import TotalPrice from './TotalPrice/TotalPrice';

function List({ items }) {


    const title = [
        'Remove',
        'Product image',
        'product name',
        'Unit price',
        'Quantity',
        'Total'
    ]

    return (
        <>
            <Box sx={{
                m: '1rem',
            }}
            >
                <Box sx={{
                    border: 1,
                    borderColor: '#ededed',
                    display: 'flex',
                    alignItems: 'center',
                    p: 2
                }}>
                    <Typography sx={{ fontSize: '0.9rem' }}><b>{title[0]}</b></Typography>
                    <Typography sx={{ fontSize: '0.9rem', ml: 4, maxWidth: '9rem' }}><b>{title[1]}</b></Typography>
                    <Typography sx={{ fontSize: '0.9rem', ml: '9rem', maxWidth: '9rem' }}><b>{title[2]}</b></Typography>
                    <Typography sx={{ fontSize: '0.9rem', ml: '9rem' }}><b>{title[3]}</b></Typography>
                    <Typography sx={{ fontSize: '0.9rem', ml: '3rem' }}><b>{title[4]}</b></Typography>
                    <Typography sx={{ fontSize: '0.9rem', ml: '5rem' }}><b>{title[5]}</b></Typography>
                </Box>
                {items && items.map((item, index) =>
                    <Box
                        key={item._id}
                        sx={{
                            border: 1,
                            borderTop: 0,
                            borderColor: '#ededed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}>
                        <RemoveButton item={item} />
                        <ProductImage item={item} />
                        <ProductDetails item={item} />
                        <ProductPrice item={item} />
                        <Quantity item={item} />
                        <TotalPrice item={item} />
                    </Box>
                )}
            </Box>
        </>
    )
}

export default List