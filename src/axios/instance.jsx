import axios from "axios";
import Cookies from "js-cookie"

const apiHome = axios.create({
  baseURL: `${process.env.REACT_APP_REQUEST_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const registerInstance = async(data) =>{
  const response = await apiHome.post('/users',data);
  
  return response.data
}

export const loginInstance = async(data) => {
  const response = await apiHome.post('/users/sign_in', data);

  return response
}


export const loginOutstance = async(data) => {
  const response = await apiHome.post('/users/sign_out', data);

  return response.data
}

export const getCurrentUser = async() => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  const currentUser = await apiHome.get('/auth/sessions', {
    headers: {
      "access-token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid")
    }
  })
  return currentUser.data
}
