import React from 'react';
import { Box, Button, Divider, FormControl, InputLabel, Link, Stack, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';

const Signin = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box>
      <Box noValidate my={4} sx={{ width: { xs: '90%', md: '50%' } }} marginX={'auto'}>
        <Typography variant='h4' textAlign={'center'}> Signin </Typography>
        <Typography variant='h6' textAlign={'center'}> You're Just 1 Step away </Typography>

        <Stack direction={'column'} >
          <Box  autoComplete="off">
            <Box my={2} mt={2}>
              <TextField label="Email-Id" variant="outlined" placeholder='Enter Your Email-Id' fullWidth />
            </Box>

            <Box my={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel> Password </InputLabel>
                <OutlinedInput type={showPassword ? 'text' : 'password'} endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                } label="Password " />
              </FormControl>
            </Box>

            <Box my={2}>
              <Button sx={{padding: 1}} variant='contained' type='submit' fullWidth> Login </Button>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ marginTop: '20px', marginBottom: '15px' }} />
        <Typography> Don't Have Account
          <Link component={RouterLink} to={"/signup"}> Click Here to Register? </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Signin