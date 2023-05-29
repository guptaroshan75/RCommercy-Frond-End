import { Box,Toolbar, AppBar, CssBaseline, Typography, Stack, ListItem, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box py={2}>
      <CssBaseline />
      <AppBar position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction={'row'} alignItems={'center'} spacing={1} my={3}>
            <Typography variant="h5"> RCommercy </Typography>
          </Stack>

          <Stack alignContent={'center'}>
            <ListItem>
              <Link component={RouterLink} to={"https://www.instagram.com/gupta_roshan75/"} target='_blank' 
                sx={{ color: 'white'}} px={2}> <InstagramIcon />
              </Link>
              <Link component={RouterLink} to={"https://github.com/guptaroshan75"} target='_blank'
                sx={{ color: 'white'}} px={2}> <GitHubIcon />
              </Link>
              <Link component={RouterLink} to={"https://www.linkedin.com/in/roshangupta2000/"} target='_blank'
                sx={{ color: 'white'}} px={2}> <LinkedInIcon />
              </Link>
            </ListItem>
          </Stack>
          </Toolbar>
          </AppBar>
    </Box>
  )
}

export default Footer;