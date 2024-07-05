import { useState } from "react";
import xLogo from '../x-logo2.png';
import '../App.css';
import { CustomButton } from "../styles/HomeStyle";

import ScrollDialogButton from "../components/auth/ScrollDialog";
import LogInForm  from "../components/auth/LogInForm";
import AuthRegister from "../components/auth/AuthRegisterButton";
import { SnackbarAlert } from "../components/snackbar/SnackbarAlert";
import { SnackbarTop } from "../components/snackbar/SnackbarTop";
import RegisterFalseAlert from "../components/snackbar/RegisterFalseAlert";

const Home = (props) => {
  const { setIsSignedIn, setUser } = props;
  const [openBar, setOpenBar] = useState(false);

  const [ openAlert, setOpenAlert ] = useState(false);
  const [ falseRegister, setFalseRegister ] = useState({alertMessage: '', error: false});

  const handleClick = () => {
    setOpenBar(true);
  };

  const handleClose = () => {
    setOpenBar(false);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
    setFalseRegister({alertMessage: '', error: false})
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
          <AuthRegister handleClick={handleClick} setOpenAlert={setOpenAlert} setFalseRegister={setFalseRegister}/>
          <p className="info">アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したことになります。</p>
          <p className="login">アカウントをお持ちの場合</p>
          <ScrollDialogButton variant={'outlined'} sx={{ ...CustomButton, marginBottom: '3rem' }} buttonText='ログイン' formComponent={LogInForm} setOpenAlert={setOpenAlert} setIsSignedIn={setIsSignedIn} setUser={setUser}/>
        </div>
      </div>
      <SnackbarTop handleClose={handleClose} openBar={openBar}/>
      <SnackbarAlert openAlert={openAlert} handleAlertClose={handleAlertClose}/>
      <RegisterFalseAlert falseRegister={falseRegister} handleAlertClose={handleAlertClose} />
    </div>
  )
}

export default Home;