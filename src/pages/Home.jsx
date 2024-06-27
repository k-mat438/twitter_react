import { useState } from "react";
import xLogo from '../x-logo2.png';
import '../App.css';
import { CustomButton } from "../styles/HomeStyle";

import ScrollDialogButton from "../components/auth/ScrollDialog";
import LogInForm  from "../components/auth/LogInForm";
import AuthRegister from "../components/auth/AuthRegisterButton";
import { SnackbarAlert } from "../components/snackbar/SnackbarAlert";
import { SnackbarTop } from "../components/snackbar/SnackbarTob";

const Home = () => {
  const [openBar, setOpenBar] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [ openAlert, setOpenAlert ] = useState(false);

  const { vertical, horizontal, open } = openBar;

  const handleClick = () => () => {
    setOpenBar({ ...openBar, open: true});
  };

  const handleClose = () => {
    setOpenBar({ ...openBar, open: false});
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={xLogo} alt="X Logo" />
      </div>
      <div className="right-section">
        <h1 style={{ marginBottom: '0' }}>すべての話題が、ここに。</h1>
        <p className='sanka'>今すぐ参加しましょう。</p>
        <div>
          <AuthRegister handleClick={handleClick({ vertical, horizontal })} setOpenAlert={setOpenAlert}/>
          <p className="info">アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したことになります。</p>
          <p className="login">アカウントをお持ちの場合</p>
          <ScrollDialogButton variant={'outlined'} sx={{ ...CustomButton, marginBottom: '3rem' }} buttonText='ログイン' formComponent={LogInForm} setOpenAlert={setOpenAlert}/>
        </div>
      </div>
      <SnackbarTop vertical={vertical} horizontal={horizontal} handleClose={handleClose} open={open}/>
      <SnackbarAlert openAlert={openAlert} handleAlertClose={handleAlertClose}/>
    </div>
  )
}

export default Home;