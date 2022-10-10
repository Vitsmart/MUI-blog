import { Button, Typography } from '@mui/material'
import React from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { Settings } from '@mui/icons-material';
export default function Home() {
  return (
    <div>
        <Button variant="text">Text</Button>
    <Button startIcon={<Brightness2Icon/>} variant="contained" color="success">Contained</Button>
    <Button startIcon={<Settings/>} variant="contained" color="secondary">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Typography variant='h2' component="p">
        the new process
    </Typography>
    <Button variant='contained' sx={{
        backgroundColor:"yellow",
        color:"#222",
        margin:5,
        "&:hover":{
            backgroundColor:"gray",
            color:"silver"
        }
    }}> click me</Button>
    </div>
  )
}
