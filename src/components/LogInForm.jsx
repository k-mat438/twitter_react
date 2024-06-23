import { useState } from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../styles/DialogStyle";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import InputAdornment from '@mui/material/InputAdornment';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CustomButton, IconWithButton } from "../styles/HomeStyle";
import Snackbar from '@mui/material/Snackbar';


const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = () => () => {
    setState({ ...state, open: true});
  };

  const handleClose = () => {
    setState({ ...state, open: false});
  };

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display:'flex', justifyContent:'center',flexDirection: 'column', alignItems: 'center'}}>
        <Button onClick={handleClick({ vertical, horizontal })} startIcon={<FcGoogle />} sx={IconWithButton}>Google でログイン</Button>
        <Button onClick={handleClick({ vertical, horizontal })} startIcon={<FaApple />} sx={{ ...IconWithButton, fontWeight: 'bold' }}>Appleのアカウントでログイン</Button>
      </Box>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <div className="mataha">
          <p className="bordered-text">または</p>
        </div>
      </Box>
      <Box component="form" sx={{'& > :not(style)': { m: 1, width: '100%' }}} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" {...register('email', {required: 'Email is required'})} helperText={errors.email ? errors.email.message :""} />
        <TextField
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          {...register('password', { required: true, minLength: { value: 6, message:'6文字以上で入力してください' } })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display:'flex',padding:'2rem 0', justifyContent:'center'}}>
          <Button variant={'contained'} sx={{ ...CustomButton, border: 'none', color:'white',backgroundColor: '#1da1f2' }} type='submit'>ログイン</Button>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2500}
        message="Not available yet"
        key={vertical + horizontal}
        ContentProps={{
          style: {
            backgroundColor: '#FFC107',
            color: 'black', 
          },
        }}
      />
    </ThemeProvider>
  )
}

export default LogInForm;