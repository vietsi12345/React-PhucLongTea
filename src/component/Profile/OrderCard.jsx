import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = ({ item, orderStatus }) => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img src={item.drink.images[0]}
                    className='h-16 w-16'
                />
                <div>
                    <p>{item.drink.name}</p>
                    <p>{item.totalPrice}</p>
                </div>
            </div>
            <div>
                <Button desable variant='outlined' className='cursor-not-allowed'>{orderStatus}</Button>
            </div>
        </Card>
    )
}
