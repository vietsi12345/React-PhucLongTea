import React from 'react'
import {Button, Card, CardContent, CardHeader, Grid} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

export const RestaurentDetail = () => {
  const handleRestaurantStatus = () =>{

  }

  const dataRes={
    name: "Nhà hàng ABC",
    owner: "ABC",
    type: "Fast Food",
    status: true,
    openHour: "8am-11pm"
  }

  const dataAdd={
    country: "Việt Nam",
    city: "Ho Chi Minh",
    postalCode: "postalCode",
    Street: "Street Addres"
  }

  const contactData ={
    Email: "email@email.com",
    Number: "0345678912"
  }


  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>Thức ăn nhanh</h1>
        <div>
          <Button color={true?"primary":"error"}  className='py-[1rem] px-[2rem]' variant='contained' onClick={handleRestaurantStatus} size='large'>
            {true?"Close":"Open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='textgrey'>Nhà Hàng</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Chủ cửa hàng</p>
                  <p className='text-gray-400'>
                    <span className='px-5'>- </span>
                    {dataRes.name}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Chủ cửa hàng:</p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataRes.owner}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Loại đồ ăn: </p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataRes.type}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Giờ mở cửa: </p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataRes.openHour}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Status: Opening</p>
                  <p className='text-gray-400'>
                    <span className='px-5'>- </span>
                    {dataRes.status ?
                      <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open </span>
                      :<span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>Close </span>}
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} lg={6} >
          <Card>
            <CardHeader title={<span className='textgrey'>Địa chỉ</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Quốc gia:</p>
                  <p className='text-gray-400'>
                    <span className='px-5'>- </span>
                    {dataAdd.country}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Thành phố:</p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataAdd.city}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Mã số thuế:</p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataAdd.postalCode}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Địa chỉ cụ thể:</p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {dataAdd.Street}
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} lg={6}>
          <Card>
            <CardHeader title={<span className='textgrey'>Liên hệ</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Email:</p>
                  <p className='text-gray-400'>
                    <span className='px-5'>- </span>
                    {contactData.Email}
                  </p>
                </div>

                <div className='flex'>
                  <p className='w-48'>Số điện thoại:</p>
                  <p className='text-gray-400'>
                  <span className='px-5'>- </span>
                    {contactData.Number}
                  </p>
                </div>

                

                <div className='flex'>
                  <p className='w-48'>Mạng xã hội:</p>
                  <div className='flex text-gray-400 items-center pb-3 gap-2'>
                    <span className='pr-5'>-</span>
                    <a href='/'><InstagramIcon sx={{fontSize:"3rem"}} /></a>
                    <a href='/'><FacebookIcon sx={{fontSize:"3rem"}} /></a>
                    <a href='/'><WhatsAppIcon sx={{fontSize:"3rem"}} /></a>
                    <a href='/'><TwitterIcon sx={{fontSize:"3rem"}} /></a>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  )
}
