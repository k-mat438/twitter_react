import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect } from 'react';

import Home from '../pages/Home';
import TweetsIndex from "../pages/TweetsIndex";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import { getCurrentUser } from "../axios/instance";

import {useAuth} from '../contexts/AuthContext'

const Routing = () => {
  const { isAuthenticated, user, setUser, setIsAuthenticated} = useAuth();

  useEffect(() => {
    checkCurrentUser();
    // checkAuthStatus()
    // localStorage.clear()
  },[])

  useEffect(() => {
    console.log('User', user);
    console.log('Sign', isAuthenticated);
    // localStorage.clear()
  }, [user, isAuthenticated]);

  const checkCurrentUser = () => {
    getCurrentUser().then((res) => {
      console.log(res)
      if (res.is_login) {
        setUser(res.data)
        setIsAuthenticated(true)
      } 
    }).catch((error) => console.log(error))
  };

  const PrivateRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  };

  const PublicRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to="/api/v1/tweets" replace />;
  };

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="api/v1/tweets" element={<TweetsIndex />} />
        <Route path="api/v1/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing