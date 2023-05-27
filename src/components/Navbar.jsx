import { Box, AppBar, CssBaseline, Toolbar, Typography, Stack, ListItem, Button, Link, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import DrawerComponent from './DrawerComp';

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  console.log(isMatch);

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Typography variant="h5">
                <Link component={RouterLink} to={'/'} sx={{ color: 'white', textDecoration: 'none' }}>
                  RCommercy
                </Link>
              </Typography>
            </Stack>
            {
              isMatch ? (<IconButton onClick={toggleDrawer} >
                <MenuIcon 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { md: 'none', xs: 'block' }, color: 'white' }}/>
              </IconButton>) : (
                <>
                  <Stack alignContent={'center'}>
                    <ListItem>

                      <Link component={RouterLink} to={"/"}>
                        <Button variant='text' sx={{ color: 'white', pr: 2 }} startIcon={<HomeIcon />}> Home </Button>
                      </Link>

                      <Link component={RouterLink} to={"/signin"}>
                        <Button variant='text' sx={{ color: 'white', pr: 2 }} startIcon={<LoginIcon />}> Signin </Button>
                      </Link>

                      <Link component={RouterLink} to={"/cart"}>
                        <Button variant='text' sx={{ color: 'white', pr: 2 }} startIcon={<ShoppingCartIcon />}> Cart </Button>
                      </Link>
                    </ListItem>
                  </Stack>
                </>
              )
            }
          </Toolbar >
        </AppBar >
      </Box >
      <DrawerComponent isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default Navbar;