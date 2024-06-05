import React from 'react'
import { AdminSlideBar } from './AdminSlideBar'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../DashBoard/DashBoard'
import { Orders } from '../Orders/Orders'
import {Menu} from '../Menu/Menu'
import {FoodCategory} from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import {Event} from '../Event/Event'
import {RestaurentDetail} from './RestaurentDetail'
import { CreateMenuForm } from '../Menu/CreateMenuForm'



export const Admin = () => {
    const handleClose =() =>{

    }

  return (
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSlideBar handleClose={handleClose}/>
            </div>

            <div className='lg:w-[80%]'>
              <Routes>
                <Route path='/' element={<DashBoard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/categorys' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/events' element={<Event/>}/>
                <Route path='/details' element={<RestaurentDetail/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
              </Routes>
            </div>
        </div>
    </div>
  )
}
