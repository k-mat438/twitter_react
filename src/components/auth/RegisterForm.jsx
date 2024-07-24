import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { ThemeProvider } from '@mui/material/styles';

import { theme } from "../../styles/DialogStyle";
import { CustomButton } from "../../styles/HomeStyle";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { registerApi } from '../../axios/authApi';

const RegisterForm = (props) => {
  const { handleClose ,setOpenAlert, setFalseRegister} = props
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm();

  const onSubmit = async(data) => {
    await registerApi(data)
      .then((res) => {
        if (res.status === 'success') {
          console.log(res);
          setOpenAlert(true);
          handleClose();
        } else {
          throw new Error('Registration failed');
        }
      }).catch((error) => {
        console.error('Registration error:', error);
        setFalseRegister({ alertMessage: error.message, error: true});
      })
  };

  
  const monitoringPassword = watch("password");

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '100%' } }} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          {...register('name', { required: 'Name is required', maxLength: {value: 15, message:'15文字以下で入力してください'} })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : "Please enter your name"}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          {...register('email', { required: true })}
          error={!!errors.email}
          helperText={errors.email ? 'E-mail is required':'Plese enter your E-mail'}
        />
        <Controller 
          name='date_of_birth'
          control={control}
          rules={{required: 'Birth is required'}}
          render={({ field, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <p className='login'>生年月日</p>
              <p style={{color: '#71767A',fontSize:'14px'}}>この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を確認してください。</p>
              <DemoContainer components={['DatePicker']}>
                <DatePicker 
                  label="Date of birth"
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  slotProps={{
                    textField: {
                      helperText: error?.message,
                      error: !!error
                    }
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>    
           )}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          {...register('phone_number', { required: true })}
          error={!!errors.phone_number}
          helperText={errors.phone_number ? 'Phone Number is required':'Plese enter your Phone Number'}
        />
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
        <TextField
          id="outlined-adornment-confirm-password"
          type={showPassword ? 'text' : 'password'}
          label="Confirm Password"
          variant="outlined"
          {...register('password_confirmation', {
            required: true,
            validate: (value) => value === monitoringPassword || "Passwords do not match"
          })}
          error={!!errors.password_confirmation}
          helperText={errors.password_confirmation ? errors.password_confirmation.message : ""}
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
        <Box sx={{ display: 'flex', padding: '2rem 0', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ ...CustomButton, border: 'none', color: 'white', backgroundColor: '#1da1f2' }}
            type='submit'
          >
            作成
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterForm;
