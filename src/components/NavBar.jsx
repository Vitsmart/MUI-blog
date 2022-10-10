import { Pets } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {

     
  return (
    <AppBar position="sticky" color='secondary'>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>
            Noble Calitus

            </Typography>
            <Pets sx={{display: {xs:"block", sm:"none"}}}/>
        </Toolbar>
        </AppBar>
  )
}
