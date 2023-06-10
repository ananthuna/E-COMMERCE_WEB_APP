import React, { lazy } from 'react'
import Header from '../components/Header/header'
// import Banner from '../components/Banner/banner'
import Footer from '../components/Footer/footer'
// import Products from '../components/Products/Products'
import { Box } from '@mui/material'
import SubHeader from '../components/SubHeader/SubHeader'
// import Loading from '../components/Loading/Loading'
const Banner = lazy(() => import('../components/Banner/banner'))
const Products = lazy(() => import('../components/Products/Products'))

function Home() {


  return (
    <Box>
      <Header />
      <SubHeader />
      <Banner />
      {/* <Suspense fallback={<Loading />}> */}
        <Products />
      {/* </Suspense> */}
      <Footer />
    </Box>
  )
}

export default Home
