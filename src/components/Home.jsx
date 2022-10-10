
import { Box, Stack } from '@mui/system'
import React from 'react'
import Feed from './Feed'
import RightBar from './RightBar'
import SideBar from './SideBar'

export default function Home() {
  return (
    <Box bgcolor='pink'>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <SideBar/>
      <Feed/>
      <RightBar/> 
      </Stack> 
    </Box>
       
  )
}
