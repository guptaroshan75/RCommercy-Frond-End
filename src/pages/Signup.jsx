import { Button, Divider, FormControl, InputLabel, Link, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box>
      <Box component={'form'} noValidate my={4} sx={{ width: { xs: '90%', md: '50%' } }} marginX={'auto'}>
        <Typography variant='h4' textAlign={'center'}> Register Here </Typography>
        <Typography variant='h6' textAlign={'center'}> You're Just 1 Step away </Typography>
        <Stack direction={'column'} >
          <Box my={1} mt={2}>
            <TextField label="Username" variant="outlined" placeholder='Enter Your Username' fullWidth />
          </Box>
          <Box my={1}>
            <TextField label="Email-Id" variant="outlined" placeholder='Enter Your Email-Id' fullWidth />
          </Box>
          <Box my={1}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel  > Password </InputLabel>
              <OutlinedInput type={showPassword ? 'text' : 'password'} endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              } label="Password " />
            </FormControl>
          </Box>

          <Box my={1}>
            <Button sx={{padding: 1}} variant='contained' fullWidth> Register </Button>
          </Box>
        </Stack>
        <Divider sx={{ marginTop: '20px', marginBottom: '15px' }} />
        <Typography> Already Have Account
          <Link component={RouterLink} to={"/signin"}> Click Here to Login? </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Signup;