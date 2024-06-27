import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from '../pages/Home';
import TweetsIndex from "../pages/TweetsIndex";
import Page404 from "../pages/Page404";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='api/v1/tweets' element={<TweetsIndex />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default Routing