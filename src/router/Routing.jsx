import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from '../pages/Home';
import Page404 from "../pages/Page404";
// import SignUp from '../pages/SignUp';
// import SignIn from '../pages/SignIn';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/api/v1/users/sign_up' element={<SignUp />} /> */}
        {/* <Route path='/api/v1/users/sign_in' element={<ScrollDialogButton />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default Routing