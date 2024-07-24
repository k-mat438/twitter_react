import Cookies from "js-cookie"

import { apiHome, apiPrivate } from "./instance";


export const registerApi = async(data) =>{
  const response = await apiHome.post('/users',data);
  
  return response.data
}

export const loginApi = async(data) => {
  const response = await apiHome.post('/users/sign_in', data);

  return response
}


export const logOutApi = async() => {
  const response = await apiPrivate.delete('/users/sign_out');

  return response.data
}

export const getCurrentUser = async() => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) 
    return null
  const currentUser = await apiPrivate.get('/auth/sessions')
  return currentUser.data
}
