import { Box, Stack } from '@mui/material'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar'
const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} sx={{position: 'sticky', top: 0, zIndex: 999, background: '#fcfaf5', height: '10vh'}}>
        <Link to={'/'}>
            <img width={'170px'} height={'60px'} src={logo} alt="" />
        </Link>
            <SearchBar />
        <Box />
    </Stack>
  )
}

export default Navbar
