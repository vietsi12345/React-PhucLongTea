import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

export const UserProfile = () => {
    const handleLogout = () => {

    }
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl'>Code With Zosh</h1>
                <p>Email: nguyenvietsi12@gmail.com</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>ĐĂNG XUẤT</Button>
            </div>
        </div>
    )
}
