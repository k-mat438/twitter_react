import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const PasswordForm = (props) => {
  const {showPassword, register, errors, handleClickShowPassword, handleMouseDownPassword} = props;
  return (
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
  )
}

export default PasswordForm