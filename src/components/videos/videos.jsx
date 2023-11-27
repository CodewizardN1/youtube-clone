import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCart from '../video-cart/video-cart'
import ChannelCard from '../channelCard/channelCard'
import Loader from '../loader/loader'

const Videos = ({video}) => {
  if(!video.length) return <Loader />
  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={{lg: 3, xs: 2, xl: 2}}>
        {video.map((item) => (
            <Box key={item.videoId}>
            {item.id.videoId && <VideoCart item={item} />}
            {item.id.channelId && <ChannelCard item={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
