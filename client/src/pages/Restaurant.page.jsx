import React from 'react'
import {Outlet} from 'react-router-dom'


//Layout
import RestaurantLayout from '../layouts/RestaurantLayout'

const Restaurant = () => {
  return (
    <>
    <h2>Restaurant</h2>
    <Outlet/>
    </>
  )
}

export default RestaurantLayout(Restaurant);