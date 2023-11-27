import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiService } from '../service/api'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import Loader from '../loader/loader';
import Videos from '../videos/videos';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
    try {
        const data = await ApiService.fetching(`videos?part=snippet&statistics&id=${id}`)
        setVideoDetail(data.items[0])
        const relateData = await ApiService.fetching(`search?part=snippet&relatedToVideId=${id}&type=video`)
        setRelatedVideo(relateData.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  if(!videoDetail?.snippet) return <Loader />

    // const {
    //   snippet: {title, channelId, channelTitle, description, tags, thumbnails},
    //   statistics: {viewCount, likeCount, commentCount},
    // } = videoDetail

  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{flexDirection: {xs: 'column', md :'row'}}}>
        <Box width={{xs:'100%', md: '75%'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          {videoDetail?.snippet?.tags?.map((item, i) => (
            <Chip 
            label={item}
            key={i}
            sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
            deleteIcon={<Tag />}
            onDelete={() => {}}
            variant='outline'
             />
          ))}
          <Typography variant='h5' fontWeight={'bold'} p={2}>{videoDetail.snippet.title}</Typography>
          <Typography variant='subtitle2' sx={{opacity: '.7'}} p={2}>
            {videoDetail.snippet.description}
            </Typography>
            <Stack direction={'row'} gap={'20px'} alignItems={'center'} p={1} px={2}>
                <Stack sx={{opacity :'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                  <Visibility />
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                </Stack>
                <Stack sx={{opacity :'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                  <FavoriteOutlined />
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                </Stack>
                <Stack sx={{opacity :'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                  <MarkChatRead />
                  {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comments
                </Stack>
            </Stack>
            <Stack direction={'row'} py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack direction={'row'} alignItems={'center'} gap={'5px'} marginTop={'5px'}>
                <Avatar src={videoDetail.snippet.thumbnails.default.url} alt={videoDetail.snippet.channelTitle} />
                <Typography variant='subtitle2' color={'gray'}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{color: 'gray', fontSize: '12px', ml: '5px'}} />
                </Typography>
              </Stack>
            </Link>
            </Stack>
        </Box>
        <Box width={{xs:'100%', md: '25%'}} pl={{xl: 7}} px={2} py={{md :1, xs: 5, xl: 0}} sx={{position: 'sticky', top: '0'}} justifyContent={'center'} alignItems={'center'} overflow={'scroll'} maxHeight={'90vh'}>
          <Videos video={relatedVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail
