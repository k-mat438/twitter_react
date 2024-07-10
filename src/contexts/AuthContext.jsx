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
    // return localStorage.getItem('isAuthenticated') === 'true';
    return !!(Cookies.get("_access_token") || Cookies.get("_client") || Cookies.get("_uid"));
  });
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null)
  // const [user, setUser] = useState(() => {
  //   const savedUser = localStorage.getItem('user');
  //   return savedUser ? JSON.parse(savedUser) : null;
  // });
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   const storedValue = Cookies.get('isAuthenticated');
  //   return storedValue !== undefined ? JSON.parse(storedValue) : false;
  // });
  // const [user, setUser] = useState(() => {
  //   const savedUser = localStorage.getItem('user');
  //   return savedUser ? JSON.parse(savedUser) : null;
  // });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;

export const useAuth = () => useContext(AuthContext)