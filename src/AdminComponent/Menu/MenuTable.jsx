import { Box, Card, CardActions, CardHeader, FormControl, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const orders=[1,1,1,1,1,1,1]


export const MenuTable = () => {
  const navigate = useNavigate();

  return (
   <Box>
        <Card className='mt-1'>
            <CardHeader action={
                <IconButton onClick={()=> navigate('/admin/restaurant/add-menu')} aria-label="settings">
                  <CreateIcon />
                </IconButton>
              } title={"Menu"} sx={{pt:2,alignItems:"center"}} />
            
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Ảnh</TableCell>
                    <TableCell align="right">Tiêu đề</TableCell>
                    <TableCell align="right">Nguyên liệu</TableCell>
                    <TableCell align="right">Giá tiền</TableCell>
                    <TableCell align="right">Có sẵn</TableCell>
                    <TableCell align="right">Xoá</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{"row name"}</TableCell>
                      <TableCell align="right">{"image"}</TableCell>
                      <TableCell align="right">{"title"}</TableCell>
                      <TableCell align="right">{"Nguyen lieu"}</TableCell>
                      <TableCell align="right">{"price"}</TableCell>
                      <TableCell align="right">{"con kho?"}</TableCell>
                      <TableCell align="right"><IconButton><DeleteIcon/></IconButton></TableCell>   
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
   </Box>
  )
}
