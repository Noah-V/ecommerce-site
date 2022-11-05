import React from 'react'
import { FlashDeals } from '../flashDeals/FlashDeals'
import Home from '../mainpage/Home'

const Pages = ({ productItems }) => {
  return (
    <>
        <Home/>
        <FlashDeals productItems={productItems}/>
    </>
  )
}

export default Pages
