import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

export const RestaurantCard = () => {
    return (
        <Card className='w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover'
                    src="https://lh5.googleusercontent.com/p/AF1QipOeiMhqkQ8jeKvOUbwXOmeQlm0dOn3LOvzCvzub=w143-h143-n-k-no" alt=""
                />
                <Chip size="small"
                    className="absolute top-2 left-2"
                    color={true ? 'success' : "error"}
                    label={true ? "open" : "closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>Tên nhà hàng</p>
                    <p className='text-gray-500 text-sm'>Đây là mô tả</p>
                </div>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}
