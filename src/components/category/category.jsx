import { Button, Stack } from '@mui/material'
import React from 'react'
import { Checkroom, DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, Home,  LiveTv,  MusicNote,  OndemandVideo, School, SportsEsports, TheaterComedy } from '@mui/icons-material';

const Category = ({selectedCategoryHandler, selectedCategory}) => {
    const category = [
        { name: 'New', icon: <Home /> },
        { name: 'Movie', icon: <OndemandVideo /> },
        { name: 'Live', icon: <LiveTv /> },
        { name: 'Gaming', icon: <SportsEsports /> },
        { name: 'Education', icon: <School /> },
        { name: 'Sport', icon: <FitnessCenter /> },
        { name: 'Comedy', icon: <TheaterComedy /> },
        { name: 'Podcast', icon: <GraphicEq /> },
        { name: 'Fashion', icon: <Checkroom /> },
        { name: 'Crypto', icon: <DeveloperMode /> },
        { name: 'Gym', icon: <FitnessCenter /> },
        { name: 'Beauty', icon: <FaceRetouchingNatural /> },
        { name: 'Music', icon: <MusicNote /> },
      ];
  return (
    <Stack direction={'row'} sx={{overflowX :'scroll'}} className='scroll'>
        {category.map((item) => (
            <button key={item.name} className='category-btn' style={{background: item.name === selectedCategory && '#76323f',  color :item.name === selectedCategory && '#fff'}} onClick={() => selectedCategoryHandler(item?.name)}>
                <span style={{marginRight: '15px', color :item.name === selectedCategory ? '#fff' : '#76323f'}}>{item.icon}</span>
                <span style={{opacity :'1'}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category
