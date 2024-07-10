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
  },[])

  useEffect(() => {
    console.log('User', user);
    console.log('Sign', isAuthenticated);
  }, [user, isAuthenticated]);

  const checkCurrentUser = async () => {
    const res = await getCurrentUser();
    console.log(res)
    if (res.is_login) {
      setUser(res.data)
      setIsAuthenticated(true)
    }
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