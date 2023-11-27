import { Avatar, Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../constants/constant'
import moment from 'moment'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const VideoCart = ({item}) => {
  return (
    <Card sx={{width: {xs: '100%', sm: '360px', xl: '360px', lg: '340px', md: '320px'}, boxShadow: 'none', borderRadius: 'none'}}>
      <Link to={`/video/${item?.id.videoId}`}>
        <CardMedia image={item?.snippet?.thumbnails?.high?.url} alt={item?.snippet?.title} sx={{width :{xs: '100%', sm: '360px', xl: '360px', lg: '340px', md: '320px'}, height: {xs: '220px',md:'190px'}}}/>
      </Link>
        <CardContent sx={{background: colors.primary, height: '200px', position: 'relative'}}>
            <Link to={`/video/${item?.id.videoId}`}>
            <Typography my={'2px'} sz={{opacity :'0.4'}}>{moment(item.snippet?.publishedAt).fromNow()}</Typography>
            <Typography variant='subtitle1' fontWeight={'bold'}>{item?.snippet?.title.slice(0, 30)}</Typography>
            <Typography variant='subtitle2' sx={{opacity: 0.6}}>{item?.snippet?.description.slice(0, 70)}</Typography>
            </Link>
            <>
            <Link to={`/channel/${item?.snippet?.channelId}`}>
                <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
                    <Avatar src={item?.snippet?.thumbnails?.high?.url} />
                    <Typography variant='subtitle2' color={'gray'}>{item?.snippet?.channelTitle}</Typography>
                    <CheckCircle sx={{fontSize: '12px' ,color: 'gray', ml: '5px'}} />
                </Stack>
            </Link>
                </>
        </CardContent>
    </Card>
  )
}

export default VideoCart
