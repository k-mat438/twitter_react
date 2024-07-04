import { Button } from "@mui/material"

import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { IconWithButton, CustomButton } from "../../styles/HomeStyle";
import  RegisterForm  from "./RegisterForm";
import ScrollDialogButton from "./ScrollDialog"

const AuthRegister = ({handleClick, setOpenAlert, setFalseRegister}) => {
  return (
    <>
      <div className="buttons">
        <Button onClick={handleClick} startIcon={<FcGoogle />} sx={IconWithButton}>Google で登録</Button>
        <Button onClick={handleClick} startIcon={<FaApple />} sx={{ ...IconWithButton, fontWeight: 'bold' }}>Appleのアカウントで登録</Button>
        <div className="mataha">
          <p className="bordered-text">または</p>
        </div>
        <ScrollDialogButton variant={'contained'} sx={{ ...CustomButton, border: 'none', fontSize: 'none', backgroundColor: '#1da1f2' }} buttonText='アカウントを作成' formComponent={RegisterForm} setOpenAlert={setOpenAlert} setFalseRegister={setFalseRegister}/>
      </div>
    </>
  )
}

export default AuthRegister