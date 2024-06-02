import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Chip, IconButton } from '@mui/material';

export const CartItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[80px] object-cover'
                        src="https://phuclong.com.vn/uploads/dish/5d2c4c452c035b-cphsetcgi01.png"
                        alt=""
                    />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>biryani  </p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>2000 VND</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {[1, 1, 1].map((item, index) => (
                    <Chip label='options' key={index} />
                ))}
            </div>
        </div>
    )
}
