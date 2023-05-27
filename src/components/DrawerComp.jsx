import React  from 'react';
import { Button, Drawer, List, Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const DrawerComp = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <>
      <Box maxWidth={"350px"}>
        <Drawer sx={{ color: 'white' }} anchor={'right'} open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{
          sx: { width: "180px"},
        }}>
          <List component={Stack} direction={'column'} >
            <Link component={RouterLink} to={"/"} >
              <Button  variant='text' sx={{ color: 'black', m: 2 }} startIcon={<HomeIcon sx={{ mx: 1 }}/>}>  <Typography sx={{mx: 2}}> Home </Typography> </Button>
            </Link>

            <Link component={RouterLink} to={"/signin"} >
              <Button variant='text' sx={{ color: 'black', m: 2 }} startIcon={<LoginIcon sx={{ mx: 1 }}/>}> <Typography sx={{mx: 2}}> Signin </Typography> </Button>
            </Link>

            <Link component={RouterLink} to={"/signup"}>
              <Button variant='text' sx={{ color: 'black', m: 2 }} startIcon={<LogoutIcon sx={{ mx: 1 }} />}> <Typography sx={{mx: 2}}> Signup </Typography> </Button>
            </Link> 

            <Link component={RouterLink} to={"/cart"}>
              <Button variant='text' sx={{ color: 'black', m: 2 }} startIcon={<ShoppingCartIcon sx={{ mx: 1 }} />}> <Typography sx={{mx: 2}}> Cart </Typography> </Button>
            </Link>
          </List>
        </Drawer>
      </Box>
    </>
  )
}

export default DrawerComp;