import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image='https://image.dienthoaivui.com.vn/x,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/meme-tet-thumbnail.jpg'
                />
                <CardContent>
                    <Typography variant='h5' >
                        Sự kiện miễn phí
                    </Typography>
                    <Typography variant='body2' >
                        Giảm giá 20% toàn bộ sản phẩm có đường
                    </Typography>
                    <div className='pt-2 space-y-2'>
                        <p>Quận 9</p>
                        <p className='text-sm text-blue-500'>Thứ 6, 13-02-2024</p>
                        <p className='text-sm text-red-500'>Thứ 7, 14-02-2024</p>
                    </div>
                </CardContent>

                {false && <CardActions >
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}
