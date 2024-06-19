import xLogo from'../x-logo2.png';
import '../App.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from '@mui/material/Button';

const CustomButton = {
  border: '0.1px solid #fff',
  borderRadius: '2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  maxWidth: '380px',
  minWidth: '300px',
};
const IconWithButton = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '2rem',
  "&:hover": {
    opacity: '0.9',
    backgroundColor: '#e0e0e0'
  },
  textTransform: 'none',
  maxWidth: '380px',
  minWidth: '300px',
}

const Home = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={xLogo} alt="X Logo" />
      </div>
      <div className="right-section">
        <h1>すべての話題が、ここに。</h1>
        <p className='sanka'>今すぐ参加しましょう。</p>
        
        <div>
          <div class="buttons">
            <Button startIcon={<FcGoogle/>} sx={IconWithButton}>Google で登録</Button>
            {/* <button className="google-btn"><FcGoogle size='1.3rem'/>Google で登録</button> */}
            {/* <button className="apple-btn"><FaApple size='1.3rem'/>Appleのアカウントで登録</button> */}
            <Button startIcon={<FaApple/>} sx={{ ...IconWithButton, fontWeight: 'bold' }}>Appleのアカウントで登録</Button>
            <div style={{textAlign: 'center',minWidth:'300px',maxWidth: '380px'}}>
              <p className="bordered-text">または</p>
            </div>
            {/* <button className="create-btn">アカウントを作成</button> */}
            <Button variant="contained" sx={{...CustomButton,border: 'none',fontSize: 'none', backgroundColor:'#1da1f2'}}>アカウントを作成</Button>
          </div>
          <p className="info">アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したことになります。</p>
          <p className="login">アカウントをお持ちの場合</p>
          <Button sx={{...CustomButton,marginBottom:'3rem'}} variant="outlined">ログイン</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;