import { Alert, Box, Radio, Typography } from '@mui/material'
import React from 'react'

function ShippingMethod({ setShippingMethod, error }) {
  // const [shippingFee, setShippingFee] = useState(20.00)
  const shippingFee = 20.00
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      mt: '2rem'
    }}>
      <Typography>Shipping method</Typography>
      {error && <Alert sx={{ mt: '1rem', border: 1, borderColor: '#fcdddd' }} severity="error">
        <Typography sx={{
          maxWidth: '32rem',
          fontSize: '0.9rem',
          color: '#6e8195'
        }} >Your must have to select the shipping type to continue shopping.</Typography>
      </Alert>}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 1,
        borderColor: '#e6e6e6',
        borderRadius: 2,
        pr: 2.5,
        pl: 1.5,
        mt: 1
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Radio
            // checked={true}
            onChange={(e) => setShippingMethod(shippingFee)}
            // value=""
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{
              color: '#999999',
              '&.Mui-checked': {
                color: '#999999',
              },
            }}
          />
          <Typography>standard</Typography>
        </Box>
        <Typography>₹{shippingFee.toFixed(2)}</Typography>
      </Box>
    </Box>
  )
}

export default ShippingMethod