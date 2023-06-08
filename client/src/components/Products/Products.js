import { Box } from '@mui/system'
import React, { useContext, Suspense, lazy } from 'react'
// import { useEffect } from 'react';
import { UserContext } from '../../Context/Context';
// import Search from './Search/Search';
import Loading from '../Loading/Loading';
const DealsOfDay = lazy(() => import('./DealsOfday/DealsOfDay'))
const NewProducts = lazy(() => import('./NewProducts/NewProducts'))
const BestSellers = lazy(() => import('./BestSellers/BestSellers'))
const Electronics = lazy(() => import('./Electronics/Electronics'))

// function shuffle(array) {
//   let currentIndex = array.length, randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex !== 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }


function Products() {

  const {
    mobile,
    laptop,
    camera,
    allItems
  } = useContext(UserContext)

  // const [dealOfDay, setDealOfDay] = useState([])
  // const [newItems, setNewItems] = useState([])

  // useEffect(() => {
  //   console.log('filter');

  //   const arr = [...mobile.filter((item) => item.offer > 35),
  //   ...laptop.filter((item) => item.offer > 36),
  //   ...camera.filter((item) => item.offer > 25),
  //   ...speaker.filter((item) => item.offer > 45),
  //   ...watch.filter((item) => item.offer > 79),
  //   ...headset.filter((item) => item.offer > 50)
  //   ]

  //   shuffle(arr)
  //   setDealOfDay([...arr])
  // }, [dealOfDay])

  // useEffect(() => {
  //   if (allItems && allItems.length > 0) {
  //     const allArray = [...allItems]
  //     shuffle(allArray)
  //     setAllItems([...allArray])
  //   }
  // }, [allItems])

  // useEffect(() => {
  //   const arr = [...mobile, ...laptop, ...speaker]
  //   if (arr && arr.length > 0) {
  //     shuffle(arr)
  //     setNewItems([...arr])
  //   }
  // }, [newItems])


  return (
    <Box sx={{
      bgcolor: '#F6F3F3',
      mt: '25rem',
      pl: '1rem',
      pt: '6rem',
      width: '100%',
      pb: '4rem'
    }}>
      <Suspense fallback={<Loading />}>
        {laptop && < DealsOfDay items={laptop} />}
        {camera && < NewProducts items={camera} />}
        {mobile && < BestSellers items={mobile} />}
        {allItems && < Electronics items={allItems} />}
      </Suspense>
    </Box>
  )
}

export default Products

