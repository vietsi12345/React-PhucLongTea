import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';

const categories = [
    "caffe",
    "Trà sữa",
    "Bánh trạng miệng",
    "Đồ ăn mặn"
]

const foodTypes = [
    { label: 'All', value: 'all' },
    { label: 'Vegeration only', value: 'Vegeration' },
    { label: 'Non-vegetirian', value: 'Non_vegetirian' },
    { label: 'Seasonal', value: 'seasonal' },
]
const menu = [1, 2, 3, 4]
const RestaurantDetail = () => {
    const [foodType, setFoodType] = useState("all")

    const handleFilter = (e) => {
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name)
    }

    return (
        <div className='px-5 lg:px-10'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://phongcachmoc.vn/upload/images/tin-tuc/20%20mau%20nha%20hang%20dep/update-07-2022/anrakutei-premium-mat-tien-1-2.JPG'
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://phongcachmoc.vn/upload/images/tin-tuc/20%20mau%20nha%20hang%20dep/update-07-2022/anrakutei-premium-mat-tien-1-2.JPG'
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://hoangminhdecor.com/wp-content/uploads/2020/03/Resort-H%E1%BB%99i-An-Silk-2.jpg'
                            />
                        </Grid>
                    </Grid>

                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                    <p className='text-gray-500 mt-1'>Đây là mô tả</p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <FmdGoodIcon />
                            <span>
                                Địa chỉ nhà hàng
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon />
                            <span>
                                Thứ 2 - thứ 7: 9AM-9:PM(Today)
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relaytive'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28 '>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                FoodType
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {
                                        foodTypes.map((item, index) =>
                                            <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
                                        )
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Categories
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {
                                        categories.map((item, index) =>
                                            <FormControlLabel key={index}
                                                value={item}
                                                control={<Radio />}
                                                label={item} />
                                        )
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] filter lg:pl-10'>
                    {menu.map((item, index) => (
                        <MenuCard key={index} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetail
