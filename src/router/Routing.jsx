import { Routes, Route, BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from '../pages/Home';
import TweetsIndex from "../pages/TweetsIndex";
import Page404 from "../pages/Page404";
import { getCurrentUser } from "../axios/instance";

const Routing = () => {
  const [ isSignedIn, setIsSignedIn ] = useState(false)
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    checkCurrentUser()
  },[setUser])

  const checkCurrentUser = async() => {
    const res = await getCurrentUser()
    console.log(res)
    if (res.is_login) {
      setIsSignedIn(true)
      setUser(res.data)
    }
  }
  
  const Private = () => {
    if (isSignedIn) {
      return <Outlet />
    } else {
      return <Navigate to='/' />
    }
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Private />}>
          <Route path='api/v1/tweets' element={<TweetsIndex />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default Routing