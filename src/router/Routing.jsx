import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from '../pages/Home';
// import SignUp from '../pages/SignUp';
// import SignIn from '../pages/SignIn';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/api/v1/users/sign_up' element={<SignUp />} /> */}
        {/* <Route path='/api/v1/users/sign_in' element={<SignIn />} /> */}
      </Routes>
    </Router>
  )
}

export default Routing