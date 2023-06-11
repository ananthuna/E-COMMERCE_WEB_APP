import { Box } from '@mui/system'
import React, { Suspense, lazy } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
// import ViewProduct from '../components/View/view'
import Loading from '../components/Loading/Loading'
const ViewProduct = lazy(() => import('../components/View/view'))


function View() {


    return (
        <Box>
            <Header />
            <Suspense fallback={<Loading />}>
                <ViewProduct />
            </Suspense>
            <Footer />
        </Box>
    )
}

export default View