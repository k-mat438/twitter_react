import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateOfBirth = () => {
  // const { register, errors, helperText } = props 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <p className='login'>生年月日</p>
      <p style={{color: '#71767A',fontSize:'14px'}}>この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を確認してください。</p>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of birth"/>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateOfBirth;