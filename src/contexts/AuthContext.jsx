import { createContext, useState, useContext } from 'react';
import Cookies from "js-cookie"

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!(Cookies.get("_access_token") || Cookies.get("_client") || Cookies.get("_uid"));
  });
  const [loading , setLoading] = useState(true);
  const [user, setUser] = useState(null)
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;

export const useAuth = () => useContext(AuthContext)