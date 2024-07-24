import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect } from 'react';

import Home from '../pages/Home';
import TweetsIndex from "../pages/TweetsIndex";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import { getCurrentUser } from "../axios/authApi";
import { useAuth } from '../contexts/AuthContext';

const Routing = () => {
  const { isAuthenticated, setUser, setIsAuthenticated, setLoading} = useAuth();

  useEffect(() => {
    checkCurrentUser();
  },[])
  
  const checkCurrentUser = () => {
    getCurrentUser().then((res) => {
      console.log(res)
      if (res.is_login) {
        setUser(res.data)
        setIsAuthenticated(true)
        setTimeout(() => {
          setLoading(false);
        },1500)
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