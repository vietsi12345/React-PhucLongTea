import { Box, Card, CardHeader, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const orders=[1,1,1,1,1,1,1]


export const OrderTable = () => {
  return (
   <Box>
        <Card className='mt-1'>
            <CardHeader title={"Tất cả đơn hàng"} sx={{pt:2,alignItems:"center"}} />

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Ảnh</TableCell>
            <TableCell align="right">Khách hàng</TableCell>
            <TableCell align="right">Giá tiền</TableCell>
            <TableCell align="right">Tên món</TableCell>
            <TableCell align="right">Nguyên liệu</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            <TableCell align="right">Cập nhật</TableCell>
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
              <TableCell align="right">{"Khach"}</TableCell>
              <TableCell align="right">{"cost"}</TableCell>
              <TableCell align="right">{"name"}</TableCell>
              <TableCell align="right">{"Nguyen lieu"}</TableCell>
              <TableCell align="right">{"trang thai"}</TableCell>
              <TableCell align="right">{"cap nhat"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>
   </Box>
  )
}
