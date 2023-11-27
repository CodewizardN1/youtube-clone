import { Box, Button } from '@mui/material'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main/main'
import Channel from './components/channel/channel'
import VideoDetail from './components/videoDetail/videoDetail'
import Search from './components/search/search'
import Navbar from './components/navbar/navbar'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:id' element={<Search />} />
        <Route path='*' element={<Box>error 404 go home page</Box>} />
      </Routes>
    </Box>
  )
}

export default App
