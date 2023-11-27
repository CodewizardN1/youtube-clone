import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../service/api';
import { Box, Container, Typography,  } from '@mui/material';
import { colors } from '../constants/constant';
import Videos from '../videos/videos';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
          const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
          console.log(data);
          setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
  return (
    <Box py={2} sx={{height: '90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} mb={2}>Seacrh result for <span style={{color: 'red'}}>{id}</span> videos</Typography>
        <Videos video={videos} />
      </Container>

    </Box>
  )
}

export default Search
