import React from 'react'
import Moblies from './Moblies'
import Computers from './Computers'
import Ac from './Ac'
import Books from './Books'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import Speakers from './Speakers'
import Tv from './Tv'
import Watch from './Watch'
import Woman from './Woman'


const Products = () => {
  return (
    <div>
      <Moblies/>
      <Computers/>
      <Ac/>
      {/* <Books/> */}
      <Fridge/>
      <Furniture/>
      <Kitchen/>
      <Men/>
      <Speakers/>
      <Tv/>
      <Watch/>
      <Woman/>
    </div>
  )
}

export default Products