import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Category from '../category/category';
import Videos from '../videos/videos';
import { ApiService } from '../service/api';

const Main = () => {
    const [video, setVideo] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState('New');
    const selectedCategoryHandler = (category) => setSelectedCategory(category)
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideo(data.items)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [selectedCategory])
    console.log(selectedCategory);
  return (
    <Stack>
        <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
        <Box py={2} sx={{height: '90vh'}}>
            <Container maxWidth={'90%'}>
                <Typography fontSize={'40px'} fontWeight={'700'} mb={2}>
                    {selectedCategory} <span style={{color: 'red'}}>video</span>
                    </Typography>
                    <Videos video={video} />
            </Container>
        </Box>
    </Stack>
  )
}

export default Main
