import React from 'react'
import { RestaurantCard } from '../Restaurant/RestaurantCard'

export const Favorites = () => {
    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
            <div className='flex flex-wrap gap-4 justify-center mt-5'>
                {[1, 2, 3].map((item, index) => (
                    <RestaurantCard />
                ))}
            </div>
        </div>
    )
}
