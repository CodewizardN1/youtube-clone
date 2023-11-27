import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api'
import { Box, Container } from '@mui/material'
import ChannelCard from '../channelCard/channelCard'
import Videos from '../videos/videos'

const Channel = () => {
  const [channelDeatil, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async() => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideo?.items)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [id])
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <Box width={'100%'} height={'200px'} zIndex={10} sx={{backgroundImage: `url(${channelDeatil?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat'}} />
          <ChannelCard item={channelDeatil} marginTop={'-120px'} />
      </Box>
      <Container maxWidth={'90%'}> 
          <Videos video={videos} />
      </Container>
    </Box>
  )
}

export default Channel
