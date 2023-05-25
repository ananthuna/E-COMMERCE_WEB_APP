import { Box } from '@mui/system'
import React, { useState } from 'react'
import { baseUrl } from '../../url'
import axios from '../../axios'
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import DealsOfDay from './DealsOfday/DealsOfDay'
import NewProducts from './NewProducts/NewProducts'
import BestSellers from './BestSellers/BestSellers';
import Electronics from './Electronics/Electronics'; 

function Products() {
  const [veg, setVeg] = React.useState([])
  const [nonveg, setNonveg] = React.useState([])
  const [allItems, setAllItems] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseUrl}/api/item/items`).then((doc) => {
      setAllItems([...doc.data])
      const vegItems = doc.data.filter((item) => {
        return item.category === "veg" && item
      })
      const nonvegItems = doc.data.filter((item) => {
        return item.category === "nonveg" && item
      })
      setVeg(vegItems)
      setNonveg(nonvegItems)
      setLoading(false)
    })
  }, [])


  return (
    <Box sx={{
      bgcolor: '#F6F3F3',
      mt: '25rem',
      pl: '1rem',
      pt: '6rem',
      pb: '2rem',
      width: '100%'
    }}>

      {!loading && allItems && < DealsOfDay items={allItems} />}
      {!loading && veg && < NewProducts items={veg} />}
      {!loading && nonveg && < BestSellers items={nonveg} />}
      {!loading && nonveg && < Electronics items={nonveg} />}
      {loading && < CircularProgress sx={{ m: '4rem' }} />}

    </Box>
  )
}

export default Products

