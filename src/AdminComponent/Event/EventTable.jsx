import { Box, Card, CardActions, CardHeader, FormControl, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const orders=[1,1,1,1,1,1,1]


export const FoodCategoryTable = () => {
  return (
   <Box>
        <Card className='mt-1'>
            <CardHeader action={
                <IconButton aria-label="settings">
                  <CreateIcon />
                </IconButton>
              } title={"Menu"} sx={{pt:2,alignItems:"center"}} />
            
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Ảnh</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{"row name"}</TableCell>
                      <TableCell align="left">{"image"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
   </Box>
  )
}
