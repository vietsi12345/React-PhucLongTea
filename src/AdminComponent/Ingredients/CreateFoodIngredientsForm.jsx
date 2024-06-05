import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

export const CreateFoodIngredientsForm = () => {

    const [formData, setFormData] = useState({name:"", igredientsCategoryId: ""});
    const handleSubmit = ()=>{
        const data = {
            name: formData.categoryName,
            restaurantId:{
                id:1
            }
        }

        console.log(data)
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
                <TextField fullWidth onChange={handleInputChange} id="categoryName" name="categoryName" label="categoryName" variant='outlined' value={FormData.categoryName} />
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.igredientsCategoryId}
                    label="igredientsCategoryId"
                    onChange={handleInputChange}
                    name="igredientsCategoryId"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
                <Button variant='contained' type='submit '> Create category</Button>
            </form>

        </div>
    </div>
  )
}
