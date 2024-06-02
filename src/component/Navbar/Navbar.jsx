import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'


export const Navbar = () => {
    return (
        <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] flex justify-between lg:px-20 '>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-gray-300 text-2xl'>
                    Phúc Long Tea
                </li>
            </div>
            <div className='flex items-center space-x-4 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className=''>
                    <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>
                        C
                    </Avatar>
                </div>
                <div className=''>
                    <IconButton>
                        <Badge color='secondary' badgeContent={1}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
