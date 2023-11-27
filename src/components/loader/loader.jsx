import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box height={'80vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <CircularProgress />
        </Stack>
  </Box>

  )
}

export default Loader
