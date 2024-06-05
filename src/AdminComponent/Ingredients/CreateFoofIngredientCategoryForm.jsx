import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'

export const CreateIngredientCategoryForm = () => {

    const [formData, setFormData] = useState({name:""} )
    const handleSubmit = ()=>{
       

        console.log(formData)
    }

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData, [name]:value
        })
    }

  return (
    <div>
         <div className='p-5'>
            <h1 className='text-gray-400 text-center text-xl pb-10'>Tạo thể loại</h1>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <TextField fullWidth onChange={handleInputChange} id="name" name="name" label="name" variant='outlined' value={formData.name} />
                <Button variant='contained' type='submit '> Create category</Button>
            </form>

        </div>
    </div>
  )
}
