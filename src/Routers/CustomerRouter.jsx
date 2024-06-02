import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home/Home'
import RestaurantDetail from '../component/Restaurant/RestaurantDetail'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'

export const CustomerRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/:register' element={<Home />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/my-profile/*' element={<Profile />} />
            </Routes>
        </div>
    )
}
