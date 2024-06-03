import React from 'react'
import { AdminSlideBar } from './AdminSlideBar'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../DashBoard/DashBoard'
import { Orders } from '../Orders/Orders'



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
              </Routes>
            </div>
        </div>
    </div>
  )
}
