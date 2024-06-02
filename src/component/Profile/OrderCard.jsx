import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img src='https://phuclong.com.vn/uploads/dish/4d247cffb2c4d5-hngtrchanh.png'
                    className='h-16 w-16'
                />
                <div>
                    <p>Trà chanh</p>
                    <p>40000 VND</p>
                </div>
            </div>
            <div>
                <Button desable variant='outlined' className='cursor-not-allowed'>Trạng thái</Button>
            </div>
        </Card>
    )
}
